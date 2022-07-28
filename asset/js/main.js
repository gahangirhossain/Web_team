$(document).ready(function($) {
   
    $('.counter').counterUp({
        delay: 10,
        time: 1000,
    });

    $(window).scroll(function(){
        var halcyan = $(window).scrollTop();
        if(halcyan>50){
            $('.header-area').addClass('ht-sticky');
        }
        else{
            $('.header-area').removeClass('ht-sticky');
        }
    });
    
    $('.slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dost:false,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        smartSpeed: 300,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    $('.csr-bg-images').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dost:false,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 5000,
        smartSpeed: 300,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $(".slider").on('translate.owl.carousel', function () {
            $('.slider-content h1').removeClass('fadeOut animated').hide();
        });
    $(".slider").on('translated.owl.carousel', function () {
        $('.owl-item.active .slider-content h1').addClass('fadeIn animated').show();
    });

    

});