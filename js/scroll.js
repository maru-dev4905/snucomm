$(document).ready(function(){
    var header = $("header");
    var body = $("body");
    var winScrollY;
    var stickyText = $(".sticky-text");

    $(window).scroll(function(){
        winScrollY = $(window).scrollTop();

        if(winScrollY >= $(window).innerHeight()){
            stickyText.addClass("show");
        }else{
            stickyText.removeClass("show");
        }

        if(winScrollY >= 100){
            body.addClass("scroll");
        }else{
            body.removeClass("scroll");
        }
    });
});