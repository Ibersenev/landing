// Welcome
const overlayExit = document.querySelector(".cross");
const telephoneMenu = document.querySelector(".nav-overlay");
const overlayAdd = document.querySelector(".navigation__burger-menu-box");


overlayExit.addEventListener("click", function(){
    telephoneMenu.style.zIndex = "0";
    telephoneMenu.style.opacity = "0";
    telephoneMenu.style.transition = "1s all";
})

overlayAdd.addEventListener("click", function(){
    telephoneMenu.style.zIndex = "2";
    telephoneMenu.style.opacity = "0.99";
});

//  Slider
const left = document.querySelector(".slider__arrow--left");
const right = document.querySelector(".slider__arrow--right");
const item = document.querySelector(".catalog")

const minRight = 0;
const maxRight = 400;
const step = 100;
let currentRight = 0;

item.style.right = 0 + "%";

right.addEventListener("click", function() {
    if (currentRight < maxRight) {
        currentRight += step;
        item.style.right = currentRight + "%";
    }
})

left.addEventListener("click", function() {
    if (currentRight > minRight) {
        currentRight -= step;
        item.style.right = currentRight + "%";
    }
})

//  Reviews
const overlayClose = document.querySelector(".cross__exit");
const telephoneBanner = document.querySelector(".rev-overlay");
const overlayButton = document.querySelector(".button__read");


overlayClose.addEventListener("click", function(){
    telephoneBanner.style.opacity = "0";
    telephoneBanner.style.transition = "1s all";
})

overlayButton.addEventListener("click", function(){
    telephoneBanner.style.opacity = "0.99";
});

// Menu

//////


const menuAcc = document.querySelectorAll(".menu__item");
const menuItem = document.querySelectorAll(".menu__trigger");
const menuClose = document.querySelectorAll(".menu-acco__link")

menuItem[0].addEventListener("click",function(i) {
menuAcc[0].classList.toggle("menu__item--active")
});
menuItem[1].addEventListener("click",function(i) {  
menuAcc[1].classList.toggle("menu__item--active")
});
menuItem[2].addEventListener("click",function(i) {
menuAcc[2].classList.toggle("menu__item--active")
});

