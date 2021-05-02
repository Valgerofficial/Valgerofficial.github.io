$(document).ready(function() {

	//Открытие языковой панели
    $(".header__lang > a").click(function(e){
        $('.header__lang').toggleClass('open'),
        $('.header__lang_list').toggleClass('open');
    });

    //Табы
    $(function() {
    var tab = $('#main__info_tabs .tabs__items > .tabs__item'); 
    tab.hide().filter(':first').show(); 
    $('#main__info_tabs .tabs__nav a').click(function(){
        tab.hide(); 
        tab.filter(this.hash).show(); 
        $('#main__info_tabs .tabs__nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();
    });

    // Слайдер
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    //
    // Установите дату, до которой мы ведем обратный отсчет
    var countDownDate = new Date("July 15, 2021 04:00:00").getTime();
    // Обновляйте обратный отсчет каждые 1 секунду
    var x = setInterval(function() {
    // Получить сегодняшнюю дату и время
    var now = new Date().getTime();
    // Найдите расстояние между моментом сейчас и датой обратного отсчета
    var distance = countDownDate - now;
    // Расчеты времени для дней, часов, минут и секунд
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); 
    // Выведите результат в виде элемента с id="demo"
    document.getElementById("header__date").innerHTML = hours + ":"
        + minutes + ":" + seconds + "";
    // Если обратный отсчет закончился, напишите какой-нибудь текст
    if (distance < 0) {
    clearInterval(x);
        document.getElementById("header__date").innerHTML = "Старт";
        }
    }, 1000);
});
