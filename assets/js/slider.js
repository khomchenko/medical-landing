var membersSwiper = new Swiper ('.members__wrap .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
        nextEl: '.members__wrap .swiper-button-next',
        prevEl: '.members__wrap .swiper-button-prev',
    }
});

var gallerySwiper = new Swiper ('.gallery__wrap .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: '.gallery__wrap .swiper-button-next',
        prevEl: '.gallery__wrap .swiper-button-prev',
    }
});

var blogSwiper = new Swiper ('.blog__wrap .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
        nextEl: '.blog__wrap .swiper-button-next',
        prevEl: '.blog__wrap .swiper-button-prev',
    }
});