$(document).ready(function(){
    var programSwiper = new Swiper('.program-swiper', {
        slidesPerView : 'auto',
        spaceBetween: 25,
        freeMode: true,
        grabCursor: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            
            768: {
                spaceBetween : 38, 
            },
        },
    })

    var communitySwiper = new Swiper('.community-slide', {
        slidesPerView : 'auto',
        spaceBetween: 25,
        freeMode: true,
        grabCursor: true,
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        breakpoints: {
            
            768: {
                spaceBetween : 38, 
            },
        },
    })

    var programTab = $(".program-slide .tab-btn");
    var programSlide = $(".program-slide .slide-group li");

    programTab.click(function(){
        var th = $(this);
        var thIndex = th.parent().index();

        programTab.removeClass("active");
        th.addClass("active");

        programSlide.removeClass("active");
        programSlide.eq(thIndex).addClass("active");
    });
});