(function ($) {

    var selectors = {
        $body: $("body"),
        $navigator: $(".navigator"),
        $home: $("#home")
        },
        context = {
            shown: "#home"
        };

    $(function () {
       if(!(window.location.hash)){
           $("#home").addClass("home");
       }
    });

    $(".menu-btn").click(function () {
        selectors.$body.toggleClass("opened");
        selectors.$navigator.toggleClass("shown");
        selectors.$navigator.find(".menu-btn").toggleClass("shown");
    });

    $(".menu-item").click(function (e) {
        e.preventDefault();
        var $toClose = $(context.shown),
            href = $(this).attr("href"),
            $toOpen = $(href);

        $toClose.addClass("shown");
        $toOpen.removeClass("shown");
        context.shown = href;
    });
})(jQuery);
