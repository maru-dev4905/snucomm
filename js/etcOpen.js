$(document).ready(function(){
    var etcBtn = $(".etc-btn");

    etcBtn.click(function(){
        var th = $(this);

        if(th.hasClass("show")){
            th.removeClass("show");
        }else{
            th.addClass("show");
        }
    });
});