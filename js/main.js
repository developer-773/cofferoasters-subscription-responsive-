var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var elImg = document.querySelector(".modal__close-img");

var closee = document.getElementsByClassName("close")[0];

var hamburger = document.getElementsByClassName("site-header__menu-btn")[0];


btn.onclick = function() {
    modal.style.display = "block";
    hamburger.style.display = "none";
    closee.style.display = "block";
}


closee.onclick = function() {
    hamburger.style.display = "block";
    modal.style.display = "none";
    closee.style.display = "none";
}
