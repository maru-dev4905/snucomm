$(document).ready(function(){
    var select          = $(".select");
    var currentSelect   = $(".select-current");
    var selectItem      = $(".select-item");

    currentSelect.click(function(){
        var th = $(this);

        if(th.closest(".select").hasClass("readonly")){
            return false;
        }else{
            if(th.parent().hasClass("show")){
                th.parent().removeClass("show");
            }else{
                th.parent().addClass("show");
            }
        }

    });

    selectItem.click(function(){
        var th = $(this);
        var thText = th.text();
        
        th.closest(".select-list").prev().find("span").text(thText);
        th.closest(".select").removeClass("show");
        currentSelect.css("color","#000")
    });


    var logoSelectBtn = $(".logo-select-btn");
    var logoSelectList = $(".logo-select .logo-list");
    var logoSelectWrap = $(".logo-select");
    
    logoSelectBtn.click(function(){
        if(logoSelectWrap.hasClass("show")){
            logoSelectWrap.removeClass("show");
            logoSelectList.removeClass("show");
        }else{
            logoSelectWrap.addClass("show");
            logoSelectList.addClass("show");
        }
    });
});