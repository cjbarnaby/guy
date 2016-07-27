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
        $(".overlay-image").remove();
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

    // EVENT HANDLER FOR OVERLAY
    var showOverlay = function(link) {
        $(".overlay").fadeIn();
        if (link === "portfolio") {
            showPortfolio();
        } else if (link === "about") {
            showAbout();
        }
    };

    // EVENT HANDLER FOR CONTENT TILE hover
    $(".content-tile").on("mouseenter", function() {
        $(this).find(".content-tile-text").css("opacity", 1);
    }).on("mouseleave", function() {
        $(this).find(".content-tile-text").css("opacity", 0);
    });

    // FUNCTION TO DISPLAY PORTFOLIO INDEX

    var showPortfolio = function() {
        $(".portfolio-box").show();
    };


    // FUNCTION TO DISPLAY ABOUT PAGE
    var showAbout = function() {
        $(".about-box").show();
    };

    // EVENT HANDLERS FOR PORTFOLIO LINKS
    $(".content-tile").on("click", function(e) {
        $(".overlay-image").remove();
        e.stopPropagation();
        e.stopImmediatePropagation();
        var id = $(this).attr("id");
        showImage(id);
    });

    var showImage = function(id) {
        if ((id === "ask_izzy") || (id === "maccas")) {
            for (var i = 0; i < multi_image[id].length; i++) {
                addImage(multi_image[id][i]);
            }
        } else {
            addImage(id);
        }
    };

    var addImage = function(image) {
        var path = image + ".png";
        var url = "assets/" + path;
        var $img = $("<img></img>");
        $img.addClass("overlay-image");
        $img.attr("src", url);
        $(".overlay").append($img);
    };



    // EVENT HANDLER FOR OVERLAY (RETURN TO PORTFOLIO / ABOUT)
    $(".overlay").on("click", function() {
        $(".overlay-image").remove();
        $(".overlay").fadeOut();
        $(".portfolio-box, .about-box").hide();
        console.log("overlay");
    });


    $(".overlay").on("click", ".overlay-image", function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".overlay-image").remove();
    });

    // EVENT HANDLER FOR BODY (RETURN TO HOME)
    $(".underlay, .poster").on("click", function() {
        $(".overlay-image").remove();
        $(".filter-box").removeClass("filter");
        $(".filter-box").addClass("unfilter");
        $(".internal").removeClass("active");
    });
});
