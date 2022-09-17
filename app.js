(function(){
    let form =document.getElementById('form');
    let ug =navigator.userAgent.toLowerCase();
    let user = ["name","email","BirthDay"];
    let type =["opra","chrome","firefox","mozilla"];
    for (var i = 0; i <user.length; i++) {
        if (localStorage.getItem(user[i])!==null) {
            form.style.display="none";
        }
    }
    for (var i = 0; i <type.length; i++) {
        if (ug.indexOf(type[i]) >-1) {
            localStorage.setItem("browser",ug);
        }else{
            localStorage.setItem("browser",undefined);
        }
    }
})();
var n =0;
var p = 0;
const birthday =document.getElementById('BirthDay');
const empty ="";
const layout = document.querySelector("layout");
const nav =document.querySelector("nav");

let user = ["name","email","BirthDay"];
let save = document.getElementById('save');

 save.onclick = function(){
    for (var i = 0; i <user.length; i++) {
        localStorage.setItem(user[i],document.getElementById(user[i]).value);
         if(document.getElementById(user[i]).value==empty){
             localStorage.removeItem(user[i]);
         }
    }
 }
  function inout(){
      n += 1;
      if(n == 1){
         nav.style.left ="0px";
         layout.style.filter ="brightness(40%)";
         return n =0;
     }else{
         nav.style.left ="-100%";
     }
  }
  layout.onclick = function(){
      if (nav.style.left == "0px" && n ==0) {
          setTimeout(function() {
              return n = 1;
          },500);
      }if(n == 1){
         nav.style.left="-90%";
         layout.style.filter="brightness(100%)";
         return n = 0;
      }
  }
  
  nav.ontouchmove = function(ev){
      var l = ev.touches[0].clientX;
      var r = ev.touches[0].clientY;
      let intX =parseInt(l);
      let intY =parseInt(r);
      p = intX;
      nav.style.left=-intY;
  }
  nav.ontouchend = function(){
     if(-p < -40){
         nav.style.left ="0px";
     }else {
         nav.style.left="-100%";
         layout.style.filter="brightness(100%)";
         return n = 0;
     }
  }