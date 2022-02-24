$(document).ready(function(){
    var searchOpenBtn       = $(".search-btn");
    var searchCloseBtn      = $(".search-box .close-btn");
    var searchBox           = $(".search-box");
    
    var dim                 = $(".dim");

    searchOpenBtn.click(function(){
        searchBox.addClass('show');
        dim.addClass('show');
    });

    searchCloseBtn.click(function(){
        searchBox.removeClass('show');
        dim.removeClass('show');
    });

    dim.click(function(){
        if(searchBox.hasClass("show")){
            searchBox.removeClass("show");
            dim.removeClass("show");
        }else{
            return false;
        }
    });
});