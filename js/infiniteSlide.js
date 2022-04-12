$(document).ready(function(){
    
    var slideCont               = $(".slide-cont ul");
    var slideItem               = $(".slide-cont li");

    var slideContWidth          = slideCont.innerWidth();
    var slideItemWidth          = $(window).innerWidth();


    var TIMER                   = 5000;
    
    var idx = 0;

    setInterval(function(){

        if(idx != slideItem.length){
            slideCont.css({
                'transform' : `translateX(-${slideItemWidth * idx}px)`
            });
            slideItem.removeClass("current");
            slideItem.eq(idx).addClass("current");

            idx += 1;

        }else{
            idx = 0;
        
        }
    }, TIMER);

    // $('.light2').css({'transform':'rotate('+test0+'deg)'})
});