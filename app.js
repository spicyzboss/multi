const preload = document.querySelector(".preload")
const loaded = document.querySelector(".loaded")
loaded.classList.add("hide")
document.querySelector("html").style.overflowY = `hidden`
var arrow_state = 1
const howmuch_content = document.querySelector("#howmuch_info")
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
decision = () => {
    console.log(arrow_state)
    if (arrow_state == 1) {
        howmuch_content.src = `./img/howmuch_info1.png`
    } else if (arrow_state == 2) {
        howmuch_content.src = `./img/howmuch_info2.png`
    } else if (arrow_state == 3) {
        howmuch_content.src = `./img/howmuch_info3.png`
    }
}
var state_where1 = 1
var state_where2 = 1
var state_where3 = 1
where1 = () => {
    state_where1*=-1
    if (state_where1 == 1) {
        document.querySelector("#button_where1").src = `./img/button_where1.png`
    } else {
        document.querySelector("#button_where1").src = `./img/button2_where1.png`
    }
}
where2 = () => {
    state_where2*=-1
    if (state_where2 == 1) {
        document.querySelector("#button_where2").src = `./img/button_where2.png`
    } else {
        document.querySelector("#button_where2").src = `./img/button2_where2.png`
    }
}
where3 = () => {
    state_where3*=-1
    if (state_where3 == 1) {
        document.querySelector("#button_where3").src = `./img/button_where3.png`
    } else {
        document.querySelector("#button_where3").src = `./img/button2_where3.png`
    }
}

playGame = () => window.location.href = `game.html`

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
