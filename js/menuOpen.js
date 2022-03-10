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
        depth2.removeClass("show");
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


    var depth1Btn = $(".menu-box .depth1 button");
    var depth2 = $(".menu-box .depth2");
    var depth2BackBtn = $(".menu-box .depth2 .back-btn");
    var depth2Btn = $(".menu-box .depth2 .list button");
    
    depth1Btn.eq(1).click(function(){
        depth2.addClass("show");
    });

    depth2BackBtn.click(function(){
         depth2.removeClass("show");
    });

    depth2Btn.click(function(){
        var th = $(this);

        if(th.hasClass("show")){
            depth2Btn.removeClass("show");
        }else{
            depth2Btn.removeClass("show");
            th.addClass("show");
        }
    });
});