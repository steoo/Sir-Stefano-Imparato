(function ($) {

    var selectors = {
            $body: $("body"),
            $container: $(".container"),
            $navigator: $(".navigator"),
            $home: $("#home"),
            $menubtn: $(".menu-btn")
        },
        context = {
            shown: "#home"
        };

    $(function () {
        if (!(window.location.hash)) {
            $("#home").addClass("home");
        }
    });

    selectors.$menubtn.on("click",function () {
        selectors.$navigator.toggleClass("shown");
        selectors.$navigator.find(".menu-btn").toggleClass("shown");
    });

    $(".menu-item, .cazzimma").click(function (e) {
        e.preventDefault();
        var $toClose = $(context.shown),
            href = $(this).attr("href"),
            $toOpen = $(href),
            top = $toOpen.offset().top,
            height = $toOpen.height(),
            windowHeight = $(window).height();

        if(!$(this).hasClass("cazzimma"))
        selectors.$menubtn.eq(0).trigger("click");

        var offset = height < windowHeight ? top - ((windowHeight/2) - (height/2)) : top;

        selectors.$body.animate({scrollTop: offset});
        context.shown = href;
    });
})(jQuery);
