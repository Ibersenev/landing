const sections = $(".section");
const display = $(".maincontent");
let inScroll = false;  // флаг чтобы не давать производить событие, для тачпадов

const mobileDetect = new MobileDetect(window.navigator.userAgent); //подключенная библиотека 
const isMobile = mobileDetect.mobile();

const setActiveMenuItem = itemEq => {   //для сайд бара
  $('.asidebar__item').eq(itemEq).addClass('active')
    .siblings().removeClass('active')
} 

const performTransition = sectionEq => {
  const position = `${sectionEq * -100}%`;

  if (inScroll) return; //код ниже не выполняется

  inScroll = true;

  sections  //проверить соседей, добавить или убрать класс "актив"
    .eq(sectionEq)
    .addClass("active")
    .siblings()
    .removeClass("active");

  display.css({
    transform: `translate(0, ${position})`,
    "-webkit-transform": `translate(0, ${position})`
  });

  setTimeout(() => {
    inScroll = false;
    setActiveMenuItem(sectionEq);
  }, 1300); // продолжительность анимации + 300ms - потому что закончится инерция
};

const scrollToSection = direction => {              //определяет направление куда листать, вверх или низ
  const activeSection = sections.filter(".active"); //находит активную секцию
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "up" && prevSection.length) {  //length сщщбщает сколько элементов удалось найти// чтобы предотвратить скролл в несуществующую секцию
    performTransition(prevSection.index());
  }

  if (direction === "down" && nextSection.length) {
    performTransition(nextSection.index());         // index-передаем номер элемента в списке
  }
};

$(document).on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "down" : "up";

    scrollToSection(direction);
  },
  keydown: e => {  //сщбытие, чтобы работало по кнопкам клавиатуры
    switch (e.keyCode) {
      case 40:
        scrollToSection("down");
        break;

      case 38:
        scrollToSection("up");
        break;
    }
  },
  touchmove: e => e.preventDefault()

  // touchstart touchend touchmove 
});


$('[data-scroll]').on('click', e => {
  e.preventDefault();

  const target = parseInt($(e.currentTarget).attr('data-scroll'));


  performTransition(target);

})

if (isMobile) {    // условие для запуска кода свайпа
  $(document).swipe({
    swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      /**
       * плагин возвращает фактическое...
       * ...
       */
      const scrollDirection = direction === 'down' ? 'up' : 'down'; //переназначение
      
      scrollToSection(scrollDirection);
    }
  });
}
