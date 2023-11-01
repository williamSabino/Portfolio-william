import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    speed: 1000,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    autoplay:{
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

    effect: "grid",
    grid:{
        rows: 2,
    }

});