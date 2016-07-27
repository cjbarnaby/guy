////////////////////////////////
//////////  GLOBALS ////////////
////////////////////////////////

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

////////////////////////////////
//////////  UI //// ////////////
////////////////////////////////

$(document).ready(function() {
    $(".overlay").hide();

////////////////////////////////
//////////  NAVIGATION /////////
////////////////////////////////

    // NAVIGATION - EVENT HANDLERS FOR INTERNAL NAV LINKS
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

    // NAVIGATION - EVENT HANDLERS FOR EXTERNAL NAV LINKS
    $(".external").on("click", function() {
        var id = $(this).attr("id");
        window.open(externalLinks[id], '_blank');
    });

////////////////////////////////
//////////  ABOUT  /////////////
////////////////////////////////

    // ABOUT - FUNCTION TO DISPLAY ABOUT PAGE
    var showAbout = function() {
        $(".about-box").show();
    };

////////////////////////////////
//////////  GENERAL ////////////
////////////////////////////////

    // GENERAL -  - EVENT HANDLER FOR CALLING FUNCTIONS TO DISPLAY PORTFOLIO OR ABOUT OVERLAYS
    var showOverlay = function(link) {
        $(".overlay").fadeIn();
        if (link === "portfolio") {
            showPortfolio();
        } else if (link === "about") {
            showAbout();
        }
    };

    // GENERAL - EVENT HANDLER FOR UNDERLAY/POSTER (RETURN TO HOME)
    $(".underlay, .poster").on("click", function() {
        $(".overlay-image").remove();
        $(".filter-box").removeClass("filter");
        $(".filter-box").addClass("unfilter");
        $(".internal").removeClass("active");
    });

    // GENERAL - EVENT HANDLER FOR OVERLAY (RETURN TO PORTFOLIO / ABOUT)
    $(".overlay").on("click", function() {
        $(".overlay-image").remove();
        $(".overlay").fadeOut();
        $(".portfolio-box, .about-box").hide();
        console.log("overlay");
    });

////////////////////////////////
//////////  PORTFOLIO //////////
////////////////////////////////

    // PORTFOLIO - CONTENT TILE HOVER EFFECTS
    $(".content-tile").on("mouseenter", function() {
        $(this).find(".content-tile-text").css("opacity", 1);
    }).on("mouseleave", function() {
        $(this).find(".content-tile-text").css("opacity", 0);
    });

    // PORTFOLIO - FUNCTION TO DISPLAY PORTFOLIO INDEX
    var showPortfolio = function() {
        $(".portfolio-box").show();
    };

    // PORTFOLIO - EVENT HANDLERS FOR PORTFOLIO LINKS TO DISPLAY IMAGE
    $(".content-tile").on("click", function(e) {
        $(".overlay-image").remove();
        e.stopPropagation();
        e.stopImmediatePropagation();
        var id = $(this).attr("id");
        showImage(id);
    });

    // PORTFOLIO -  FUNCTION FOR ADDING IMAGES
    var showImage = function(id) {
        if ((id === "ask_izzy") || (id === "maccas")) {
            var $slideshow = $("<div></div>");
            $slideshow.addClass("slideshow");
            $slideshow.append( $("<div></div>").addClass("carousel") );
            $(".overlay").append($slideshow);
            $(".slideshow").fadeIn();
            for (var i = 0; i < multi_image[id].length; i++) {
                addSlideshowImage(multi_image[id][i]);
            }
        } else {
            addImage(id);
        }
    };

    // PORTFOLIO - ADD SINGLE IMAGE TO OVERLAY
    var addImage = function(image) {
        var path = image + ".png";
        var url = "assets/" + path;
        var $img = $("<img></img>");
        $img.addClass("overlay-image");
        $img.attr("src", url);
        $(".overlay").append($img);
        $(".overlay-image").fadeIn();
    };

    // PORTFOLIO - ADD MULTI-IMAGE SET TO PORTFOLIO
    var addSlideshowImage = function(image) {
        var path = image + ".png";
        var url = "assets/" + path;
        var $img = $("<img></img>");
        $img.addClass("slideshow-image");
        $img.attr("src", url);
        $(".carousel").append($img.hide().fadeIn(500));
    };

    // PORTFOLIO - EVENT HANDLER FOR PORTFOLIO IMAGE OVERLAY (RETURN TO PORTFOLIO)
    $(".overlay").on("click", ".overlay-image", function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".overlay-image").remove();
    });

    // PORTFOLIO - EVENT HANDLER FOR SLIDESHOW (RETURN TO PORTFOLIO)
    $(".overlay").on("click", ".carousel, .slideshow-image, .slideshow", function(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        $(".slideshow").remove();
    });

});
