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

});
