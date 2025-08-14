const express = require('express');
const fs = require('fs');
const path = require('path');
const paypal = require('@paypal/checkout-server-sdk');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const ITEMS_FILE = path.join(__dirname, 'items.json');

// PayPal sandbox
const clientId = "TU_CLIENT_ID";
const clientSecret = "TU_CLIENT_SECRET";
const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

function leerItems() {
    return JSON.parse(fs.readFileSync(ITEMS_FILE, 'utf8'));
}
function guardarItems(data) {
    fs.writeFileSync(ITEMS_FILE, JSON.stringify(data, null, 2));
}

// Crear orden PayPal
app.post('/create-order', async (req, res) => {
    const { id, cantidad } = req.body;
    const tienda = leerItems();
    const item = tienda.llaves.find(i => i.id === id) || tienda.servicios.find(i => i.id === id);
    if (!item) return res.status(404).send("Item no encontrado");
    if (cantidad > item.cantidad) return res.status(400).send("Stock insuficiente");

    const orderRequest = {
        intent: 'CAPTURE',
        purchase_units: [{ amount: { currency_code: 'USD', value: (item.precio * cantidad).toFixed(2) }, description: item.nombre }]
    };

    const request = new paypal.orders.OrdersCreateRequest();
    request.requestBody(orderRequest);

    try {
        const order = await client.execute(request);
        res.json({ id: order.result.id });
    } catch (e) {
        console.error(e);
        res.status(500).send("Error creando la orden");
    }
});

// Capturar orden PayPal
app.post('/capture-order', async (req, res) => {
    const { orderID, id, cantidad } = req.body;
    const captureRequest = new paypal.orders.OrdersCaptureRequest(orderID);
    captureRequest.requestBody({});
    try {
        const capture = await client.execute(captureRequest);
        if (capture.result.status === "COMPLETED") {
            const tienda = leerItems();
            const item = tienda.llaves.find(i => i.id === id) || tienda.servicios.find(i => i.id === id);
            item.cantidad -= cantidad;
            guardarItems(tienda);
            res.json({ success: true, newStock: item.cantidad });
        } else {
            res.status(400).json({ success: false });
        }
    } catch (e) {
        console.error(e);
        res.status(500).send("Error capturando pago");
    }
});

// Servir index.html al abrir /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
