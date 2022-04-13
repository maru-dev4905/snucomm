$(document).ready(function(){
    var mapTabBtn       = $(".map-tab button");
    var mapCont         = $(".map-content");

    mapTabBtn.click(function(){
        var th = $(this);
        var thIdx = th.index();

        mapTabBtn.removeClass("current");
        th.addClass("current");

        mapCont.removeClass("current");
        mapCont.eq(thIdx).addClass("current");
    });
});