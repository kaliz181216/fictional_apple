'use strict';

{
    $(function () {
        //slider
        $('.slider').slick({
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            dotsClass: 'maindots',
            arrows: false,
            fade: true,
        });
    });
}