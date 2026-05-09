navigator.wakeLock;
        try {
  const wakeLock = async() => {
    await navigator.wakeLock.request("screen");
  }
   wakeLock();
} catch (err) {
  // the wake lock request fails - usually system related, such being low on battery
  console.log("the wake lock request fails - usually system related, such being low on battery",`${err.name}, ${err.message}`);
}
      var pos;
      var posi;
      var text;
      var a = document.getElementById("attack");
      var b1 = document.getElementById("b1");
      var b2 = document.getElementById("b2");
      var b3 = document.getElementById("b3");
      var timeshift = document.getElementById("timeshifter");
      const u = -40;
      const v = 40;
      var pos1;
      var posi1;
      var attkbase;
      var lista = [], lista2=[];
      var userids=[], userids2=[], userid2,listadef=[];
      var membersarr = [], snipfinal = [];
      var userid;
      var useridarray=[], membersarr1=[],useridarray2=[];
      var defbase;
      var notkick = 3, detener;
      var z2, review2
      var nick, king;
      var atacar, vai
      var loglimit = 0;
      var variable, variable1;
      var nombre, nombre2;
      var acciones = 1;
      var unasola = 1;
      var nickfound;
      var accionRes;
      var rc2, rc3, rc4,rc5 ,rc6 ,rc7 ,rc8;
      var rc;
      var codigos;
      var haaapsi;
      var all = document.getElementById("btn-connect");
      var codigo = 1;
      all.addEventListener("click", () => {
        if(document.getElementById("rc").value.length !== 0) {connect2()};
        if(document.getElementById("rc2").value.length !== 0) connect();
        if(document.getElementById("rc3").value.length !== 0) connect3();
        if(document.getElementById("rc4").value.length !== 0) connect4();
        if(document.getElementById("rc5").value.length !== 0) connect5();
        if(document.getElementById("rc6").value.length !== 0) connect6();
        if(document.getElementById("rc7").value.length !== 0) connect7();
        if(document.getElementById("rc8").value.length !== 0) connect8();
      });
	  function incrementAttack() {
		var value = parseInt(document.getElementById('attack').value, 10);
		value = isNaN(value) ? 0 : value, increment = parseInt(document.getElementById('increment').value);
    for (let i = 0; i < increment; ++i) {
      value++;
    }
		document.getElementById('attack').value = value;
		}
	  function decrementAttack() {
		var value = parseInt(document.getElementById('attack').value, 10);
		value = isNaN(value) ? 0 : value, decrement = parseInt(document.getElementById('decrement').value);
    for (let i = 0; i < decrement; ++i) {
      value--;
    }
		document.getElementById('attack').value = value;
		}
	  function incrementDefence() {
		var value = parseInt(document.getElementById('waiting').value, 10);
		value = isNaN(value) ? 0 : value, increment = parseInt(document.getElementById('increment').value);
    for (let i = 0; i < increment; ++i) {
      value++;
    }
		document.getElementById('waiting').value = value;
		}
	   function decrementDefence() {
		var value = parseInt(document.getElementById('waiting').value, 10);
		value = isNaN(value) ? 0 : value, decrement = parseInt(document.getElementById('decrement').value);
    for (let i = 0; i < decrement; ++i) {
      value--;
    }
		document.getElementById('waiting').value = value;
		}
    const connect8 = function (){
      //let Socket = require('isomorphic-ws');
      
      let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
      let recodef;
      let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let go = function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect8();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc8 = document.getElementById("rc8").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc8 + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack8").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting8").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect8();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect8();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect8();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          if (
           snippets[0] === "JOIN" && snippets[3] === id
          ) {
            let number = event.data.toString().split("-1").join("");
            let number3 = number.split("10101").join("");
            let number1 = number3.split(" ").filter(Number);
            let text = parseInt(number1[number1.length -1]);
            pos = text + MOVE;
            posi = text + MOVE1;
            pos1 = text + u;
            posi1 = text + v;
            document.getElementById("standing").innerHTML = text;
          }
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
      const connect7 = function (){
        //let Socket = require('isomorphic-ws');
        
        let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
        let recodef;
      let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let go = function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect7();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc7 = document.getElementById("rc7").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc7 + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack7").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting7").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect7();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect7();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect7();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          //let Socket = require('isomorphic-ws');
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
      const connect6 = function (){
        //let Socket = require('isomorphic-ws');
        
        let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
        let recodef;
      let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let go = function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect6();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc6 = document.getElementById("rc6").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc6 + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack6").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting6").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect6();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect6();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect6();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          //let Socket = require('isomorphic-ws');
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
      const connect5 = function (){
        //let Socket = require('isomorphic-ws');
        
        let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
        let recodef;
      let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let go = function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect5();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc5 = document.getElementById("rc5").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc5 + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack5").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting5").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect5();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect5();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect5();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          //let Socket = require('isomorphic-ws');
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
      const connect4 = function (){
        //let Socket = require('isomorphic-ws');
        
        let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
      let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let go = function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect4();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc4 = document.getElementById("rc4").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc4 + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack4").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting4").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect4();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect4();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect4();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          //let Socket = require('isomorphic-ws');
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
    const connect3 = function (){
      //let Socket = require('isomorphic-ws');
      
      let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
      let recodef;
      let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let go = function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect3();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc3 = document.getElementById("rc3").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc3 + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack3").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting3").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect3();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect3();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect3();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          //let Socket = require('isomorphic-ws');
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
    const connect2 = function (){
      //let Socket = require('isomorphic-ws');
      
      let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
      let recodef;
      let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let go = function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect2();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc = document.getElementById("rc").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack2").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting2").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect2();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect2();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect2();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          //let Socket = require('isomorphic-ws');
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
      const connect = function (){
        //let Socket = require('isomorphic-ws');
        let go = async function (){
        if (ws.readyState === WebSocket.OPEN) {
          let planet = document.getElementById("plntgo");
          setTimeout(() => {
            ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
          }, 1000);
            } else {}
      }
        let salir = async function () {
        try {
          if (ws.readyState === WebSocket.OPEN) {
            let res = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } else {
        }
        } catch (err) {
          console.log(err);
        }
      };
        let recodef;
        let off;
        let test = [], testt = [];
        let id;
        let defender;
        let useridg;
        let passwordg;
        let ws;
        let N = 1;
        let Reconexion = async() =>{
      recodef=setTimeout(() => {
        connect();
      }, parseInt(document.getElementById("reconnect").value));
    }
    let verificador = function (data, ai) {
      for (let x = 0; x < data.length; ++x) {
        if(ai === data[x].id){
            return true;
            break;
        }
      }
      return false;
    }
        rc2 = document.getElementById("rc2").value;
        if(sleep.checked === true){
          ws = new Socket("wss://cs.mobstudio.ru:6672");
        }else {
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        }
        let parseHaaapsi = (e) => {
          let temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(5, 10));};
        ws.onopen = () => { 
          ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = async(event) => {
          let text = event.data;
          let snippets = text.split(" ");
          if (snippets[0] === "HAAAPSI") {
            haaapsi = snippets[1];
            ws.send("RECOVER " + rc2 + "\r\n");
          }
          if (snippets[0] === "REGISTER") {
            let temp = parseHaaapsi(haaapsi);
            id = snippets[1];
            let password = snippets[2];
            let username = snippets[3];
            useridg = id;
            passwordg = password;
            let finalusername = username.split("\r\n");
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
          if (snippets[0] === "999") {
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            ws.send("JOIN\r\n");
            off = 1;
          }
          if (snippets[0] === "900") {
            document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
            document.getElementById("sec").scrollTop += 100;
          }
			if (green.checked) {
            if (snippets[0] === "353") {
              let dump = event.data.split("353").join("");
              let dump3 = dump.split("-3").join("");
              let dump4 = dump3.split("-2").join("");
              let members = dump4.split("@").join("");
              let members2 = members.split(":").join("");
              let members1 = members2.split("+").join("");
              let find = members1.toLowerCase().split(" ");
              membersarr1 = members2.split(" ");
              let timing = parseInt(document.getElementById("attack").value);
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < find.length; i++) {
                let clan = find[i - 2];
                let nick = find[i - 1];
                let id = find[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan)) {
                  document.getElementById("sec").innerHTML += "Atk Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  test.push(o);
                }
              }
               if(test.length !== 0) {
                    //ws.send("test - " + membersarr[memberindex]);
                    if(Ran.checked == true){
                       userid = test[Math.floor(Math.random() * test.length)].id;
                      }
                    else if(reverse.checked === true){
                      userid = test[userids.length - 1].id;
                    }else{
                      userid = test[0].id;
                    };
                    defender = setTimeout(() => {
                      if (test.length > 0 && test[0] && test[0].id) {
                        // Acceder a la propiedad 'id'
                        aprisionar(userid, test.length !== 0);
                      } else {};
                    }, timing);
                    if (timeshift.checked == true)vai = setTimeout(() => {
                      automatic(incrementAttack, decrementAttack);
                    }, timing+500);
                  };
                }
			if (green.checked) {
            if (snippets[0] === "JOIN" && snippets[3] != id) {
              let timing = parseInt(document.getElementById("waiting").value);
              snip = event.data;
              snipfinal = snip.toLowerCase().split(" ");
              snip1 = snip.split(" ");
              membersarr1.push(...snip1);
              let prueba;
              whitelist = document.getElementById("whitelist").value.split("\n");
              for (let i = 0; i < snipfinal.length; i++) {
                let clan = snipfinal[i - 2];
                let nick = snipfinal[i - 1];
                let id = snipfinal[i];
                // Verifica si el clan, el nick y el id tienen longitudes válidas y si el id es numérico
                if (clan && nick && id && id.length === 8 && /^\d+$/.test(id) && whitelist.includes(clan) && !verificador(testt, id)) {
                  document.getElementById("sec").innerHTML += "Def Found Enemy in "+timing+"ms"+"\r\n";
                  document.getElementById("sec").scrollTop += 1000;
                  prueba = id;
                  let o = {
                    clan: clan,
                    nick: nick,
                    id: id,
                  };
                  testt.push(o);
                }
              }
              if(testt.length !== 0) {
                userid2 = testt[0].id;
                defender = setTimeout(() => {
                  new aprisionar(prueba, verificador(testt, prueba));
                }, timing);
              if (timeshift.checked == true)vai = setTimeout(() => {
                automatic(incrementDefence, decrementDefence);
              }, timing+500);
                }
            }
          };
        }
          if (snippets[0] === "451") {
            document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
          }
          if (snippets[0] === "452" && snippets[2] === "is") {
            document.getElementById("sec").innerHTML =
              snippets[1] + " " + "is Blocked"+ "\r\n";
          }
          if (snippets[0] === "452") {
            connect();
          }
          if(snippets[0] === "FOUNDER"){
            let idKing = event.data.split("FOUNDER").join("");
            let id2king = idKing.split("\r\n").join("");
            let id3king = id2king.split(" ");
            king = id3king.filter(Number);
          }if(snippets[1] === "KICKP"){
              go();
            }
          if (snippets[0] === "403") {
            document.getElementById("sec").innerHTML +=
              "You are not on any planet..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              go();
          }
          if (snippets[0] === "471") {
            document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
            setTimeout(() => {
              ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            }, 1000);
            document.getElementById("sec").scrollTop += 1000;
          }
          if(snippets[0] === "854"){
            let view = event.data;
            let review = view.split(":").join("");
            let revieww = review.split("854").join("");
            let revieww3 = revieww.split("10349").join("");
            let revieww4 = revieww3.split("3").join("");
            let review1 = revieww4.split(" ");
            let rev = review1.filter(Number);
            review2 = rev.filter(function(element){
                 return element.length >= 0;
               });
          };
          if(accion.checked){
          if (snippets[0] === "ACTION" && snippets[1] == userid || snippets[0] === "ACTION" && snippets[1] == userid2){
            if(acciones == 1){
              document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
                ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
                acciones=2;
            }
          }
        };
          if(acciones>=2){
            setTimeout(() => {
              acciones=1;
            }, 3000);
          }
            if (snippets[0] === "850") {
            document.getElementById("sec4").innerHTML = event.data+ "\r\n";
            if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
              document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
              document.getElementById("sec").scrollTop += 1000;
              }
            
            }
          
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < testt.length; x++) {
              if(parseInt(snippets[1]) === parseInt(testt[x].id)){
                testt = testt.filter(item => item.id !== testt[x].id);
                if(testt.length !== 0){
                  userid2 = testt[0].id;
                }
                break;
              }
            }
          }
          if (snippets[0] === "PART" && snippets[1]||snippets[0] === "SLEEP" && snippets[1]){
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[1]) === parseInt(test[x].id)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
          }
          if(secs.checked == true){
              if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
                OfflineAndConnect();
              }
          }
          if(autoescape.checked) {
            if(snippets[0] === "900") {
              let pln = snippets[1];
              if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
                let escape = document.getElementById("escape");
                salir();Reconexion();
              }
            }
          }
          if(snippets[0] === "452" && snippets[1] === " :Você") {
            document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
              connect();
            
          }
          if(snippets[0] === "950" && snippets[1] === " :Você"){
            document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
            if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
        } else {
        }
              connect();
          };
          if(snippets[0]==="JOIN" && snippets[3] === id){
            nick=":"+snippets[2].toString();
          }
          if(snippets[1] === "KICK"){
            let text1 = snippets[2];
            for (let x = 0; x < test.length; x++) {
              if(parseInt(snippets[2]) === parseInt(test[x].id && userid === text1)){
                test = test.filter(item => item.id !== test[x].id);
                if(test.length !== 0){
                  if(Ran.checked == true){
                  userid = test[Math.floor(Math.random() * test.length)].id;
                }
                else if(reverse.checked == true){
                  userid = test[userids.length - 1].id;
                }else {
                  userid = test[0].id;
                }
                }
                break;
              }
              }
            if(copykick.checked == true){
              let copyText = document.getElementById("sec4");
              navigator.clipboard.writeText(copyText);
            };
          };
          //let Socket = require('isomorphic-ws');
          if (snippets[0] === "PING\r\n") {
            if (ws.readyState === WebSocket.OPEN) {
              ws.send("PONG\r\n");
            } else {}
          }
       };
       document.getElementById("escape").addEventListener("click", async () => {
        try {
          let res = axios.get(
            "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=jail_free&usercur="+useridg+"&by_escapes=1&random=0.6548361149689268",
            {
              headers: {
                "X-Galaxy-User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36",
                "X-Galaxy-Scr-Dpi": "1",
                "X-Galaxy-Lng": "pt",
                "X-Galaxy-Scr-W": "700",
                "X-Galaxy-Scr-H": "657",
                "X-Galaxy-Os-Ver": "1",
                "X-Galaxy-Platform": "web",
                "X-Galaxy-Client-Ver": "9.5",
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
      });
      document.getElementById("plntgo").addEventListener("click", () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
            } else {}
      });
      document
        .getElementById("btn-disconnect")
        .addEventListener("click", () => {
          if (ws.readyState === WebSocket.OPEN) {
          ws.send("QUIT :ds\r\n");
          clearTimeout(recodef);
          document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          document.getElementById("standing").innerHTML = "";
        } else {
        }
        });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      let aprisionar = function (id, users) {
        if(users){
          if (ws.readyState === WebSocket.OPEN && off === 1) {
            ws.send("ACTION 3 " +id+ "\r\n");
          if(secs.checked == false) OfflineAndConnect();
        } else {}
        }else{
          
        }
      }
      function OfflineAndConnect() {
        if (ws.readyState === WebSocket.OPEN && off === 1) {
          if(sleep.checked === true){
            ws.terminate();
        }else {
          ws.send("QUIT :ds\r\n")
        }
          off--;
          document.getElementById("sec").innerHTML = "";
        clearTimeout(defender);
        } else {
        }
        document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
        Reconexion();
      }
      let automatic = function (subir, bajar) {
          if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
            subir();
            document.getElementById('sec4').innerHTML="";
            if(incrementDefence==subir) clearTimeout(vai);
          }
          else {
            bajar();
            document.getElementById('sec4').innerHTML="";
            if(decrementDefence==bajar) clearTimeout(vai);
          }
      }
      };
      let userNick = function (nicks) {
            for (let x = 0; x < membersarr1.length; ++x) {
                if(parseInt(nicks) === parseInt(membersarr1[x])){
                let indexcheck = membersarr1.indexOf(membersarr1[x]);
                let user = membersarr1[indexcheck -1];
                document.getElementById("sec").innerHTML += "Prison to "+user+ "\r\n";
                document.getElementById("sec").scrollTop += 1000;
                break;
              }
            }
      }
