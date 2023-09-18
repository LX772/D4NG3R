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
        var id;
        var btn = document.getElementById("btn-connect");
        var useridg;
        var passwordg;
        var pos;
        var posi;
        var text;
        var b1 = document.getElementById("b1");
        var b2 = document.getElementById("b2");
        var b3 = document.getElementById("b3");
        var timeshift = document.getElementById("timeshifter");
        const u = -40;
        const v = 40;
        var pos1;
        var posi1;
        var attkbase;
        var newmsg, newmsg1=0;
        var remo1, remo;
        var lista = [], lista2=[],saber;
        var membersarr = [], snipfinal = [];
        var membersarr1=[], send, userID=[],send1, userID2=[];
        var useridarray=[],useridarray2=[];
        var defbase, seg=0;
        var no=true,i=0;
        var recodef;
        var user;
        var notkick = 3, detener;
        var z2, review2, sett;
        var planeta;
        var other=[];
        var tai=["Taiga*1", "Taiga*2"];
        var jungla=["Jungle*1","Jungle*2","Jungle*3","Jungle*4"];
        var america = ["America*1","America*4","America*2","America*3"]
        var savana=["Savannah*2","Savannah*8","Savannah*7","Savannah*6","Savannah*1","Savannah*5"]
        var nick;
        var atacar, defender;
        var Shoot=1;
        var info;
        var peligro;
        var loglimit = 0;
        var N = 1, N1 = 1, ss,sss,s;
        var variable, variable1;
        var nombre, nombre2;
        var ff;
        var salida;
        let ux = parseInt(localStorage.getItem("on"))
        let ux1 = parseInt(localStorage.getItem("on1"))
        let ux2 =parseInt(localStorage.getItem("on2"));
        let ux3 =parseInt(localStorage.getItem("on3"));
        document.querySelector("#ame").checked=ux1;
        document.querySelector("#tai2").checked=ux2;
        document.querySelector("#expert").checked=ux3;
        let dev = localStorage.getItem("dev");
        document.querySelector("#devtype").value=dev;
        let time = localStorage.getItem("time");
        document.querySelector("#time").value=time;
        let r = localStorage.getItem("reco");
        document.querySelector("#reconnect").value=r;
        var acciones = 1;
        var unasola = true;
        var nhour;
        var nickfound;
        var b=[];
        var accionRes;
        var rc2,ss1;
        var pl, PlanetNext;
        var ver;
        var T= true, T2=true;
        var rc;
        let codi = localStorage.getItem("rc");
        let plnet = localStorage.getItem("plnet");
        document.getElementById("planet").value = plnet;
        document.getElementById("rc2").value = codi;
        let reco = localStorage.getItem("Reconexion");
        var mx =parseInt(localStorage.getItem("points"));
        var min =parseInt(localStorage.getItem("points2"));
        document.getElementById("punto5").innerHTML = "Max:"+mx;
        var codigos;
        var apagar=true, fallo;
        var ws;
        var bu=[];
        var haaapsi;
        var userid1;
        var codigo = 1;
      const Reconexion = async() =>{
        recodef=setTimeout(() => {
          btn.click();
        }, parseInt(document.getElementById("reconnect").value));
      }
      if(reco == 1){
        localStorage.setItem("Reconexion", 0);
        Reconexion();
      }
      btn.addEventListener("click", () => {
        if(localStorage.getItem("rc") != document.getElementById("rc2").value)localStorage.removeItem("MYADDONS"),localStorage.removeItem("FWLISTVER");
        localStorage.setItem("dev", document.querySelector("#devtype").value)
        localStorage.setItem("rc", document.getElementById("rc2").value)
        localStorage.setItem("plnet", document.getElementById("planet").value)
        localStorage.setItem("time", document.getElementById("time").value)
        localStorage.setItem("reco", document.getElementById("reconnect").value)
          var planet = document.getElementById("plntgo");
          Shoot=1;
          seg=0;
        info;
        loglimit = 0;
        N = 1, N1 = 1, ss,sss,s;
        variable, variable1;
        nombre, nombre2;
        ff;
        salida;
        acciones = 1;
        nickfound;
        b=[];
        accionRes;
        rc2,ss1;
        pl, PlanetNext;
       ver;
        T= true, T2=true;
        codigos;
        apagar=true, fallo;
          salida=true;
          ff=1;
          info="";remo1="";
          var Reconn = 1;
          var T2=true;
          if(sava.checked== true){
            other = savana;
          }if(ame.checked==true){
            localStorage.setItem("on1", 1);
            other=america;
          }else{
            localStorage.setItem("on1", 0);
          }
          if(ame.checked==true && sava.checked== true){
            america.push(...savana);
            other=america;
          }if(ame.checked==true && sava.checked== true && jp.checked==true){
            jungla.push(...jp, ...america, ...savana);
            other=jungla;
          }
          if(ame.checked==true && sava.checked== true && jp.checked==true && tai2.checked==true){
            tai.push(...tai, ...jp, ...america, ...savana);
            other=tai;
          }
          if(ame.checked==true && sava.checked== true && tai2.checked==true){
            tai.push(...tai, ...america, ...savana);
            other=tai;
          }if(sava.checked== true && tai2.checked==true){
            tai.push(...tai, ...savana);
            other=tai;
          }if(sava.checked== true && tai2.checked==true){
            tai.push(...tai, ...savana);
            other=tai;
          }
          if(ame.checked==true && tai2.checked==true){
            tai.push(...tai, ...america);
            other=tai;
          }if(jp.checked==true){
            other=jungla;
          }if(tai2.checked==true){
            localStorage.setItem("on2", 1);
            other=tai;
          }
          else{
            localStorage.setItem("on2", 0);
          }
          document.getElementById("sec").style.color="#00ffff";
          rc2 = document.getElementById("rc2").value;
          ws = new WebSocket("wss://cs.mobstudio.ru:6672");
          const parseHaaapsi = (e) => {
            var temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
            return (temp = (temp = temp.split("").reverse().join("0")).substr(
              5,
              10
            ));
          };
          ws.onopen = () => { 
            ws.send(":pt IDENT " + document.getElementById("devtype").value + " -2 4030 1 2 :GALA\r\n");
          };
          ws.onmessage = (event) => {
            var text = event.data;
            var snippets = text.split(" ");
  
            if (snippets[0] === "HAAAPSI") {
              haaapsi = snippets[1];
              ws.send("RECOVER " + rc2 + "\r\n");
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
            ws.send("FWLISTVER 281\r\n");
            ws.send("ADDONS 251251 3\r\n");
            ws.send("MYADDONS 251251 3\r\n");
            ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");ws.send("JOIN\r\n");
            document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
            document.getElementById("sec").scrollTop += 100;
            salida=true;
            balance();
            }
            if (snippets[0] === "900") {
              document.getElementById("sec").innerHTML += ">>> Planet: "+snippets[1]+ "\r\n";
              document.getElementById("sec").scrollTop += 100;
            }
  
              if (snippets[0] === "353") {
                let dump = event.data.split("353").join("");
                let dump2 = dump.split("_").join("");
                let dump3 = dump2.split("-").join("");
                let dump4 = dump3.split("-2").join("");
                let members = dump4.split("@").join("");
                let members2 = members.split(":").join("");
                let members1 = members2.split("+").join("");
                let finmembers = members1.toLowerCase();
                let ramdon3 = Math.floor(Math.random() * 3);
                membersarr = finmembers.split(" ");
                membersarr1 = members1.split(" ");
                whitelist = ["7900","7899","7898","7897","7896","7895","7894","7893","7891","7892","7891","7881","7882","7883","7884","7885","7886","7887","7888","7889","7890","7891","7892","7893","7894","7895","7896","7897","7898","7899","7767","7766","7768","7769","7770"];
                  whitelist.forEach((element2) => {
                    if (membersarr.includes(element2.toLowerCase())) {
                      let indexcheck = membersarr.indexOf(element2.toLowerCase());
                      userID.push(membersarr[indexcheck - 2]);
                    }
                  });
                }
              if (snippets[0] === "JOIN") {
                snip = event.data;
                snipmid = snip.split("_").join("");
                snipfinal = snipmid.toLowerCase().split(" ");
                snip1 = snipmid.split(" ");
                membersarr1.push(...snip1);
                var ramdon4 = Math.floor(Math.random() * 2);
                whitelist.forEach((element) => {
                if (snipfinal.includes(element.toLowerCase())) {
                  let indexcheck = snipfinal.indexOf(element.toLowerCase());
                  userID.push(snipfinal[indexcheck -3]);
                }
              });
              // var integers = useridarray2.filter(Number);
              //    userids2 = integers.filter(function(element){
              //      return element.length >= 7;
              //    });
                // if(userids2.filter(Number).length != 0) {
                //   userid2 = userids2[0]+"\r\n";
                //   var seri2=userids2[0];
                  
        }
              if(expert.checked == false){
              if(unasola == true){
                if(userID.filter(Number).length != 0){
                  unasola = false;
                  seg=0;
                  defender = setTimeout(() => {
                    new shoot(userID.filter(Number)[0], userID);
                    seg=0;
                  }, 2200);
                }
              }
            }
              if(snippets[0] === "ACTION" && snippets[1] === "-1"){
                if(expert.checked == true){
                  localStorage.setItem("on3", 1);
                seg=0;
                if(acciones == 1){
                  ws.send("ACTION 1996"+" " + snippets[2] + "\r\n");
                  acciones=2;
                }
              }
              }
            if (snippets[0] === "451") {
              document.getElementById("sec").innerHTML = "Incorrect Recovery Code"+ "\r\n";
            }
            if (snippets[0] === "452" && snippets[2] === "is") {
              document.getElementById("sec").innerHTML =
                snippets[1] + " " + "is Blocked"+ "\r\n";
            }
            if (snippets[0] === "452") {
              var click_event = new CustomEvent("click");
                          var btn_element = document.querySelector(
                            "#btn-connect"
                          );
                          btn_element.dispatchEvent(click_event);
            }
            if (snippets[0] === "403") {
              document.getElementById("sec").innerHTML +=
                "You are not on any planet..."+ "\r\n";
                
                document.getElementById("sec").scrollTop += 1000;
                var planet = document.getElementById("plntgo");
                setTimeout(() => {
                  planet.click();
                }, 500);
            }
            if(snippets[0] === "852"){
              data_clear();
              var view = event.data;
              var review = view.split(":").join("");
              var revieww = review.split("854").join("");
              var revieww3 = revieww.split("10349").join("");
              var revieww4 = revieww3.split("3").join("");
              var review1 = revieww4.split(" ");
              var rev = review1.filter(Number);
              review2 = rev.filter(function(element){
                   return element.length >= 0;
                 });
            };
              if (snippets[0] === "850") {
                let text;
              for (var i = 40; i < snippets.length; i++) {
                text += snippets[i] + " ";
              }
              loglimit++;
              document.getElementById("sec2").innerHTML = text;
              }
            if (loglimit >= 25){
                document.getElementById("sec").innerHTML = "";
                document.getElementById("sec2").innerHTML = "";
                loglimit = 0;
              }
              if (snippets[0] === "PRIVMSG") {
              let text;
              text = snippets[1];
              var text1 = new Array(snippets[1]);
              text1.toString();
              text1.forEach((element) => {
                if (membersarr1) {
                  var indexcheck = membersarr1.indexOf(element);
                  nombre = membersarr1[indexcheck -1];
                }
              });
              for (var i = 4; i < snippets.length; i++) {
                text += snippets[i] + " ";
              }
              loglimit++;
              document.getElementById("sec2").innerHTML += nombre +":"+ text;
              document.getElementById("sec2").scrollTop += 100;
              if (document.getElementById('sec2').innerHTML.indexOf("seu rifle está recarregando")!=-1){
                document.getElementById("sec").innerHTML += ">>> Rifle descargado Reconnect"+ "\r\n";
                document.getElementById("sec").scrollTop += 1000;
                document.getElementById('sec2').innerHTML = "";
                balance();
              }
              if (document.getElementById('sec2').innerHTML.indexOf("65899314:fly")!=-1){
                document.getElementById('sec2').innerHTML = "";
                var planet = document.getElementById("plntgo");
                  setTimeout(() => {
                    planet.click();
                  }, 100);
              }
             }
            // if (snippets[0] === "PART" && " " + userid2||snippets[0] === "SLEEP" && " " + userid2){
            //   text = snippets[1];
            //   var text1 = new Array(snippets[1]);
            //   text1.forEach((element) => {
            //     if (userids2.includes(element)) {
            //       var indexcheck = userids2.indexOf(element);
            //       userids2[indexcheck] = "";
            //       userid2 = userids2.filter(Number)[0]+"\r\n";
            //       if(userids2.filter(Number).length == 0){
            //         userid2 = id+"\r\n";
            //       }
            //       // if(listadef.filter(Number).length == 0){
            //           document.getElementById('sec').innerHTML += "Todos Salieron Mode: Waiting"+ "\r\n"
            //           clearTimeout(defender);
            //           document.getElementById("sec").scrollTop += 1000;
            //       // }
            //     }});
            // }
            if (snippets[0] === "PART" && snippets[1]){
            for (let x = 0; x < userID.length; ++x) {
              if(parseInt(snippets[1]) === parseInt(userID[x])){
                let indexcheck = userID.indexOf(userID[x]);
                userID[indexcheck] = "clear";
                break;
              }
              }
              for (let x = 0; x < membersarr1.length; ++x) {
                if(parseInt(snippets[1]) === parseInt(membersarr1[x])){
                let indexcheck = membersarr1.indexOf(membersarr1[x]);
                let m = membersarr1[indexcheck -1];
                membersarr1[indexcheck -1] = "-",membersarr1[indexcheck -2] = "",membersarr1[indexcheck] = "";
                document.getElementById('sec').innerHTML += ">>> "+m+" Se fue"+"\r\n";
                document.getElementById("sec").scrollTop += 1000;
                break;
              }
            }
          }
            if(snippets[0] === "452" && snippets[1] === " :Você") {
              document.getElementById("sec").innerHTML += "You can sign in to Galaxy in 10s"+ "\r\n";
                btn.click();
              
            }
            if(snippets[0] === "950" && snippets[1] === " :Você"){
              document.getElementById("sec").innerHTML += "Alguien entro desde otro dispositivo"+ "\r\n";
              ws.send("QUIT :ds\r\n");
                btn.click();
            };
            if(snippets[0]==="JOIN" && snippets[3] === id){
              nick=":"+snippets[2].toString();
            }
            if(snippets[0] === "ACTION" && snippets[1] == id){
              ver = false;
              document.getElementById('sec').innerHTML += ">>> Te hirieron, volviendo.."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              Shoot=2;
              no=false;
              var planet = document.getElementById("plntgo");
              setTimeout(() => {
                planet.click();
              }, 3000);
              ver = false;
              seg=0;
              document.getElementById("sec").innerHTML += ">>> No Estas En Safari...\r\n"
              setTimeout(() => {
                seg=0;
                ws.send("JOIN " +other[Math.floor(Math.random() * other.length)] + "\r\n");
              }, 601000);}
              if(snippets[0]===":Bot" && snippets[2] === id && snippets[10] === 'uma'){
              document.getElementById('sec').innerHTML += ">>> No Tienes Licencia..."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              setTimeout(() => {
                Comprar();
              }, 3000);
              }
            else if(snippets[0]===":Bot" && snippets[2] === id){
              ver=false;
              document.getElementById('sec').innerHTML += ">>> Te hirieron, volviendo.."+ "\r\n";
              document.getElementById("sec").scrollTop += 1000;
              no=false;
              Shoot=2;
              var planet = document.getElementById("plntgo");
              setTimeout(() => {
                planet.click();
              }, 3000);
                  ver = false;
              seg=0;
              document.getElementById("sec").innerHTML += ">>> No Estas En Safari...\r\n"
              setTimeout(() => {
                seg=0;
                ws.send("JOIN " +other[Math.floor(Math.random() * other.length)] + "\r\n");
              }, 601000);
            };
            if(min>mx){
              localStorage.setItem("points", min);
              document.getElementById("punto5").innerHTML = "Max:"+localStorage.getItem("points");
            }
            else if(mx == null){
              localStorage.setItem("points2", 1);
              mx =parseInt(localStorage.getItem("points"));
            }
            if(snippets[0] === "BROWSER"){
              if(uc.checked== true){
                ver = false;
              }
              info="";
              remo1="";
              let info2 = snippets[2];
              let info1="&userID="+useridg+"&password="+passwordg+"&usercur="+useridg+"&random";
              info = info2+info1;
              remo = info2.toString().split('http://galaxy.mobstudio.ru/services/index.php?').join("");
              let remo2= remo.toString().split('ach=0').join("");
              remo1 = remo2.toString().split('ach=').join("");
              if(info.length>0){
                DIAMONDS();
              };
              document.getElementById("sec").innerHTML += ">>> Abriendo Panel de Disparo!"+ "\r\n";
              if(info2.slice(108, 113) === "ach=0"){
                document.getElementById("sec").innerHTML += ">>> Animal Inofensivo!"+ "\r\n",
                peligro = false;
              }else{
                document.getElementById("sec").innerHTML += ">>> Animal Peligroso!"+ "\r\n",
                peligro = true;
              }
                document.getElementById("sec").scrollTop += 1000;
            }
            if(acciones==2){
              setTimeout(() => {
                acciones=1;
              }, 8000);
            }
            if (snippets[0] === "PING\r\n") {
              ws.send("PONG\r\n");
            }
            if (snippets[0] === '900'){
              planeta = snippets[1];
              if (planeta.slice(0, 8) === "Savannah"){ver = true;
                no=true;
                apagar=true;
            }
             else if (planeta.slice(0, 7) === "America"){ver = true;no=true;
              apagar=true;v
            }else if (planeta.slice(0, 6) === "Jungle"){ver = true;no=true;
              apagar=true;
            }else if (planeta.slice(0, 5) === "Taiga"){ver = true;no=true;
              apagar=true;
            }else {
              b=[];
              apagar=false;
              T2=true;
              T=true;
              i=0;
              ff=1;
              ver = false;
              seg=0;
              
              document.getElementById("sec").innerHTML += ">>> No Estas En Safari...\r\n"
              if(no == true){
                setTimeout(() => {
                seg=0;
                if(pl==true){
                  pl=false;
                  ws.send("JOIN " +PlanetNext+ "\r\n");
                }else{
                ws.send("JOIN " +other[Math.floor(Math.random() * other.length)] + "\r\n");
                }
              }, document.getElementById('reconnect').value);
            }}}
         };
         ws.onclose = (event) => {
          document.getElementById('sec').innerHTML += ">>> Conexion perdid, reconnect.."+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
          if(lost.checked==true){
          if(salida==true){
          ws.send("QUIT :ds\r\n");
          ws.close();
          setTimeout(() => {
            localStorage.setItem("Reconexion", 1);
            location.reload(true);
          }, 5000);
        }
         }else{
          if(salida==true){
          ws.send("QUIT :ds\r\n");
          ws.close();
          setTimeout(() => {
            btn.click();
          }, 5000);
        }
         }
        }
        });
        setInterval(() => {
            seg++;
            if(ver == true){
              if(userID.filter(Number).length == 0 && ready == true){
                let otro = other[Math.floor(Math.random() * other.length)]
              if(planeta != otro){
                seg = 0;
              ws.send("JOIN " + otro + "\r\n");
            }}
          }else{
            seg=0;
          }
          }, 1000);
        i=0;
        document.getElementById("plntgo").addEventListener("click", () => {
          ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
        });
      let data_clear = function (){
        ready = null;
        peligro = null;
        userID = [];
        userID2 = [];
        membersarr1 = [];
        useridarray= [];
        useridarray2 = [];
        setTimeout(() => {
          ready = true;
        }, document.getElementById("time").value);
      };
      let Reload = function (){
        setTimeout(() => {
          unasola = true;
          document.getElementById("sec").innerHTML += ">>> Pistola Cargada"+"\r\n";
          document.getElementById("sec").scrollTop += 1000;
        }, 8000);
      }
      let shoot = function (id, users) {
        if(users.filter(Number).length != 0){
          clearTimeout(defender);
          document.getElementById("sec").innerHTML += ">>> Dispare al Animal"+"\r\n";
          document.getElementById("sec").scrollTop += 1000;
          ws.send("ACTION 1996 " +id+ "\r\n");
          Reload();
        }else{
          unasola = true;
        }
      }
        document
          .getElementById("btn-disconnect")
          .addEventListener("click", () => {
            localStorage.setItem("Reconexion", 0);
            salida=false;
            ws.send("QUIT :ds\r\n");
            clearTimeout(recodef);
            document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
            document.getElementById("sec").scrollTop += 1000;
            document.getElementById("standing").innerHTML = "";
          });
          const Comprar = async() => {
                const res = await axios.get("https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&a=safari_item_buy&buy=3DaysLicense&usercur="+useridg+"&random=0.2209870505108782&ajax=1",
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
            )
            document.getElementById("sec").innerHTML += ">>> Compre Licencia por 3 días."+ "\r\n";
            document.getElementById("sec").scrollTop += 1000;
          }
          function getClientDeviceModel() {
            var tem, ua = navigator.userAgent.toLowerCase(), N = navigator.appName, M = ua.match(/(opr)\/?\s*([\d\.]+)/i) || [];
            return M && M.length || (M = ua.match(/(edge|opr|opera|chrome|safari|firefox|msie|trident)\/?\s*([\d\.]+)/i) || []),
            (M = M[2] ? [M[1], M[2]] : [N, navigator.appVersion, "-?"]) && null != (tem = ua.match(/version\/([\.\d]+)/i)) && (M[2] = tem[1]),
            M.join(" ")
          }
          const balance = async() => {
                const res = await axios.get("https://galaxy.mobstudio.ru/services/?a=pay_get_balance&userID="+useridg+"&password="+passwordg+"&usercur="+useridg+"&random=0.2209870505108782&ajax=1",
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
            )
            let res2=res.data;
            let data = res2.toString().split(" ");
            let idgit=data[0];
            let s=idgit.split('"').join("");
            document.getElementById("punto").innerHTML ="Balance Actual "+s+'\r\n';
          }
          const Valid = async() => {
            if(uc.checked == true){
              localStorage.setItem("on4", 1);
              setTimeout(() => {
                  document.getElementById("sec").innerHTML += ">>> Volviendo"+"\r\n";
                  var planet = document.getElementById("plntgo");
                  planet.click();
              }, 800);
            }else{
              localStorage.setItem("on4", 0);
              if(peligro == true){
                setTimeout(() => {
                  document.getElementById("sec").innerHTML += ">>> Volviendo"+"\r\n";
                  var planet = document.getElementById("plntgo");
                  planet.click();
              }, 800);
              }
            }
            let resy=saber;
            var tu,tu2;
            let resf=resy.replaceAll("qwertyuiopasdfghjklzxcvbnm,.-><^/%=?¿[]{}*+", "");
            let rest=resf.replace(/[.*+?^${}()|[\]\\]/g, "");
            let resa=rest.split("</div></span></div><div").join("");
            let resw=resa.split("\]").join("");
            let resm=resw.split("href=").join("");
            let reso=resm.split("#huya#a=show_user_good_img&goodID=").join("");
            let resn=reso.split("&sock=0&").join("");
            let data2 = resn.split(" ");
            let se4rc2 = ["s__fwb\">Tiro"]
            se4rc2.forEach((element) => {
                if (data2) {
                  var indexcheck = data2.indexOf(element);
                  tu = data2[indexcheck +1];
                  tu2 = data2[indexcheck +57];
                  let idgit1=tu2;
                  let idgit2=tu;
                  ss=tu2;
                  sss=tu.split('"').join("");
                }
              });
            if(sss == "certeiro!"){
            document.getElementById("sec").innerHTML += ">>> Perfect Shoot!"+"\r\n";
            document.getElementById("sec").scrollTop += 1000;
            PlanetNext=planeta;
            document.getElementById("sec").innerHTML += ">>> Your Points:"+ ss+"\r\n";
            localStorage.setItem("points2", ss);
            balance();
            }
            else
              {
              document.getElementById("sec").innerHTML += ">>> Desaparecio!"+"\r\n";
              pl=true;
              PlanetNext=planeta;
              balance();
            document.getElementById("sec").scrollTop += 1000;
            }
          }
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
                "X-Galaxy-Kbv": "352",
                "X-Galaxy-Orientation": "portrait",
                "X-Galaxy-Model": "chrome 99.0.4844.74",
                },
              }
            )
            var res2=res.data;
            var res3=res2.replaceAll("qwertyuiopasdfghjklzxcvbnm,.-><^/%=?¿[]{}*+", "");
            var res4=res3.replace(/[.*+?^${}()|[\]\\]/g, "");
            var res5=res4.split(".").join("");
            var res6=res5.split("\]").join("");
            var res7=res6.split("href=").join("");
            var res8=res7.split("#huya#a=show_user_good_img&goodID=").join("");
            var res9=res8.split("&sock=0&").join("");
            var data = res9.split(" ");
            var data00 = data.reverse();
            var bu;
            let se4rc = ["transform:"];
            se4rc.forEach((element2) => {
              if (data00) {
                var indexcheck = data00.indexOf(element2);
                bu5= data00[indexcheck-1];
              }
            });
            var idgit=bu5;
            s=idgit.split('"').join("");
            if(s == "rotate45deg"){
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=7&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else if(s == "rotate135deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=1&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else  if(s == "rotate90deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=4&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else if(s == "rotate0deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=8&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else if(s == "rotate315deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=9&usercur=72514374&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else if(s == "rotate225deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=3&usercur=72514374&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else if(s == "rotate135deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=1&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else if(s == "rotate180deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=2&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            else if(s == "rotate270deg"){
              
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=6&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }else {
              document.getElementById("sec").innerHTML += s+">>> Error Shoot"+"\r\n";
            document.getElementById("sec").scrollTop += 1000;
              try {
            var res2 = axios.get(
              "https://galaxy.mobstudio.ru/services/?userID="+useridg+"&password="+passwordg+"&"+remo1+"shot=7&usercur="+useridg+"&random",
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
            )
            .then((resp) => {saber=resp.data;Valid();
              seg=0;
              
             })
          } catch (err) {
            console.log(err);
          }
            }
            };
        function GetClock() {
          var d = new Date();
          nhour = d.getHours(),
            nmin = d.getMinutes(),
            nsec = d.getSeconds();
          if (nmin <= 9) nmin = "0" + nmin;
          if (nsec <= 9) nsec = "0" + nsec;
  
          var clocktext = "" + nhour + ":" + nmin + ":" + nsec + "";
          document.getElementById("clockbox").innerHTML = clocktext;
        }
  
        GetClock();
        setInterval(GetClock, 1000);
