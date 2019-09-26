var membersSwiper = new Swiper ('.members__wrap .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    pagination: {
        clickable: true,
        el: '.members__wrap .swiper-pagination',
    },

    navigation: {
        nextEl: '.members__wrap .swiper-button-next',
        prevEl: '.members__wrap .swiper-button-prev',
    },

    breakpoints: {
        900: {
            slidesPerView: 3,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 2
        }
    }
});

var offersSwiper = new Swiper ('.offers__wrap .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        clickable: true,
        el: '.offers__wrap .swiper-pagination',
    },

    breakpoints: {
        900: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 10
        },
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

var gallerySwiper = new Swiper ('.gallery__wrap .swiper-container', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    pagination: {
        clickable: true,
        el: '.gallery__wrap .swiper-pagination',
    },

    navigation: {
        nextEl: '.gallery__wrap .swiper-button-next',
        prevEl: '.gallery__wrap .swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0
        }
    }
});

var blogSwiper = new Swiper ('.blog__wrap .swiper-container', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
        nextEl: '.blog__wrap .swiper-button-next',
        prevEl: '.blog__wrap .swiper-button-prev',
    },

    breakpoints: {
        900: {
            slidesPerView: 2,
            spaceBetween: 10,

            pagination: {
                clickable: true,
                el: '.blog__wrap .swiper-pagination',
            },
        },
        600: {
            slidesPerView: 1
        }
    }
});

if (window.innerWidth < 900) {
    var aboutMobileSwiper = new Swiper ('.about__col--mobile-slider .swiper-container', {
        breakpoints: {
            900: {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 10,

                pagination: {
                    clickable: true,
                    el: '.about__col--mobile-slider .swiper-pagination',
                },
            }
        }
    });

    var servicesMobileSwiper = new Swiper ('.services__wrap--mobile-slider .swiper-container', {
        breakpoints: {
            900: {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 10,

                pagination: {
                    clickable: true,
                    el: '.services__wrap--mobile-slider .swiper-pagination',
                },
            }
        }
    });
}

