$(document).ready(function(){
    var select          = $(".select");
    var currentSelect   = $(".select-current");
    var selectItem      = $(".select-item");

    currentSelect.click(function(){
        var th = $(this);

        if(th.parent().hasClass("show")){
            th.parent().removeClass("show");
        }else{
            th.parent().addClass("show");
        }
    });

    selectItem.click(function(){
        var th = $(this);
        var thText = th.text();
        
        th.closest(".select-list").prev().find("span").text(thText);
        th.closest(".select").removeClass("show");
        currentSelect.css("color","#000")
    });
});