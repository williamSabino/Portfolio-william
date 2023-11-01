import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1000,
    loop: true,
    slidesPerView: 3,
    autoplay: {
         delay: 3000,
     },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        slideShadow: false,
        modifier: 1,
        depth: 400,
    }

});