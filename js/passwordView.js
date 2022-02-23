$(document).ready(function(){
    var passwordViewBtn = $(".pw-view-btn");

    passwordViewBtn.click(viewPassword);

    function viewPassword(){
        var th = $(this);

        if(th.hasClass("active")){
            th.removeClass("active");

            th.prev().attr("type","password");
            
        }else{
            th.addClass("active");
            
            th.prev().attr("type","text");
        }
    }
});