const header = $('#header'); // Находим элементы
const windowHeight = $(window).height(); // узнаем высоту области просмотра
const headerHeight = header.outerHeight(); // узнаем высоту шапки
// делает так чтобы шапка выезжала и заезжала при скроле
function onScroll(e) { // вешаем событие на скрол в окне

    let pos = $(window).scrollTop(); // определяем на сколько пользователь прошел вниз
    if (pos > headerHeight + 100) { // если пользователь прошел шаг высоту шапки плюс виндов хеингхт
        header.css({
            'position': 'fixed',
            'top': -(headerHeight + 50),
            'background-color': 'rgba(100,100,100, 0.1)'
        });
    }
    if (pos > windowHeight) { // если высота больше высоты окна браузера
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        });
    }

    if (pos < headerHeight + 100) { // если текущая позиция скрола меньше высоты шапки
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        });
    }
}

$(window).on('scroll', onScroll); // мы ищем все элементы на странице у которого есть атрибут data-scroll

// Scroll to element
const scrollBtn = $('[data-scroll]');

function onClick(e) {
    e.preventDefault(); // отменяет страндартные действия браузера чтобы оно не выполнялось
    const target = $(this).attr('data-scroll'); // 
    const dist = $(target).offset().top;
    $('html, body').animate({ scrollTop: dist }, 1000, 'swing');
}

scrollBtn.on('click', onClick); // отслеживаем событие клик на все элементы с атрибутом data-scroll
