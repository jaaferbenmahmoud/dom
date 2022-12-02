// var main=document.getElementById("main")

var btn=document.querySelector(".total");
btn.addEventListener("click",function () {
        if (btn.innerHTML == "click me") {
            return btn.innerHTML ="you clicked me";
            } else 
            return btn.innerHTML ="click me";
    }
)
var test=document.querySelector("body");
var span=document.querySelector('span')
var btns=document.querySelector(".btnred");



var btna=document.querySelector(".btnred");
btna.addEventListener("click",function (){
    test.style.background="red"
}



)




var btna=document.querySelector(".btnyellow");
btna.addEventListener("click",function (){
    test.style.background="yellow"
}



)
var btne=document.querySelector(".btngreen");
btne.addEventListener("click",function (){
    test.style.background="green"
}



)
var btnplus = document.querySelectorAll(".btnplus");
var qtes = document.querySelectorAll(".counter");
for (let i = 0; i < btnplus.length; i++) {
  btnplus[i].addEventListener("click", function () {
    qtes[i].innerHTML++;
    
  });
}
var btnminus = document.querySelectorAll(".btnminus");
var qtes = document.querySelectorAll(".counter");
for (let i = 0; i < btnminus.length; i++) {
  btnminus[i].addEventListener("click", function () {
    if (qtes[i].innerHTML > 0) {
      qtes[i].innerHTML--;
      
    }
  });
}