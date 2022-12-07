// loading screen js
var loadingScreen;

function loader() {
    loadingScreen = setTimeout(showPage, 1500);
}

function showPage() {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-body").style.display = "block";
}

// scrolling animation

document.addEventListener('wheel', scrollPage);

function scrollPage(e) {
    var nodesName = ['SECTION'];
    if (nodesName.includes(e.target.nodeName)) {
        var next = e.target.nextElementSibling;
        var prev = e.target.previousElementSibling;
    } else {
        var next = e.target.closest(nodesName).nextElementSibling;
        var prev = e.target.closest(nodesName).previousElementSibling;
    }

    if (e.deltaY < 0) {
        e.preventDefault();
        if (nodesName.includes(prev.nodeName)) {
            verticalScroll(prev, 1500, 'easeInOutCubic');
            e.target.closest(nodesName).classList.remove('active')
            prev.classList.add('active')
            var prev_id = prev.getAttribute("id")


            if (prev_id === 'info_1') {
                document.getElementsByClassName("bayron-partners-corporation-content-logo")[0].classList.add("img_slide_up")
                document.getElementsByClassName("bayron-partners-corporation-content")[0].classList.add("slide_down_text")
            }
            else if (document.getElementsByClassName("bayron-partners-corporation-content-logo")[0].classList.contains("img_slide_up") && document.getElementsByClassName("bayron-partners-corporation-content")[0].classList.contains("slide_down_text")) {
                document.getElementsByClassName("bayron-partners-corporation-content-logo")[0].classList.remove("img_slide_up")
                document.getElementsByClassName("bayron-partners-corporation-content")[0].classList.remove("slide_down_text")
            }
            else if (prev_id === 'info_2') {
                document.getElementsByClassName("product-img")[0].classList.add("img_slide_up")
                document.getElementsByClassName("product-info")[0].classList.add("slide_down_text")
            }
            else if (document.getElementsByClassName("product-img")[0].classList.contains("img_slide_up") && document.getElementsByClassName("product-info")[0].classList.contains("slide_down_text")) {
                document.getElementsByClassName("product-img")[0].classList.remove("img_slide_up")
                document.getElementsByClassName("product-info")[0].classList.remove("slide_down_text")
            }
            else if (prev_id === 'info_3') {
                document.getElementsByClassName("product-img")[1].classList.add("img_slide_up")
                document.getElementsByClassName("product-info")[1].classList.add("slide_down_text")
            }
            else if (document.getElementsByClassName("product-img")[1].classList.contains("img_slide_up") && document.getElementsByClassName("product-info")[1].classList.contains("slide_down_text")) {
                document.getElementsByClassName("product-img")[1].classList.remove("img_slide_up")
                document.getElementsByClassName("product-info")[1].classList.remove("slide_down_text")
            }
        }
    } else if (e.deltaY > 0) {
        e.preventDefault();
        if (nodesName.includes(next.nodeName)) {
            verticalScroll(next, 1500, 'easeInOutQuad', runAfter);
            e.target.closest(nodesName).classList.remove('active');
            next.classList.add('active');

            var next_id = next.getAttribute("id")

            if (next_id === 'info_1') {
                document.getElementsByClassName("bayron-partners-corporation-content-logo")[0].classList.add("img_slide_up")
                document.getElementsByClassName("bayron-partners-corporation-content")[0].classList.add("slide_down_text")
            }
            else if (document.getElementsByClassName("bayron-partners-corporation-content-logo")[0].classList.contains("img_slide_up") && document.getElementsByClassName("bayron-partners-corporation-content")[0].classList.contains("slide_down_text")) {
                document.getElementsByClassName("bayron-partners-corporation-content-logo")[0].classList.remove("img_slide_up")
                document.getElementsByClassName("bayron-partners-corporation-content")[0].classList.remove("slide_down_text")
            }
            else if (next_id === 'info_2') {
                document.getElementsByClassName("product-img")[0].classList.add("img_slide_up")
                document.getElementsByClassName("product-info")[0].classList.add("slide_down_text")
            }
            else if (document.getElementsByClassName("product-img")[0].classList.contains("img_slide_up") && document.getElementsByClassName("product-info")[0].classList.contains("slide_down_text")) {
                document.getElementsByClassName("product-img")[0].classList.remove("img_slide_up")
                document.getElementsByClassName("product-info")[0].classList.remove("slide_down_text")
            }
            else if (next_id === 'info_3') {
                document.getElementsByClassName("product-img")[1].classList.add("img_slide_up")
                document.getElementsByClassName("product-info")[1].classList.add("slide_down_text")
            }
            else if (document.getElementsByClassName("product-img")[1].classList.contains("img_slide_up") && document.getElementsByClassName("product-info")[1].classList.contains("slide_down_text")) {
                document.getElementsByClassName("product-img")[1].classList.remove("img_slide_up")
                document.getElementsByClassName("product-info")[1].classList.remove("slide_down_text")
            }
        }
    } else {
        return false;
    }
}

function runAfter() {
}

function verticalScroll(destination) {
    var duration = arguments.length <= 1 || arguments[1] === undefined ? 200 : arguments[1];
    var easing = arguments.length <= 2 || arguments[2] === undefined ? 'linear' : arguments[2];
    var callback = arguments[3];
    var easings = {
        easeInOutQuad: function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        }
    };


    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();
    var documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    var destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    var destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);


    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        var now = 'now' in window.performance ? performance.now() : new Date().getTime();
        var time = Math.min(1, (now - startTime) / duration);
        var timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start));

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}


