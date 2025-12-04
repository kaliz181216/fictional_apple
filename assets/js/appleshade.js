'use strict';
{
    $(function () {
        //fadeIn
        $(window).on('load scroll', function(){
            const fadeIn = $('.fadeIn');

            fadeIn.each(function(){
                const boxOffset=$(this).offset().top;
                const scrollPos=$(window).scrollTop();
                const wh=$(window).height();

                if(scrollPos + wh - 100 > boxOffset){
                    $(this).addClass('animated');
                }
            });

            const cutIn = $('.cutIn');

            cutIn.each(function(){
                const boxOffset=$(this).offset().top;
                const scrollPos=$(window).scrollTop();
                const wh=$(window).height();

                if(scrollPos + wh - 100 > boxOffset){
                    $(this).addClass('animated');
                }
            });

        })
    });
}