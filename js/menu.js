$(document).ready(function () {
    
        var menuTrigger = function (e) {
            let $this = $(this);
            let containerM = $this.closest('.menu__list');
            let itemM = $this.closest('.menu__item');
            let itemsM = containerM.find('.menu__item');
            let activeItemM = itemsM.filter('.menu__item--active');
            let contentM = itemM.find('.menu__content');
            let activeContentM = activeItemM.find('.menu__content');
            e.preventDefault();
    
            if (itemM.hasClass('menu__item--active')) {
                itemM.removeClass('menu__item--active');
                contentM.slideUp('3000');
            } else {
                itemsM.removeClass('menu__item--active');
                itemM.addClass('menu__item--active');
                activeContentM.slideDown('2000');
                contentM.slideDown('2000');
            }
        };
    
        $('.menu__trigger').on('click', menuTrigger);
        $('.menu-acco__link').on('click', menuTrigger);
    
    });