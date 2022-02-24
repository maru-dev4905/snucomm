$(document).ready(function(){
    var select          = $(".select");
    var currentSelect   = $(".select-current");
    var selectItem      = $(".select-item");

    currentSelect.click(function(){
        var th = $(this);

        console.log(th);

        if(th.parent().hasClass("show")){
            th.parent().removeClass("show");
        }else{
            th.parent().addClass("show");
        }
    });
});