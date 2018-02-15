const overlayExit = document.querySelector(".cross");
const telephoneMenu = document.querySelector(".nav-overlay");
const overlayAdd = document.querySelector(".navigation__burger-menu-box");


overlayExit.addEventListener("click", function(){
    telephoneMenu.style.zIndex = "0";
    telephoneMenu.style.opacity = "0";
    telephoneMenu.style.transition = "1s all";
});

overlayAdd.addEventListener("click", function(){
    telephoneMenu.style.zIndex = "2";
    telephoneMenu.style.opacity = "0.99";
});


//  Slider
const left = document.querySelector(".slider__arrow--left");
const right = document.querySelector(".slider__arrow--right");
const item = document.querySelector(".catalog");

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
});

left.addEventListener("click", function() {
    if (currentRight > minRight) {
        currentRight -= step;
        item.style.right = currentRight + "%";
    }
});

// secnion Team
    const acco = document.querySelector('.team__list');
    
    acco.addEventListener('click', function(event){
        if(event.target.classList.contains('team__trigger')){
            event.preventDefault();
            const checked = event.target;
            const item = checked.parentNode;
            //const list = item.parentNode;
            const items = acco.children;
            const content = checked.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;

            if(!item.classList.contains('team__item--active')){
                for(let i = 0; i < items.length; i++){
                    items[i].classList.remove('team__item--active');
                    items[i].lastElementChild.style.height = 0;
                }

                item.classList.add('team__item--active');
                content.style.height = contentHeight + 'px';
            } else {
                item.classList.remove('team__item--active');
                content.style.height = 0;
            }
        }
    });
// Menu
    const accoMenu = document.querySelector('.menu__list');
    
    accoMenu.addEventListener('click', function(event){
        if(event.target.classList.contains('menu__trigger')){
            event.preventDefault();
            const checked = event.target;
            const item = checked.parentNode;
            const list = item.parentNode;
            const items = accoMenu.children;
            const content = checked.nextElementSibling;
            
            if(!item.classList.contains('menu__item--active')){
                for(let i = 0; i < items.length; i++){
                    items[i].classList.remove('menu__item--active');  
                }
                item.classList.add('menu__item--active');               
            } else {
                item.classList.remove('menu__item--active');                
            }
        }
        
    });
