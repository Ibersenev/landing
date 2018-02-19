
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
/*
var movieSlide = function(container, slideNum) {
    var
        items = container.find('.catalog__content'),
        activeSlide = items.filter('.active'),
        reqItem = items.eq(slideNum),
        reqIndex = reqItem.index(),
        list = container.find('.catalog'),
        duration = 500;

    if (reqItem.length) {
        
    }

}
*/
