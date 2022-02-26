$(document).ready(function(){
    var toggle = $(".toggle-btn");
    
    toggle.click(function(){
        var th = $(this);

        if(th.closest(".toggle").hasClass("active")){
            th.closest(".toggle").removeClass("active");
        }else{
            th.closest(".toggle").addClass("active");
        }
    });
});