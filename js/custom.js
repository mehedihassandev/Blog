(function () {

    var ld = document.querySelector(".load");
    var bdy = document.querySelector("body");

    window.addEventListener("load", function () {

        ld.classList.add("load_finish");
        bdy.style.overflowY = 'scroll';


    })



})();


$(function () {
    "use strict";

    //Menu Scroll
    $(window).on('scroll', function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 150) {
            $('#navbar').addClass('bg');
        } else {
            $('#navbar').removeClass('bg');
        }

        //back2top
        if (scrolling > 150) {
            $('.back2top').fadeIn(500);
        } else {
            $('.back2top').fadeOut(500);
        }
    });



    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 75
                }, 1500);
                return false;
            }
        }
    });




    //Back To Top  
    $('.back2top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

});
