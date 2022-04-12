$(document).ready(function(){
    var accordionBtn = $(".accordion-btn");

    accordionBtn.click(function(){
        var th = $(this);

        accordionBtn.removeClass("show");
        th.addClass("show");
    });
})