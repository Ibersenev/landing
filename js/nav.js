const overlayExit = document.querySelector(".cross");
const telephoneMenu = document.querySelector(".nav-overlay");
const overlayAdd = document.querySelector(".navigation__burger-menu-box");


overlayExit.addEventListener("click", function(){
    telephoneMenu.style.zIndex = "0";
    telephoneMenu.style.opacity = "0";
    telephoneMenu.style.transition = ".5s all";
});

overlayAdd.addEventListener("click", function(){
    telephoneMenu.style.zIndex = "2";
    telephoneMenu.style.opacity = "0.99";
});

////////////////
