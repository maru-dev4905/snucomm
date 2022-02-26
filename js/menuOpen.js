$(document).ready(function(){
    var menu = $(".menu-box");
    var menuOpenBtn = $(".menu-open-btn");
    var menuCloseBtn = $(".menu-box .close-btn");
    var dim = $(".dim");

    menuOpenBtn.click(function(){
        menu.addClass("show");
        dim.addClass("show");
    });

    menuCloseBtn.click(function(){
        menu.removeClass("show");
        dim.removeClass("show");
    });

    dim.click(function(){
        menu.removeClass("show");
        dim.removeClass("show");
    });
});