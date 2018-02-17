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