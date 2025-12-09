'use strict';
{
    $(function () {
        //animation
        $(window).on('load scroll', function () {
            $('.fadeIn').each(scrollCallback(100));
            $('.cutIn').each(scrollCallback(100));
            $('.layer__decobox').each(scrollCallback(70));
        })
    });
}

function scrollCallback(igheight) {
    return function(){
        const boxOffset = $(this).offset().top;
        const scrollPos = $(window).scrollTop();
        const wh = $(window).height();

        if (scrollPos + wh - igheight > boxOffset) {
            $(this).addClass('animated');
        }
    }
}