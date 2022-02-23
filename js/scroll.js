$(document).ready(function(){
    var header = $("header");
    var body = $("body");
    var winScrollY;
    

    $(window).scroll(function(){
        winScrollY = $(window).scrollTop();

        if(winScrollY >= 100){
            body.addClass("scroll");
        }else{
            body.removeClass("scroll");
        }
    });
});