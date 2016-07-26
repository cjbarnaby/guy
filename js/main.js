// GLOBALS

var externalLinks = {
    linkedin: "https://www.linkedin.com/in/guy-harris",
    blog: "http://themilnercatastrophe.blogspot.com.au/",
    music: "http://www.guymilnerharris.com.au/"
};

var multi_image = {
    maccas: [
        "maccas-one",
        "maccas-two",
        "maccas-three",
        "maccas-four"
    ],
    ask_izzy: [
        "ask-izzy-one",
        "ask-izzy-two"
    ]
};

$(document).ready(function() {
    $(".overlay").hide();

    // EVENT HANDLERS FOR INTERNAL NAV LINKS
    $(".internal").on("click", function() {
        $(".overlay").hide();
        $(".filter-box").addClass("filter");
        $(".filter-box").removeClass("unfilter");
        $(".internal").removeClass("active");
        $(this).addClass("active");
        showOverlay($(this).attr("id"));
    });

    // EVENT HANDLERS FOR EXTERNAL NAV LINKS
    $(".external").on("click", function() {
        var id = $(this).attr("id");
        window.open(externalLinks[id], '_blank');
    });


    // EVENT HANDLERS FOR PORTFOLIO LINKS

    // EVEN HANDLER FOR OVERLAY

    var showOverlay = function(link) {
        $(".overlay").fadeIn();
    };




    // EVENT HANDLER FOR OVERLAY (RETURN TO PORTFOLIO)
    $(".overlay").on("click", function() {
        $(".overlay").fadeOut();
    });

    // EVENT HANDLER FOR BODY (RETURN TO HOME)
    $(".underlay").on("click", function() {
        $(".filter-box").removeClass("filter");
        $(".filter-box").addClass("unfilter");
        $(".internal").removeClass("active");
    });
});
