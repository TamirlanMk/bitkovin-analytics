$('.testimonials__slider').slick({
    slidesToShow: 1,
    speed: 300,
    dots: true,
    arrows: true,
    customPaging: () => {
        return `<div class="testimonials__dot"></div>`
    },
    responsive: [
        {
            breakpoint: 1300,
            settings: {
                arrows: true,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
            }
        },
        {
            breakpoint: 560,
            settings: {
                arrows: false,
            }
        }
    ],
    prevArrow: $('.testimonials__prev'),
    nextArrow: $('.testimonials__next')
});