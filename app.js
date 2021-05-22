const preload = document.querySelector(".preload")
const loaded = document.querySelector(".loaded")
const epr_s = document.querySelector("#epr_short")
const epr_l = document.querySelector("#epr_full")
const epr_thai1 = document.querySelector("#epr_thai1")
const epr_thai2 = document.querySelector("#epr_thai2")
const epr_thai3 = document.querySelector("#epr_thai3")
loaded.classList.add("hide")
window.addEventListener("load", () => {
    preload.classList.add("hide")
    loaded.classList.remove("hide")
    epr_s.classList.add("epr-hide")
    epr_l.classList.add("epr-hide")
    setInterval(() => {
        epr_s.style.opacity = 0
        epr_l.style.opacity = 0
    }, 3000)
    setInterval(() => {
        epr_thai1.style.opacity = 100;
    }, 4500);
    setInterval(() => {
        epr_thai2.style.opacity = 100;
    }, 5000);
    setInterval(() => {
        epr_thai3.style.opacity = 100;
    }, 5700);
})