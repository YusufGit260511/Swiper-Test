const body = document.body;
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    
    // Navigation arrows
    navigation: {
        nextEl: '.custom-next',
        prevEl: '.custom-prev',
    },
    on: {
        slideChange: function () {
            setTimeout(() => {
                let activeSlide = document.querySelector('.swiper-slide-active');
                if (activeSlide) {
                    let bgColor = activeSlide.getAttribute('data-bg');
                    if (bgColor) {
                        body.style.background = bgColor;
                    }
                }
            }, 100); 
        }
    }
    
});