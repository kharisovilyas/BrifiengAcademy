
window.addEventListener('scroll', function () {
    var container = document.querySelector('.container');
    var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    //container.style.background = 'linear-gradient(135deg, #000 10%, #8FB4D1 100%) ' + scrollPercentage + '%';
});

// Инициализация ScrollReveal
const sr = ScrollReveal();
// Настройки анимации
sr.reveal('.section', {
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
});
sr.reveal('.container', {
    duration: 1000,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    reset: true
});
/*
// Обработчик события прокрутки колесика мыши
$(window).on('mousewheel', function (event) {
    // Определение направления прокрутки
    var delta = event.originalEvent.deltaY;
    var scrollDirection = delta > 0 ? 'down' : 'up';

    // Прокрутка страницы в зависимости от направления
    if (scrollDirection === 'down') {
        // Прокрутка вниз
        $('html, body').stop().animate({
            scrollTop: '+=' + $(window).height()
        }, 500);
    } else {
        // Прокрутка вверх
        $('html, body').stop().animate({
            scrollTop: '-=' + $(window).height()
        }, 500);
    }

    // Отмена стандартного поведения прокрутки страницы
    event.preventDefault();
});
*/


var menuItems = document.querySelectorAll('li');
menuItems.forEach(function (item) {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        var target = this.querySelector('a').getAttribute('href');
        var targetElement = document.querySelector(target);
        targetElement.scrollIntoView(
            {
                behavior: 'smooth'
            }
        );
    });
});

var btn_write_us = document.querySelector('nothing_btn');
btn_write_us.addEventListener('click', function (event1) {
    btn_write_us.preventDefault();
    var target1 = this.querySelector('a').getAttribute('href');
    var targetElement1 = document.querySelector(target1);
    targetElement1.scrollIntoView(
        {
            behavior: 'smooth'
        }
    );
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var header = document.querySelector('header');
    var mainDropdownMenu = document.querySelector('.main-dropdown-menu');
    var scrollPosition = window.pageYOffset;

    if (scrollPosition > 0) {
        //navbar.classList.add('scroll');
        header.classList.add('animation');
        header.classList.remove('animation_cancel');
    } else {
        //navbar.classList.remove('scroll');
        header.classList.remove('animation');
        header.classList.add('animation_cancel');
    }
});
const cards1 = document.querySelectorAll('.card');

function transition() {
    if (this.classList.contains('active')) {
        this.classList.remove('active')
    } else {
        this.classList.add('active');
    }
}

cards1.forEach(card => card.addEventListener('click', transition));
