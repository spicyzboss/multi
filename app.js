const preload = document.querySelector(".preload")
const loaded = document.querySelector(".loaded")
loaded.classList.add("hide")
document.querySelector("html").style.overflowY = `hidden`
window.addEventListener("load", () => {
    preload.classList.add("hide")
    loaded.classList.remove("hide")
    document.querySelector("html").style.overflowY = `auto`
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
