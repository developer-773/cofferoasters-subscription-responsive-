var modal=document.getElementById("myModal"),btn=document.getElementById("myBtn"),closee=document.getElementsByClassName("close")[0],hamburger=document.getElementsByClassName("site-header__menu-btn")[0];btn.onclick=function(){modal.style.display="block",hamburger.style.display="none",closee.style.display="block"},closee.onclick=function(){hamburger.style.display="block",modal.style.display="none",closee.style.display="none"};

var modalOrder = document.getElementById("myModall"),buttn=document.getElementById("order");

var check = document.getElementsByClassName("order__span")[0];
buttn.onclick=function(){modalOrder.style.display="block";}

window.onclick = function(event) {
    if (event.target == modalOrder) {
      modalOrder.style.display = "none";
    } else if (event.target == check) {
        modalOrder.style.display = "none";
    }

    
  }

setTimeout(function(){let a="Agar saytimizdan xato topsangiz, bizga yozing.";!0==confirm(a)?window.open("https://github.com/developer-773/cofferoasters-subscription-responsive-/issues","_blank"):a="You canceled!"},3e3);
function myFunction(a){if(a.matches){let b=document.querySelectorAll(".modal");for(let c of b)c.remove()}else for(let d of text)d.add()}var x=window.matchMedia("(min-width: 655px)");myFunction(x),x.addListener(myFunction)