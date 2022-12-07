$("#navigation").hide();
$("#info_1").hide();
$("#info_2").hide();
$("#info_3").hide();
$("#company_info").hide();
$("#company").hide();
$("#contact").hide();
$("#footer").hide();

var loadingScreen;

function loader() {
    loadingScreen = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-body").style.display = "block";
}
let element = 0
$(window).bind('mousewheel DOMMouseScroll', function (event) {
    var lastScrollTop = 0;
    var st = $(this).scrollTop();
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // scroll up
        element = element - 1
    }
    else {
        // scroll down
        element = element + 1
    }
    if (element === 0) {
        $("#banner").fadeIn("fast", "linear");
        $("#navigation").fadeOut();
        $("#info_1").fadeOut();
        $("#info_2").fadeOut();
        $("#info_3").fadeOut();
        $("#company_info").fadeOut();
        $("#company").fadeOut();
        $("#contact").fadeOut();
        $("#footer").fadeOut();
    }
    else if (element === 1) {
        $("#navigation").fadeIn();
        $("#info_1").fadeIn("fast", "linear");
        $("#banner").fadeOut();
        $("#info_2").fadeOut();
        $("#info_3").fadeOut();
        $("#company_info").fadeOut();
        $("#company").fadeOut();
        $("#contact").fadeOut();
        $("#footer").fadeOut();
    }
    else if (element === 2) {
        $("#navigation").fadeIn();
        $("#info_2").fadeIn();
        $("#banner").fadeOut();
        $("#info_1").fadeOut();
        $("#info_3").fadeOut();
        $("#company_info").fadeOut();
        $("#company").fadeOut();
        $("#contact").fadeOut();
        $("#footer").fadeOut();
    }
    else if (element === 3) {
        $("#navigation").fadeIn();
        $("#info_3").fadeIn();
        $("#banner").fadeOut();
        $("#info_2").fadeOut();
        $("#info_1").fadeOut();
        $("#company_info").fadeOut();
        $("#company").fadeOut();
        $("#contact").fadeOut();
        $("#footer").fadeOut();
    }
    else {
        $("#info_3").fadeOut();
        $("#company_info").fadeIn()
        $("#company").fadeIn();
        $("#contact").fadeIn();
        $("#footer").fadeIn();
    }
    lastScrollTop = st;
});

