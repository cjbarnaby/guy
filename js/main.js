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
        var link = $(this).attr("id");
        $(".overlay, .overlay-box").hide();
        $(".filter-box").addClass("filter");
        $(".filter-box").removeClass("unfilter");
        $(".internal").removeClass("active");
        $(this).addClass("active");
        showOverlay(link);
    });

    // EVENT HANDLERS FOR EXTERNAL NAV LINKS
    $(".external").on("click", function() {
        var id = $(this).attr("id");
        window.open(externalLinks[id], '_blank');
    });



    // EVEN HANDLER FOR OVERLAY
    var showOverlay = function(link) {
        $(".overlay").fadeIn();
        if (link === "portfolio") {
            showPortfolio();
        } else if (link === "about") {
            showAbout();
        }
    };

    // FUNCTION TO DISPLAY PORTFOLIO INDEX

    var showPortfolio = function() {
        $(".portfolio-box").show();
    };


    // FUNCTION TO DISPLAY ABOUT PAGE
    var showAbout = function() {
        $(".about-box").show();
    };

    // EVENT HANDLERS FOR PORTFOLIO LINKS



    // EVENT HANDLER FOR OVERLAY (RETURN TO PORTFOLIO / ABOUT)
    $(".overlay").on("click", function() {
        $(".overlay").fadeOut();
        $(".portfolio-box, .about-box").hide();
    });

    // EVENT HANDLER FOR BODY (RETURN TO HOME)
    $(".underlay, .poster").on("click", function() {
        $(".filter-box").removeClass("filter");
        $(".filter-box").addClass("unfilter");
        $(".internal").removeClass("active");
    });
});
