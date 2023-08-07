var id;
var useridg;
var passwordg;
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
  var userids, userids2, userid2,listadef=[];
var membersarr = [], snipfinal = [];
var membersarr1=[], userid;
var useridarray=[],useridarray2=[];
var defbase;
var recodef;
var user;
var notkick = 3, detener;
var z2, review2
var nick, king;
var atacar, defender;
var loglimit = 0;
var variable, variable1;
var nombre, nombre2;
var acciones = 1;
var unasola = 1;
var nickfound;
var accionRes;
var rc2;
var codigos;
var ws;
var haaapsi;
var btn = document.getElementById("btn-connect");
var codigo = 1;
function incrementAttack() {
var value = parseInt(document.getElementById('attack').value, 10);
value = isNaN(value) ? 0 : value, increment = parseInt(document.getElementById('increment').value);
for (let i = 0; i < increment; i++) {
value++;
}
document.getElementById('attack').value = value;
}
function decrementAttack() {
var value = parseInt(document.getElementById('attack').value, 10);
value = isNaN(value) ? 0 : value, decrement = parseInt(document.getElementById('decrement').value);
for (let i = 0; i < decrement; i++) {
value--;
}
document.getElementById('attack').value = value;
}
function incrementDefence() {
var value = parseInt(document.getElementById('waiting').value, 10);
value = isNaN(value) ? 0 : value, increment = parseInt(document.getElementById('increment').value);
for (let i = 0; i < increment; i++) {
value++;
}
document.getElementById('waiting').value = value;
}
function decrementDefence() {
var value = parseInt(document.getElementById('waiting').value, 10);
value = isNaN(value) ? 0 : value, decrement = parseInt(document.getElementById('decrement').value);
for (let i = 0; i < decrement; i++) {
value--;
}
document.getElementById('waiting').value = value;
}
const Reconexion = async() =>{
recodef=setTimeout(() => {
  atacar = undefined; defender = undefined;
  btn.click();
}, parseInt(document.getElementById("reconnect").value));
}
btn.addEventListener("click", () => {
  var N = 1, N1 = 1;
  membersarr=[],userid=[],listadef=[],userids=[],userids2=[],userid2=[],useridarray=[],useridarray2=[];
  document.getElementById("sec").innerHTML = "";
  atacar = undefined; defender = undefined;
  var Reconn = 1;
  var T = true;
  document.getElementById("sec").style.color="#00ffff";
  document.getElementById("sec4").innerHTML="";
  attkbase = document.getElementById("attack").value;
  defbase = document.getElementById("waiting").value;
  limit = document.getElementById("limit").value;
  limit2 = document.getElementById("limit2").value;
  limit3 = document.getElementById("limit3").value;
  limit4 = document.getElementById("limit4").value;
  rc2 = document.getElementById("rc2").value;
  ws = new WebSocket("wss://cs.mobstudio.ru:6672");
  const parseHaaapsi = (e) => {
    var temp = CryptoJS.MD5(e).toString(CryptoJS.enc.Hex);
    return (temp = (temp = temp.split("").reverse().join("0")).substr(
      5,
      10
    ));
  };
  if (defbase <= limit){
    document.getElementById("waiting").value = limit;
  }
  if (attkbase <= limit2){
    document.getElementById("attack").value = limit2;
  }
  if (defbase >= limit3){
    document.getElementById("waiting").value = limit3;
  }
  if (attkbase >= limit4){
    document.getElementById("attack").value = limit4;
  }
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
      ws.send("PHONE 1366 768 0 2 :chrome 99.0.4844.74\r\n");
      document.getElementById("sec").innerHTML += "Conexion exitosa..."+"\r\n";
      document.getElementById("sec").scrollTop += 100;
      ws.send("JOIN\r\n");
    }
    if (snippets[0] === "900") {
      document.getElementById("sec").innerHTML += "Planet: "+snippets[1]+ "\r\n";
      document.getElementById("sec").scrollTop += 100;
    }
if (green.checked) {
      if (snippets[0] === "353") {
        var dump = event.data.split("353").join("");
        var dump3 = dump.split("-3").join("");
        var dump4 = dump3.split("-2").join("");
        var members = dump4.split("@").join("");
        var members2 = members.split(":").join("");
        var members1 = members2.split("+").join("");
        var finmembers = members1.toLowerCase();
        var ramdon3 = Math.floor(Math.random() * 3);
        membersarr = finmembers.split(" ");
        membersarr1 = members1.split(" ");
        var timing = parseInt(document.getElementById("attack").value);
        if(moves.checked == true)
        {if (N == 1){
          if (posi == NaN || posi == "NaN"){
              clearTimeout(variable)
            }
          if(ramdon3 == 1){
            variable = setTimeout(() => {
            ws.send("REMOVE " + posi + "\r\n");
          }, 840);}else if(ramdon3 == 2){
            variable = setTimeout(() => {
            ws.send("REMOVE " + posi + "\r\n");
          }, 940);
          }else if(ramdon3 == 3){
            variable = setTimeout(() => {
            ws.send("REMOVE " + posi + "\r\n");
          }, 720);}
          N--;}
        };
        black = document.getElementById("whitelist2").value.split("\n");
        black.forEach((element) => {
        if (membersarr.includes(element.toLowerCase())) {
          var indexcheck = membersarr.indexOf(element.toLowerCase());
          membersarr[indexcheck + 1] = "-";
          membersarr[indexcheck - 1] = "-";
        }
      });
        whitelist = document.getElementById("whitelist").value.split("\n");
        membersarr.forEach((element) => {
          whitelist.forEach((element2) => {
            if(element === element2){
              if (membersarr.includes(element2.toLowerCase())) {
          var indexcheck = membersarr.indexOf(element2.toLowerCase());
          membersarr[indexcheck]="";
          useridarray.push(membersarr[indexcheck + 2]);
        }
            }
          })
        
      });
      var integers = useridarray.filter(Number);
         userids.push(...integers.filter(function(element){
           return element.length >= 6;
         }));
         if(userids.filter(Number).length != 0) {
              //ws.send("test - " + membersarr[memberindex]);
              if(Ran.checked == true){
                 userid = userids.filter(Number)[Math.floor(Math.random() * userids.length)]+"\r\n";
                }
              else if(reverse.checked === true){
                userid = userids.filter(Number)[userids.length - 1]+"\r\n";
              }else{
                userid = userids.filter(Number)[0]+"\r\n";
              };
              document.getElementById("sec").innerHTML += "Found Enemy in "+timing+"ms"+"\r\n";
              document.getElementById("sec").scrollTop += 1000;
      if (secs.checked == true){
        setTimeout(() => {
          ws.send("ACTION "+notkick+" " + " " + userid + "\r\n");
          }, timing);
      }else{
        setTimeout(() => {
          aprisionar(userid, userids);
        }, timing);
      }
    if (timeshift.checked == true) {
      setTimeout(() => {
      if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
        incrementAttack();
      }
      else if(document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1){}
       else {
        decrementAttack();
        }
      },timing+500);
    }
  }
            
          ;
        }
      
if (green.checked) {
      if (snippets[0] === "JOIN" && snippets[3] != id) {
        snip = event.data;
        snipmid = snip.toLowerCase();
        snipfinal = snipmid.split(" ");
        snip1 = snipmid.split(" ");
        membersarr1.push(...snip1);
        var ramdon4 = Math.floor(Math.random() * 2);
        black.forEach((element) => {
        if (membersarr.includes(element.toLowerCase())) {
          var indexcheck = membersarr.indexOf(element.toLowerCase());
          membersarr[indexcheck + 1] = "-";
          membersarr[indexcheck - 1] = "-";
        }
      });
        whitelist.forEach((element) => {
        if (snipfinal.includes(element.toLowerCase())) {
          var indexcheck = snipfinal.indexOf(element.toLowerCase());
          useridarray2.push(snipfinal[indexcheck + 2]);
        }
      });
      var integers = useridarray2.filter(Number);
         userids2.push(...integers.filter(function(element){
           return element.length >= 6;
         }));
        if(userids2.filter(Number).length != 0) {
          userid2 = userids2.filter(Number)[0]+"\r\n";
          document.getElementById("sec").innerHTML += "Found Enemy in "+timing+"ms"+"\r\n";
      document.getElementById("sec").scrollTop += 1000;
      if (secs.checked == true){
          setTimeout(() => {ws.send("ACTION "+notkick+" " + " " + userid2 + "\r\n");
          }, timing);
      }else{
        setTimeout(() => {
          aprisionar(userid2, userids2);
        }, timing);
      }
    if (timeshift.checked == true) {
      setTimeout(() => {
        if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
          incrementDefence();
        }
        else if(document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1){}
        else {
          decrementDefence();
        }
      }, timing+500);
    }
  }
}
      };
      }
      if (low.checked) {
      if (snippets[0] === "353") {
        var dump = event.data.split("353").join("");
        var dump3 = dump.split("-3").join("");
        var dump4 = dump3.split("-2").join("");
        var members = dump4.split("@").join("");
        var members2 = members.split(":").join("");
        var members1 = members2.split("+").join("");
        var finmembers = members1.toLowerCase();
        var ramdon3 = Math.floor(Math.random() * 3);
        membersarr = finmembers.split(" ");
        membersarr1 = members1.split(" ");
        var timing = parseInt(document.getElementById("attack").value);
        if(moves.checked == true)
        {if (N == 1){
          if (posi == NaN || posi == "NaN"){
              clearTimeout(variable)
            }
          if(ramdon3 == 1){
            variable = setTimeout(() => {
            ws.send("REMOVE " + posi + "\r\n");
          }, 840);}else if(ramdon3 == 2){
            variable = setTimeout(() => {
            ws.send("REMOVE " + posi + "\r\n");
          }, 940);
          }else if(ramdon3 == 3){
            variable = setTimeout(() => {
            ws.send("REMOVE " + posi + "\r\n");
          }, 720);}
          N--;}
        };
        var rey = king+" "+id;
        var divi = rey.split(" ");
        divi.forEach((element) => {
        if (membersarr.includes(element)) {
          var indexcheck = membersarr.indexOf(element);
          membersarr[indexcheck] = "KING";
        }
      });
        black = document.getElementById("whitelist2").value.split("\n");
        var black2 = document.getElementById("whitelist3").value.split("\n");
        membersarr.forEach((element) => {
          black2.forEach((element2) => {
            if(element === element2){
              if (membersarr.includes(element2.toLowerCase())) {
          var indexcheck = membersarr.indexOf(element2.toLowerCase());
          membersarr[indexcheck]="";
          membersarr[indexcheck + 2] = "-";
        }
            }
          })
      });
        black.forEach((element) => {
        if (membersarr.includes(element.toLowerCase())) {
          var indexcheck = membersarr.indexOf(element.toLowerCase());
          membersarr[indexcheck + 1] = "-";
        }
      });

         var integers = membersarr.filter(Number);
         userids.push(...integers.filter(function(element){
           return element.length >= 6;
         }));
         if(userids.filter(Number).length != 0) {
              //ws.send("test - " + membersarr[memberindex]);
              if(Ran.checked == true){
                 userid = userids.filter(Number)[Math.floor(Math.random() * userids.length)];
                }
              else if(reverse.checked === true){
                userid = userids.filter(Number)[userids.length - 1];
              }else{
                userid = userids.filter(Number)[0];
              };
              document.getElementById("sec").innerHTML += "Found Enemy in "+timing+"ms"+"\r\n";
      document.getElementById("sec").scrollTop += 1000;
      if (secs.checked == true){
        setTimeout(() => {
          ws.send("ACTION "+notkick+" " + " " + userid + "\r\n");
          }, timing);
      }else{
        setTimeout(() => {
          aprisionar(userid, userids);
        }, timing);
      }
    if (timeshift.checked == true) {
      setTimeout(() => {
      if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
        incrementAttack();
      }
      else if(document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1){}
       else {
        decrementAttack();
        }
      },timing+500);
    }
  }
            
          ;
        }
      
if (low.checked) {
      if (snippets[0] === "JOIN" && snippets[3] != id) {
        snip = event.data;
        nou = snip.split("10101").join("");
        snipmid = nou.toLowerCase();
        snipfinal = snipmid.split(" ");
        snip1 = snipmid.split(" ");
        membersarr1.push(...snip1);
        var ramdon4 = Math.floor(Math.random() * 2);
        var rey = king+" "+id;
        var divi = rey.split(" ");
        var black2 = document.getElementById("whitelist3").value.split("\n");
        divi.forEach((element) => {
        if (snipfinal.includes(element)) {
          var indexcheck = snipfinal.indexOf(element);
          snipfinal[indexcheck] = "KING"
        }
      });
      black2.forEach((element) => {
        if (snipfinal.includes(element.toLowerCase())) {
          var indexcheck = snipfinal.indexOf(element.toLowerCase());
          snipfinal[indexcheck + 2] = "-";
        }
      });
        black.forEach((element) => {
        if (snipfinal.includes(element.toLowerCase())) {
          var indexcheck = snipfinal.indexOf(element.toLowerCase());
          snipfinal[indexcheck + 1] = "-"
        }
      });
      var integers = snipfinal.filter(Number);
         userids2.push(...integers.filter(function(element){
           return element.length >= 6;
         }));
        if(userids2.filter(Number).length != 0) {
          userid2 = userids2.filter(Number)[0];
      var timing = parseInt(document.getElementById("waiting").value);
      document.getElementById("sec").innerHTML += "Found Enemy in "+timing+"ms"+"\r\n";
      document.getElementById("sec").scrollTop += 1000;
        var timing = parseInt(document.getElementById("waiting").value);
      if (secs.checked == true){
          setTimeout(() => {
          ws.send("ACTION "+notkick+" " + " " + userid2 + "\r\n");
          }, timing);
      }else{
        setTimeout(() => {
          aprisionar(userid2, userids2);
        }, timing);
      }
    if (timeshift.checked == true) {
      setTimeout(() => {
        if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1){
          incrementDefence();
        }
        else if(document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1){}
        else {
          decrementDefence();
        }
      }, timing+500);
    }
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
      var click_event = new CustomEvent("click");
                  var btn_element = document.querySelector(
                    "#btn-connect"
                  );
                  btn_element.dispatchEvent(click_event);
    }
    if(snippets[0] === "FOUNDER"){
      var idKing = event.data.split("FOUNDER").join("");
      var id2king = idKing.split("\r\n").join("");
      var id3king = id2king.split(" ");
      king = id3king.filter(Number);
    }
    if (snippets[0] === "JOIN") {
      var text;
      text = snippets[2];
useridtext = snippets[3];
if(timing == undefined || timing == "undefined"){
  if(king == useridtext){
    var timing = "Rey Del Planeta"
    document.getElementById("sec").innerHTML +="Detect "+ text+":"+useridtext+" in "+timing+ "\r\n";
      document.getElementById("sec").scrollTop += 100;
  }
  
}
    }
    if (snippets[0] === "403") {
      document.getElementById("sec").innerHTML +=
        "You are not on any planet..."+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
    }
    if (snippets[0] === "471") {
      document.getElementById("sec").innerHTML += "Planet is Full"+ "\r\n";
      ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
      document.getElementById("sec").scrollTop += 1000;
    }
    if(snippets[0] === "854"){
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
    if(accion.checked){
    if (snippets[0] === "ACTION" && snippets[1] == userid){
      if(acciones == 1){
        document.getElementById("sec").innerHTML += "Respondiendo Action"+ "\r\n";
        document.getElementById("sec").scrollTop += 1000;
          ws.send("ACTION "+review2[Math.floor(Math.random() * review2.length)]+" "+snippets[2]+"\r\n")
          acciones=2;;
      }
    }
  };
    if(acciones>=2){
      setTimeout(() => {
        acciones=1;;
      }, 3000);
    }
      if (snippets[0] === "850") {
      document.getElementById("sec4").innerHTML = event.data+ "\r\n";
      if (document.getElementById("sec4").innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).")!==-1){
        document.getElementById("sec").innerHTML += "I can't kick before 3s...\r\n";
        document.getElementById("sec").scrollTop += 1000;
        }
      loglimit++;
      document.getElementById("sec4").scrollTop += 1000;
      }
    if (loglimit >= 25){
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
      document.getElementById("sec2").scrollTop += 1000;
      if (document.getElementById('sec2').innerHTML.indexOf("65899314:off")!=-1){
        document.getElementById('sec2').innerHTML = "";
        ws.send("QUIT :ds\r\n")
      }
      if (document.getElementById('sec2').innerHTML.indexOf("65899314:fly")!=-1){
        document.getElementById('sec2').innerHTML = "";
        var planet = document.getElementById("plntgo");
          setTimeout(() => {
            planet.click();
          }, 100);
      }
    }
    if (snippets[0] === "PART" && userids2.includes(snippets[1]) === true||snippets[0] === "SLEEP" && userids2.includes(snippets[1]) === true){
      text = snippets[1];
      var text1 = new Array(snippets[1]);
      text1.forEach((element) => {
        if (userids2.includes(element)) {
          var indexcheck = userids2.indexOf(element);
          userids2[indexcheck] = "";
          userid2 = userids2.filter(Number)[0]+"\r\n";
          if(userids2.filter(Number).length == 0){
            userid2 = id+"\r\n";
          }
          // if(listadef.filter(Number).length == 0){
            if(secs.checked == false){
              document.getElementById('sec').innerHTML += "Todos Salieron Mode: Waiting"+ "\r\n"
              document.getElementById("sec").scrollTop += 1000;
            };
          // }
        }});
    }
    if (snippets[0] === "PART" && userids.includes(snippets[1]) === true||snippets[0] === "SLEEP" && userids.includes(snippets[1] === true)){
      text = snippets[1];
      var text1 = new Array(text);
      text1.forEach((element) => {
        if (userids.includes(element)) {
          var indexcheck = userids.indexOf(element);
          userids[indexcheck] = "";
        };
         if(Ran.checked == true){
            userid = userids[Math.floor(Math.random() * userids.filter(Number).length)]+"\r\n";
          }
          else if(reverse.checked == true){
            userid = userids.filter(Number)[userids.length - 1]+"\r\n";
          }else{
            userid = userids.filter(Number)[0]+"\r\n";
          };
          
          if(userids.filter(Number).length === 0){
            userid = id;
            if(secs.checked == false){
              document.getElementById('sec').innerHTML += "Todos Salieron Mode: Attacking"+ "\r\n"
              document.getElementById("sec").scrollTop += 1000;
            };
          }
        });
        text1.toString();
      text1.forEach((element) => {
        if (membersarr1) {
          var indexcheck = membersarr1.indexOf(element.toLowerCase());
          nombre = membersarr1[indexcheck -1];
        }
      });
      document.getElementById('sec').innerHTML += "left Planet "+ nombre+":"+text+ "\r\n";
      document.getElementById("sec").scrollTop += 1000;
    }
    if(secs.checked == true){
        if (document.getElementById('sec4').innerHTML.indexOf("850 :Você somente pode colocar na prisão após 3 segundo(s) depois de aparecer no planeta. Também não se pode colocar na prisão mais de uma vez a cada 3 segundo(s). Se você violar uma destas regras, você não poderá colocar na prisão por 15 segundo(s).") !==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você somente") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :You can imprison only in 3s after you appear on Planet. You cant imprison more often than once in 3s. If you violate one of these rules, you wont be able to imprison users during 15s.") !==-1|| document.getElementById('sec4').innerHTML.indexOf("850 :Нельзя сажать ранее, чем спустя 3 секунд(ы) после вашего прилёта или прилёта пользователя на планету. Также нельзя сажать чаще, чем раз в 3 секунд(ы). За нарушение одного из этих правил вы не сможете сажать ещё 15 секунд.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Você poderá colocar na prisão dentro de 15 segundo(s).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :You will be able to imprison in 15s.")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Вы сможете сажать не ранее, чем через 15 секунд(ы).")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :A sua autoridade")!==-1||document.getElementById('sec').innerHTML.indexOf("850 :Ваш Авторитет позволяет")!==-1||document.getElementById('sec4').innerHTML.indexOf("850 :Your Authority")!==-1){
          if (unasola == 1){
            ws.send("QUIT :ds\r\n")
            unasola = 0;
            clearTimeout(detener)
          document.getElementById('sec').innerHTML += "OFFLINE"+ "\r\n";
          anterior="";
          document.getElementById("sec").scrollTop += 100;
          setTimeout(() => {
            var click_event = new CustomEvent("click");
            var btn_element = document.querySelector(
              "#btn-connect"
              );
              btn_element.dispatchEvent(click_event);
            }, parseInt(document.getElementById("reconnect").value));
        document.getElementById('sec4').innerHTML = "";
        unasola = 1;
        N = 1;
        N1 = 1;
      }}
    }
    if(autoescape.checked) {
      if(snippets[0] === "900") {
        var pln = snippets[1];
        if(pln.slice(0, 6) === "Prison" || pln.slice(0, 6) === "Prisão") {
          var escape = document.getElementById("escape");
          escape.click();
          var planet = document.getElementById("plntgo");
          setTimeout(() => {
            planet.click();
          }, 9500);
        }
      }if(snippets[1] === "PRISON" && snippets[2] === "0") {
        var escape = document.getElementById("escape");
        escape.click();
        var planet = document.getElementById("plntgo");
        setTimeout(() => {
          planet.click();
        }, 9500);
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
    if(snippets[0]===nick){
      var bai = event.data.toString();
      var text1 = new Array(snippets[2]);
      text1.toString();
      text1.forEach((element) => {
        if (membersarr1) {
          var indexcheck = membersarr1.indexOf(element);
          nombre = membersarr1[indexcheck -1];
        }
      });
      document.getElementById("sec").style.color="#FF0000";
      document.getElementById("sec").innerHTML += "kicks out "+nombre+" (Prison for "+snippets[9]+" "+snippets[10]+" "+snippets[11]+")"+"\r\n";
      document.getElementById("sec2").innerHTML += "kicks out "+nombre+" (Prison for "+snippets[9]+" "+snippets[10]+" "+snippets[11]+")"+"\r\n";
      document.getElementById("sec").scrollTop += 100;
      if(copykick.checked == true){
        var copyText = document.getElementById("sec4");
        navigator.clipboard.writeText(copyText);
      };
    };
    if (
     snippets[0] === "JOIN" && snippets[3] === id
    ) {
      let number = event.data.toString().split("-1").join("");
      let number1 = number.split(" ").filter(Number);
      var text = parseInt(number1[number1.length -1]);
          if (1 == 1){
            var MOVE = Math.floor(Math.random() * document.getElementById("frente").value);
          } else {
            variable1 = "";
          }
          if (1 == 1){
            var MOVE1 = Math.floor(Math.random() * -document.getElementById("atras").value);
          } else {
            variable = "";
          }
      pos = text + MOVE;
      posi = text + MOVE1;
      pos1 = text + u;
      posi1 = text + v;
      document.getElementById("standing").innerHTML = text;
    }
    if (snippets[0] === "PING\r\n") {
      ws.send("PONG\r\n");
    }
 };
});

document.getElementById("plntgo").addEventListener("click", () => {
  ws.send("JOIN " + document.getElementById("planet").value + "\r\n");
});

document
  .getElementById("btn-disconnect")
  .addEventListener("click", () => {
    ws.send("QUIT :ds\r\n");
    clearTimeout(recodef);
    document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
    document.getElementById("sec").scrollTop += 1000;
    document.getElementById("standing").innerHTML = "";
  });
document.getElementById("escape").addEventListener("click", async () => {
  try {
    var res = axios.get(
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
var input = document.getElementById("position");
input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    ws.send(
      "REMOVE " + document.getElementById("position").value + "\r\n"
    );
  }
});
var aprisionar = function (kick, users) {
  if(users.filter(Number).length != 0){
    userNick(kick);
    ws.send("ACTION 3 " +kick+ "\r\n");
    ws.send("QUIT :ds\r\n");
    document.getElementById("sec").innerHTML += "Offline"+ "\r\n";
    document.getElementById("sec").scrollTop += 1000;
    Reconexion();
  }else{
    document.getElementById("sec").innerHTML += "No Encontre Prison..."+ "\r\n";
    document.getElementById("sec").scrollTop += 1000;
  }
}
var userNick = function (nicks) {
  let text1 = [nicks];
      text1.forEach((element) => {
        if (membersarr1) {
          let indexcheck = membersarr1.indexOf(element);
          let user = membersarr1[indexcheck -1];
          document.getElementById("sec").innerHTML += "Prison to "+user+ "\r\n";
          document.getElementById("sec").scrollTop += 1000;
        }
      });
}
var input = document.getElementById("message");
input.addEventListener("keydown", function (event) {ws.
  send("T 0 1" + "\r\n");
  if (event.keyCode === 13) {
    event.preventDefault();
    var text1 = new Array(document.getElementById("nickname").value);
      text1.toString();
      text1.forEach((element) => {
        if (membersarr1) {
          var indexcheck = membersarr1.indexOf(element);
          nombre = membersarr1[indexcheck +1];
        }
      });
      nombre2 = document.getElementById("nickname").value;
        nickfound = nombre;
        if(nickfound == undefined || nickfound == "undefined"){
          nickfound = "",nombre=0;
        }else{
          if(nombre2.length > 1){
          nickfound = nombre2+", ";
          }else if(nombre2.length == 0){
            nickfound="";
          }
          else{
            nickfound = "";
          }
      }
    ws.send("T 0 1" + "\r\n");
            ws.send("PRIVMSG 0 " + nombre + " :" + nickfound+document.getElementById("message").value + "\r\n");
            document.getElementById('sec2').innerHTML += ("Yo: "+nombre2+","+document.getElementById("message").value+"\r\n");
            document.getElementById("message").value="";
            document.getElementById("sec2").scrollTop += 1000;
  }
});
document.getElementById("sendactnow").addEventListener("click", () => {
  ws.send("ACTION " + review2[Math.floor(Math.random() * review2.length)] + " " + nombre + "\r\n");
  document.getElementById('sec2').innerHTML += ("Action send to "+nombre2+ "\r\n");
  document.getElementById("sec4").scrollTop += 100;
});
document.getElementById("sendactnow1").addEventListener("click", () => {
  let vv;
  if(userid.length != 0){
    vv = userid;
  }else if(userids.length != 0){
    vv = userid2;
  }
  ws.send("ACTION " + review2[Math.floor(Math.random() * review2.length)] + " " + vv + "\r\n");
  document.getElementById('sec2').innerHTML += ("Action send to "+nombre+ "\r\n");
  loglimit++;
  document.getElementById("sec4").scrollTop += 100;
});

function GetClock() {
  var d = new Date();
  var nhour = d.getHours(),
    nmin = d.getMinutes(),
    nsec = d.getSeconds();
  if (nmin <= 9) nmin = "0" + nmin;
  if (nsec <= 9) nsec = "0" + nsec;

  var clocktext = "" + nhour + ":" + nmin + ":" + nsec + "";
  document.getElementById("clockbox").innerHTML = clocktext;
}

GetClock();
setInterval(GetClock, 1000);