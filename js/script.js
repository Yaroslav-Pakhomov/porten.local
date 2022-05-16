$(document).ready(function() {
  // Весь код

  //Кнопка бургер-меню
  $('.mobile__menu').on('click', function(event) {
    event.preventDefault();
    $('.menu__btn').toggleClass('menu__active');
    $('.menu__list').toggleClass('menu__active');
    $('.mobile_menu').toggleClass('menu__active');
    $('body').toggleClass('fixed-page');
  });
  //Конец Кнопка бургер-меню

  /*Кнопка для подменю в бургере*/
  $('.nav ul li a.submenu-link').on('click', function(event) {
    event.preventDefault();
    $('.nav ul li ul.submenu.menu_active1').toggleClass('down');
    $('.nav ul li.submenu').toggleClass('active');
  });
  /*конец кнопки для подменю в бургере*/

});
