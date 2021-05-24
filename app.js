const preload = document.querySelector(".preload")
const loaded = document.querySelector(".loaded")
loaded.classList.add("hide")
document.querySelector("html").style.overflowY = `hidden`
var arrow_state = 1
const arrow_left = document.querySelector("#arrow_left")
const arrow_right = document.querySelector("#arrow_right")
window.addEventListener("load", () => {
    preload.classList.add("hide")
    loaded.classList.remove("hide")
    document.querySelector("html").style.overflowY = `auto`
})
left_arrow = () => {
    arrow_state--;
    if (arrow_state < 1) {
        arrow_state = 3
    }
    decision()
}
right_arrow = () => {
    arrow_state++;
    if (arrow_state > 3) {
        arrow_state = 1
    }
    decision()
}
howmuch_text1 = document.querySelector("#howmuch_text1")
howmuch_text2 = document.querySelector("#howmuch_text2")
howmuch_text3 = document.querySelector("#howmuch_text3")
decision = () => {
    console.log(arrow_state)
    if (arrow_state == 1) {
        howmuch_text1.style.opacity = 100
        howmuch_text2.style.opacity = 0
        howmuch_text3.style.opacity = 0
    } else if (arrow_state == 2) {
        howmuch_text1.style.opacity = 0
        howmuch_text2.style.opacity = 100
        howmuch_text3.style.opacity = 0
    } else if (arrow_state == 3) {
        howmuch_text1.style.opacity = 0
        howmuch_text2.style.opacity = 0
        howmuch_text3.style.opacity = 100
    }
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || html.clientHeight) &&
        rect.right <= (window.innerWidth || html.clientWidth)
    );
}

playGame = () => window.location.href = `game.html`

window.addEventListener("mousewheel", () => {
    if (isInViewport(document.querySelector("#button_where1"))) {
        document.querySelector("#where_text1").style.opacity = 100;
        document.querySelector("#button_where1").style.opacity = 0;
        setInterval(() => {
            document.querySelector("#where_text2").style.opacity = 100;
        }, 500);
    }
    if (isInViewport(document.querySelector("#button_where2"))) {
        document.querySelector("#where_text3").style.opacity = 100;
        document.querySelector("#button_where2").style.opacity = 0;
    }
    if (isInViewport(document.querySelector("#button_where3"))) {
        document.querySelector("#where_text4").style.opacity = 100;
        document.querySelector("#button_where3").style.opacity = 0;
    }
})

/**
 * Back to top button
 */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
        return [...document.querySelectorAll(el)]
    } else {
        return document.querySelector(el)
    }
}
const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
}

let backtotop = select('.back-to-top')
if (backtotop) {
    const toggleBacktotop = () => {
        if (window.scrollY > 100) {
            backtotop.classList.add('active')
        } else {
            backtotop.classList.remove('active')
        }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
}
