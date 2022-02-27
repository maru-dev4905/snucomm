$(document).ready(function(){
    var precautionsOpenBtn = $(".precautions-open-btn");
    
    precautionsOpenBtn.click(function(){
        if(precautionsOpenBtn.hasClass("active")){
            precautionsOpenBtn.removeClass("active");
        }else{
            precautionsOpenBtn.addClass("active");
        }
    });
});