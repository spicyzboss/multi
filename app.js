const preload = document.querySelector(".preload")
const loaded = document.querySelector(".loaded")
loaded.classList.add("hide")
document.querySelector("html").style.overflowY = `hidden`
// const epr_s = document.querySelector("#epr_short")
// const epr_l = document.querySelector("#epr_full")
// const epr_thai1 = document.querySelector("#epr_thai1")
// const epr_thai2 = document.querySelector("#epr_thai2")
// const epr_thai3 = document.querySelector("#epr_thai3")
window.addEventListener("load", () => {
    preload.classList.add("hide")
    loaded.classList.remove("hide")
    document.querySelector("html").style.overflowY = `auto`
    // epr_s.classList.add("epr-hide")
    // epr_l.classList.add("epr-hide")
    // setInterval(() => {
    //     epr_s.style.opacity = 0
    //     epr_l.style.opacity = 0
    // }, 3000)
    // setInterval(() => {
    //     epr_thai1.style.opacity = 100;
    // }, 4500);
    // setInterval(() => {
    //     epr_thai2.style.opacity = 100;
    // }, 5000);
    // setInterval(() => {
    //     epr_thai3.style.opacity = 100;
    // }, 5700);
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
