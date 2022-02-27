$(document).ready(function(){
    var imgTabBtn = $(".img-tab-btn");

    imgTabBtn.click(function(){
        var th = $(this);
        var thSrc = th.find("img").attr("src");
        var currentImg = th.closest(".img-tab").find(".current-img").find("img");
        currentImg.attr(
            "src",thSrc
        );
        imgTabBtn.removeClass("active");
        th.addClass("active");
    });
});