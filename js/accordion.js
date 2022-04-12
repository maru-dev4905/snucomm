$(document).ready(function(){
    var accordionBtn = $(".accordion-btn");

    accordionBtn.click(function(){
        var th = $(this);

        if(th.hasClass("show")){
            th.removeClass("show");
        }else{
            accordionBtn.removeClass("show");
            th.addClass("show");
        }
    });
})