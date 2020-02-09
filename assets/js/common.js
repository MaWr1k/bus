
const gallery = new Swiper('.gallery .swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 5,
    // slidesPerGroup: 3,
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
const mainSlider = new Swiper('.main-slider .swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
});
const evaSlider = new Swiper('.eva .swiper-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
});
