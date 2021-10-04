var toggleOpen = document.querySelector(".toggle");
var mobileMenu = document.querySelector(".mobile__menu");

var open = document.querySelector(".open");


toggleOpen.addEventListener("click", function(){
    document.querySelector(".toggle");

    toggleOpen.classList.toggle("open__toggle");
    mobileMenu.classList.toggle("open");
})