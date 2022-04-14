$(document).ready(function(){

    var openBtn = $(".content-popup-open-btn");
    var closeBtn = $(".program-popup .close-btn");
    var dim = $(".dim");
    var programPopup = $(".program-popup");

    openBtn.click(function(){
        dim.addClass("show");

        programPopup.addClass("show");
    });
    
    dim.click(function(){
        programPopup.removeClass("show");
    });

    closeBtn.click(function(){
        dim.removeClass("show");
        programPopup.removeClass("show");
    });

    var programContBtn = $(".program-title");

    programContBtn.click(function(){
        var th = $(this);
        
        if(th.hasClass("show")){
            th.removeClass("show")
        }else{
            th.addClass("show")
        }
    });

});