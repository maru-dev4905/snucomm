$(document).ready(function(){
    var bannerSlide     = $(".banner-slide li");
    var bannerPlayBtn   = $(".play-btn");
    var stateLine       = $(".state-line span");
    var slideCurrent    = $(".slide-state .current");
    var slideTotal      = $(".slide-state .total");
    var prevBtn         = $(".banner-slide-controller .prev-btn");
    var nextBtn         = $(".banner-slide-controller .next-btn");

    var stateLineWidth  = stateLine.parent().css("width");

    var SLIDE_DURATION  = 10000;

    var slideInterval   = setInterval(slide,0);

    var slideIndex = 1;

    slideTotal.text(bannerSlide.length);

    bannerPlayBtn.click(function(){
        var th = $(this);

        if(slideInterval){
            clearInterval(slideInterval);
        }
        if(th.hasClass("stop")){
            slideInterval = setInterval(slide);
            th.removeClass("stop");
        }else{
            th.addClass("stop");
            stateLine.stop(true,false)
        }
    });

    nextBtn.click(function(){
        
        stateLine.stop(true,false)
        if(slideIndex == bannerSlide.length){
            slideIndex = 1;
            slideCurrent.text(1);

        }else{
            slideIndex++;
            slideCurrent.text(slideIndex);
        }
        stateLine.css({
            width:0
        })
        
        bannerSlide.removeClass("active");
        bannerSlide.eq(slideIndex - 1).addClass("active");
    });

    prevBtn.click(function(){
        
        stateLine.stop(true,false)
        if(slideIndex == 1){
            slideIndex = bannerSlide.length;
            slideCurrent.text(bannerSlide.length);

        }else{
            slideIndex--;
            slideCurrent.text(slideIndex);
        }
        stateLine.css({
            width:0
        })
        
        bannerSlide.removeClass("active");
        bannerSlide.eq(slideIndex - 1).addClass("active");
    });

    function slide(){
        stateLine.animate({
            width: stateLineWidth
        },SLIDE_DURATION,function(){
            stateLine.css({
                width:0
            })
            slideIndex++;
            
            slideChange();
        });
    }
    
    function slideChange(){
        if(slideIndex == bannerSlide.length + 1){
            slideIndex = 1;
            slideCurrent.text(1);
        }else{
            slideCurrent.text(slideIndex);
        }
        
        bannerSlide.removeClass("active");
        bannerSlide.eq(slideIndex - 1).addClass("active");
    }
    
});