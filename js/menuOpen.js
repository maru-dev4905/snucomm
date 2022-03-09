$(document).ready(function(){
    var menu = $(".menu-box");
    var menuOpenBtn = $("header .menu-open-btn");
    var menuCloseBtn = $(".menu-box .close-btn");
    var dim = $(".dim");
    var myPageHeader = $(".myPage-header .menu-open-btn");
    var myPageMenu = $(".menu");
    var myPageMenuCloseBtn = $(".menu .menu-close-btn");


    menuOpenBtn.click(function(){
        menu.addClass("show");
        dim.addClass("show");
    });

    menuCloseBtn.click(function(){
        menu.removeClass("show");
        dim.removeClass("show");
    });

    myPageHeader.click(function(){
        myPageMenu.addClass("active");
        dim.addClass("show");
    });

    myPageMenuCloseBtn.click(function(){
        myPageMenu.removeClass("active");
        dim.removeClass("show");
    });

    dim.click(function(){
        menu.removeClass("show");
        dim.removeClass("show");
        myPageMenu.removeClass("active")
    });
});