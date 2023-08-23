
$(function () {

    const top_banner = document.querySelector('.top_banner');
    const top_banner_btn = document.querySelector('.top_banner .close');

    top_banner_btn.addEventListener('click', () => {
        top_banner.classList.add('on');
    });



    const banner_slide = new Swiper('.banner_slide', {
        loop: true,
        parallax: true,
        speed: 600,
        dots: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

    });

    $('.banner_slide .arrows .left').on('click', function () {
        banner_slide.slidePrev();
    });

    $('.banner_slide .arrows .right').on('click', function () {
        banner_slide.slideNext();
    });


    $('.intro_con .pause').on('click', function () {
        $('.intro_con video').trigger('pause');

        $(this).addClass('on')
            .siblings().removeClass('on');
    });


    $('.intro_con .play').on('click', function () {
        $('.intro_con video').trigger('play');
    });


    const news_slide = new Swiper('.news_slide', {
        loop: true,
        parallax: true,
        speed: 600,
        dots: true,

        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

    });

    $('.news_slide .arrows .left').on('click', function () {
        news_slide.slidePrev();
    });

    $('.news_slide .arrows .right').on('click', function () {
        news_slide.slideNext();
    });



    $('.l_link li').on('click', function (event) {
        event.preventDefault();
        let idx = ($(this).index())

        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.link_box .box').eq(idx).addClass('on')
            .siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index())

    });

    $('.r_link li').on('click', function (event) {
        event.preventDefault();
        let idx = ($(this).index())

        $(this).addClass('on')
            .siblings().removeClass('on');

        $('.r_link_box .box').eq(idx).addClass('on')
            .siblings().removeClass('on');

        console.log(event, event.target, event.currentTarget, $(this), $(this).index())

    });



    const cam_slide01 = new Swiper(".cam_slide01", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const cam_slide02 = new Swiper(".cam_slide02", {
        loop: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        thumbs: {
            swiper: cam_slide01,
        },
    });



    const ch_slide = new Swiper('.ch_slide', {
        autoplay: {
            delay: 0, //add
            disableOnInteraction: false,
        },
        speed: 5000,
        loop: true,
        loopAdditionalSlides: 1,
        slidesPerView: 8,

    });



    $('.agree .title').on('click', function () {
        $('.agree .content').fadeToggle();
    });

    $('.agree .title').on('mouseleave', function () {
        $('.agree .content').fadeOut();
    })

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 600)
    });

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 2000 ? $('.to_top').addClass('on') : $('.to_top').removeClass('on');
    })

    AOS.init();
})
