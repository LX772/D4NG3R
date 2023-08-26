var id;
      var useridg;
      var d = new Date();
      var nhour;
      var passwordg;
      var pos;
      var checkear=true, checkear1=true;
      var posi;
      var ball;
	  var text;
      var pos1;
      var CONNECTED;
      var sID;
      var posi1;
      var pino=0, prison=0, chews=0, fuego=0, keys=0, gold=0,elec=0;
      var planeta;
      var attkbase;
      var IDBOT=";"
      var userid, uni;
      var fire="", detener;
      var git = true;
      var quieto =[400,420,425,440,450,460,470,480,490,500,510,520,530,540,550,560,570,580,590];
      var posiciones=[300,301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,317,318,319,320,321,322,323,324,325,326,327,328,329,330]
      var other=['Bowling*30','Bowling*29','Bowling*26','Bowling*27','Bowling*12','Bowling*2','Bowling*10','Bowling*9','Bowling*5','Bowling*28','Bowling*6','Bowling*3','Bowling*14','Bowling*11','Bowling*7','Bowling*8','Bowling*13','Bowling*1','Bowling*4','Bowling*15']
      var algoritmo=0;
      var mensaje;
      var idblock;
      var street, num =0, enviar=0;
      var moversequit=1;
      var seg = 0, mins = 0;
      var uno = 1;
      var ball2, nameBall;
      var verdadero="";
      var info;
      var verdadero1="";
      var contador=0, tester=1;;
      var nada=0;
      var myNick;
      var rc;
      var codigos;
      var navigator_info = window.navigator;
      var screen_info = window.screen;
      var uid = navigator_info.mimeTypes.length;
      uid += navigator_info.userAgent.replace(/\D+/g, '');uid += navigator_info.plugins.length;uid += screen_info.height || '';uid += screen_info.width || '';uid += screen_info.pixelDepth || '';
      var ws;
      var haaapsi;
      //var tap = array.includes(uid);
      var btn = document.getElementById("btn-connect");
      var btn2 = document.getElementById("testa");
      var exit = document.getElementById("btn-disconnect");
      var codigo = 1;
      //if(tap == true){
     // }else{
      //  alert(uid);self.close();
     // }
      btn.addEventListener("click", () => {
        rc = document.getElementById("rc").value;
        var detector ="bw/7704;-50;-2;33", detector2="bw/s_pin;-25;-2;3", detector3="1;bw/lg;0;50;33", detector4="1;bw/lr;0;50;33";
        ws = new WebSocket("wss://cs.mobstudio.ru:6672");
        const parseHaaapsi = (e) => {
          var temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
          return (temp = (temp = temp.split("").reverse().join("0")).substr(
            5,
            10
          ));
        };
        ws.onopen = () => { 
          ws.send(":es IDENT 350 -2 4030 1 2 :GALA\r\n");
        };
        ws.onmessage = (event) => {
          var text = event.data;
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
          if (snippets[0] === "999") {
            document.getElementById("sec").innerHTML = "";
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
            ws.send("JOIN\r\n");
            mensaje="Ya Estoy Conectado";
            
            CONNECTED == "CONNECTED";
          }
          if (snippets[0] === "PING\r\n") {
              ws.send("PONG\r\n");
            }
          if(snippets[0] === "SERV_JS_IN") DIAMONDS();
       if(snippets[0] === "BROWSER"){
              info="";
              let info2 = snippets[2];
              let info1="&userID="+useridg+"&password="+passwordg+"&usercur="+useridg+"&random";
              info = info2+info1;
              if(info.length>0){
                DIAMONDS();
              };
            }
       };
       
        ws.onclose = (event) => {
        if(event.wasClean === false || event.code !== 1000) {
          document.getElementById("sec2").innerHTML += ">>> Conexion Cerrada o Perdida with status code: " + event.code + event.reason + "\r\n";
        } else{
          document.getElementById("sec2").innerHTML += '>>> Conexion Cerrada o Perdida 000\r\n';
        }
       };
       
      });
      
      document.getElementById("plntgo").addEventListener("click", () => {
        ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
      });
      exit
        .addEventListener("click", () => {
          document.getElementById("sec").innerHTML = '>>> Disconnected\r\n';
          //mensaje = "Me Desconecte, ya cumpli con mi rutina, esto fue lo que gane, fuego:"+fuego+" llaves:"+keys+" Mastiques:"+chews+" gold:"+gold+" electrica:"+elec+" pinos:"+pino+" fugas:"+prison;
          CONNECTED="DISCONNECTED";
          ws.send("QUIT :ds\r\n");
          document.getElementById("sec1").innerHTML = "";
          document.getElementById("sec").innerHTML = "";
          document.getElementById("sec2").innerHTML += "Offline";
        
          
        });
          var input = document.getElementById("message");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("enter").click();
          ws.send("T " + 0 + " 1" + "\r\n");
          ws.send("PRIVMSG 0 " + 0 + " :"  + document.getElementById("message").value + "\r\n");
          ws.send("T " + 0 + " 0" + "\r\n");
        }
      });
      var input = document.getElementById("position");
      input.addEventListener("keydown", function (event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          document.getElementById("jump").click();
          ws.send(
            "REMOVE " + document.getElementById("position").value + "\r\n"
          );
        }
      });
      const DIAMONDS = async() => {
              const res = await axios.get(info,
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
                "X-Galaxy-Kbv": "296",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          )
          var res2=res.data;
          var res3=res2.replaceAll("qwertyuiopasdfghjklzxcvbnm,-><^/%=?¿[]{}*+", "");
          var res4=res3.replace(/[*+?^${}()|[\]\\]/g, "");
          var res5=res4.split("style=\"background-image:url").join("");
          var res6=res5.split("\]").join("");
          var res7=res6.split("href=").join("");
          var res8=res7.split("#huya#a=show_user_good_img&goodID=").join("");
          var res9=res8.split("&sock=0&").join("");
          var res10= res9.split("https://galaxy.mobstudio.ru/services/public/img/quiz/").join("");
          var data = res10.split(" ");
          var data00 = data.reverse();
          var bu5;
          let yy,yb,yp,io;
          let se4rc = ["s__container_answers"];
          se4rc.forEach((element2) => {
              if (data00) {
                var indexcheck = data00.indexOf(element2);
                bu5= data00[indexcheck+3];
                yy = bu5.toString().split("></p></div></div><div").join("");
                yb = yy.toString().split('.png;"').join("");
                yp = yb.toString().split('"').join("");
                io = yp.toString().split("'").join("");
              }
            });
          console.log(res2,"ImagenId: "+io);
        };
        btn2.addEventListener("click", () => {
          const ver = async() => {
              const res = await axios.get("https://galaxy.mobstudio.ru/services/?userID=73842860&password=9d922d16084418556f316bc2872fa11c&a=quiz_index&usercur=73842860&random=0.20126271192154",
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
                "X-Galaxy-Kbv": "296",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          )
          try {
          var res2 = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID=73842860&password=9d922d16084418556f316bc2872fa11c&a=quiz_choose_topic&usercur=73842860&random=0.039614047837783106",
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
                "X-Galaxy-Kbv": "296",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
          try {
          var res3 = await axios.get(
            "https://galaxy.mobstudio.ru/services/?userID=73842860&password=9d922d16084418556f316bc2872fa11c&a=quiz_quick_game&topic_id=56&usercur=73842860&random=0.6507968563174509",
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
                "X-Galaxy-Kbv": "296",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
          try {
          var res4 = await axios.get(
            "https://galaxy.mobstudio.ru/services/?&userID=73842860&password=9d922d16084418556f316bc2872fa11c&query_rand=0.12659249970582542",
            {
                params: {a: "quiz_ajax_ready_to_play", topic_id: 56, ajax: 1},
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
                "X-Galaxy-Kbv": "296",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
              },
            }
          );
        } catch (err) {
          console.log(err);
        }
        } catch (err) {
          console.log(err);
        }
        } catch (err) {
          console.log(err);
        }
            };
        ver();
        })
    let ca = {
        imgID: "62837718232",
        carro: "batiBatman2",
        answer: 3332
    };
    let ca1 = {
        imgID: "4799366faff5fb302e88663d58ab88d3",
        carro: "batiBatman",
        answer: 333
    };
    var raro = [];
    document.getElementById("play").addEventListener("click", () => {
        raro.push(ca,ca1);
        for (let i = 0; i < raro.length; i++) {
            console.log(raro[i].imgID, raro[i].carro, raro[i].answer);
            
        }
    })
    let respuesta = function (informacion) {
        let registro = [];registro.push(o);
        for (let x = 0; x < registro.length; ++x) {
            if(informacion === registro[x].imgID){
                console.log(registro[x].answer)
                break;
            }
        }
    }
      function GetClock() {
        d = new Date();
        nhour = d.getHours();
        var nmin = d.getMinutes(),
          nsec = d.getSeconds();
        if (nmin <= 9) nmin = "0" + nmin;
        if (nsec <= 9) nsec = "0" + nsec;
        var clocktext = "" + nhour + ":" + nmin + ":" + nsec;
        document.getElementById("clockbox").innerHTML = clocktext;
        
      if(horass.checked)
      {
        if(nhour != document.getElementById("HORA").value){
          checkear == true;
        }
        if (document.getElementById("HORA").value == nhour){
        if (CONNECTED == "CONNECTED"){
          if (checkear == true){
            document.getElementById("sec2").innerHTML +=">>> Ya Esta Conectado "+"\n\r";
            checkear == false;
          }
        }
        else {
          if(checkear == true){
            pino=0, prison=0, chews=0, fuego=0, keys=0, gold=0,elec=0;
            btn.click();
            document.getElementById("sec").innerHTML += '>>> Connected\r\n';
            CONNECTED = "CONNECTED";
            checkear == false;
          }
        }
      }
    }
      if (disco.checked){
        if(nhour != document.getElementById("HORAA").value){
          checkear1 == true;
        }
        if (document.getElementById("HORAA").value == nhour){
        if (CONNECTED == "DISCONNECTED"){
          if(checkear1 == true)
          document.getElementById("sec").innerHTML = '>>> Disconnected\r\n';
          {document.getElementById("sec2").innerHTML +=">>> Ya Esta Desconectado "+"\n\r";
          checkear1=false;
        }
        }
        else {
          if (checkear1 == true){
            document.getElementById("sec").innerHTML += '>>> Disconnected\r\n';
            CONNECTED ="DISCONNECTED";
            exit.click();
            checkear1=false;
          }
        }
      }
    }
      }
      GetClock();
      setInterval(GetClock, 1000);