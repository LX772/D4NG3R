 var id;
      var useridg;
      var passwordg;
      var pos;
      var posi;
      var scriptAxios = document.createElement('script');
      scriptAxios.src = 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
      scriptAxios.onload = checkIfScriptsLoaded;
      document.head.appendChild(scriptAxios);
      
      // Crear y cargar el script de CryptoJS desde un CDN
      var scriptCrypto = document.createElement('script');
      scriptCrypto.src = 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js';
      scriptCrypto.onload = checkIfScriptsLoaded;
      document.head.appendChild(scriptCrypto);
      
      // Variable para controlar si ambos scripts han sido cargados
      var scriptsLoaded = {
          axios: false,
          crypto: false
      };
      
      // Función para verificar si ambos scripts han sido cargados
      function checkIfScriptsLoaded() {
          if (this.src.includes('axios')) {
              scriptsLoaded.axios = true;
          }
          if (this.src.includes('crypto-js')) {
              scriptsLoaded.crypto = true;
          }
      }
	  var text;
      var pos1;
      var posi1;
      var attkbase;
      var IDBOT=";"
      var userid, userid1;
      var fire="", detener;
      var posiciones=[300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330]
      var other=['Cannon*1','Cannon*2','Cannon*3','Cannon*4','Cannon*5','Cannon*6','Cannon*7','Cannon*8','Cannon*9','Cannon*10','Cannon*11','Cannon*12','Cannon*13','Cannon*14','Cannon*15','Cannon*16','Cannon*17','Cannon*18','Cannon*19','Cannon*20']
      var algoritmo=0;
      var advanza;
      var verdadero=""
      var verdadero1="";
      var play=false;
      var contador=0, tester=1;;
      var nada=0;
      var myNick, salida;
      var rc = "51tizj6u02";
      var activate=1, lista=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
      var another=0;
      var uno=0,seg = 0,mins = 0;
      var codigos;
      var ws,oro, tirr = 1;
      var nluz = 3, luz, ball
      var pose, fire=false,barril=false,on=false;
      var haaapsi, time;
      var codigo = 1;
      let btn = async function () {
        try {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672/");
        } catch (error) {
          conole.log(error);
        }
        const parseHaaapsi = (e) => {
          var temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(
            5,
            10
          ));
        };
        ws.onopen = () => { 
          ws.send(":es IDENT 352 -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = (event) => {
          if (event.data instanceof Blob || event.data instanceof ArrayBuffer) {
            // El mensaje es un Blob o ArrayBuffer (datos binarios), no hacer nada o manejar según sea necesario.
            console.log("Mensaje binario recibido. No se procesará.");
            return;
          }
          // El mensaje es de tipo string, puedes procesarlo como texto.
          var text = event.data;
          // Verificar si el mensaje comienza con "850"
          if (text.startsWith("850")) {
            return;
          }
          var snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            var temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            var password = snippets[2];
            var username = snippets[3];
            useridg = id;
            passwordg = password;
            salida= true;
            var finalusername = username.split("\r\n");
            ws.send(
              "USER " +
                id +
                " " +
                password +
                " " +
                finalusername +
                " " +
                temp +
                "\r\n"
            );
          }
          function getClientDeviceModel() {
            var tem, ua = navigator.userAgent.toLowerCase(), N = navigator.appName, M = ua.match(/(opr)\/?\s*([\d\.]+)/i) || [];
            return M && M.length || (M = ua.match(/(edge|opr|opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || []),
            (M = M[2] ? [M[1], M[2]] : [N, navigator.appVersion, "-?"]) && null != (tem = ua.match(/version\/([\.\d]+)/i)) && (M[2] = tem[1]),
            M.join(" ")
          }
          if (snippets[0] === "999") {
              if (localStorage.getItem("MYADDONS") !== null) {
              ws.send("FWLISTVER "+ localStorage.getItem("FWLISTVER")+"\r\n");
              ws.send("ADDONS "+ localStorage.getItem("MYADDONS")+"\r\n");
              ws.send("MYADDONS "+ localStorage.getItem("MYADDONS")+"\r\n");
              ws.send("PHONE " + window.screen.width + " " + window.screen.height + " 0 2 :" + getClientDeviceModel()+"\r\n");
              ws.send("JOIN\r\n");
              }else {
              ws.send("FWLISTVER 0\r\n");
              ws.send("ADDONS 0\r\n");
              ws.send("MYADDONS 0 0\r\n");
              ws.send("PHONE " + window.screen.width + " " + window.screen.height + " 0 2 :" + getClientDeviceModel()+"\r\n");
              console.log(">>> Conexion exitosa..."+"\r\n");
              ws.send("JOIN\r\n");
            }
            }
            if(snippets[0] === "883"){
              localStorage.setItem("FWLISTVER", snippets[1]);
            }
            if(snippets[0] === "858"){
              if(snippets[22].length === 6){
                localStorage.setItem("MYADDONS", snippets[22]+ " " +snippets[23])
              }
            }if(snippets[0] === "JOIN" && snippets[3] === id){
              myNick= snippets[2]
            }
            if (snippets[0] === "PING\r\n") {
              ws.send("PONG\r\n");
            }
            if (snippets[0] === "VIEW_SCRIPT") {
              IDBOT=snippets[2];
              }

          if (snippets[0] === '900'){
            play=false;
            planeta = snippets[1];
            console.log(planeta);
            setTimeout(() => {
              ws.send("ACTION 3367 "+IDBOT+"\r\n");
            }, 3000);
          }
          if(snippets[0] === "852"){
            if(snippets[1] === "6770") {
                  time = 0;
                  ball = "6770";
                }
            else if (snippets[1] === "2401"){
                  time = 500;
                  ball = "2401";
                }
          };
          if (snippets[0] === 'ACTION' && snippets[2] == id && snippets[4] == "tiró"){
            on=false;
            if(luz === true){
              nluz--;
              if(nluz === 0){
                nluz = 3;
                luz_dec();
              }
            }
            uno=0;
            seg = 0;
            mins = 0;
          }else if (snippets[0] === 'ACTION' && snippets[2] != id && snippets[4] == "tiró"){
            uno=0;
            seg = 0;
            mins = 0;
            on=false;
          }
          if(play === true){
          if(true){
            if (event.data.includes("cn/6000;-50;0;33")){
              if(oro== "oro"){
                oro="";
                ws.send("ACTION 6529 "+IDBOT+"\r\n")
              }
                fire=true;
              on=true;
                if(pose == 365){
                }
                else if(pose != 365){
                  pose=365;
                 ws.send("REMOVE 365"+"\r\n")
                }
            }else if (event.data.includes("cn/6000;-25;0;33")){
              fire=true;
              if(oro== "oro"){
                oro="";
                ws.send("ACTION 6529 "+IDBOT+"\r\n")
              }
              on=true;
                if(pose == 380){
                }
                else if(pose != 380){
                  pose=380;
                  ws.send("REMOVE 380"+"\r\n")
                }
            }
            else if (event.data.includes("cn/6000;0;0;33")){
              fire=true;
              ws.send("ACTION 6528 "+IDBOT+"\r\n")
              oro="oro";
              on=true;
                if(pose == 390){
                }
                else if(pose != 390){
                  pose=390;
                  ws.send("REMOVE 390"+"\r\n")
                }
            }else {
            }
          }
        }
        if(event.data.includes("No tienes Balas")){
          ws.send("QUIT :ds\r\n");
            };
          if(snippets[0] === "ACTION" && snippets[2] == id && snippets[4] == 'tiró'){
            if(true){
              setTimeout(() => {
                ws.send("ACTION 4493 "+IDBOT+"\r\n");
              }, 500);
          }
        }
          if(snippets[0] === "ADD_VIEW" && snippets[4] === "1;cn/light_g;52;0;33" && tirr === 1){
            play=true;
            tirr=0;
            if(on == true){
                setTimeout(() => {
                    ws.send("ACTION "+ball+" "+IDBOT+"\r\n");
                }, time);
              }    
          }else if(snippets[0] === "ADD_VIEW" && snippets[4] === "1;cn/light_r;52;0;33"){
            tirr=1;
            clearInterval(advanza);
          }else{
          }
          
            if (snippets[0]){
             if(event.data.includes(myNick)){
            }
            else if(event.data.includes("tiró por con Luz Verde")){
              another++;
             }
            if(activate==1){
              if(event.data.includes("tiró por con Luz Verde")){
                activate=0;
                setTimeout(() => {
                  activate=1;
                  another=0;
                }, 60000);
              }
            }
            if(another>=7){
              another=0;
                setTimeout(() => {
                  ws.send("JOIN " + "Cannon*"+lista[Math.floor(Math.random() * lista.length)] + "\r\n");
                }, 3000);
            }
            }
            if (snippets[0] === "JOIN" && snippets[3] === id) {
            let number = event.data.toString().split("-1").join("");
            let number1 = number.split(" ").filter(Number);
            pose = parseInt(number1[number1.length -1]);
          }
          if(snippets[0] === "REMOVE" && snippets[1] === id){
            pose = snippets[2];
          }
       };
       ws.onclose = (event) => {
          setTimeout(() => {
            btn();
          }, 300000);
         }
     };
      btn();
