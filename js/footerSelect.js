$(document).ready(function(){
    var footerSelectBtn = $(".footer-select-btn");

    footerSelectBtn.click(function(){
        if(footerSelectBtn.hasClass("active")){
            footerSelectBtn.removeClass("active");
        }else{
            footerSelectBtn.addClass("active");
        }
    });
});