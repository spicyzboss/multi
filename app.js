// Draft ไง!!!!
const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

print = (a) => {
    console.log(a)
}

isInViewport = (elem) => {
    const rect = elem.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (HEIGHT || document.documentElement.clientHeight) &&
        rect.right <= (WIDTH || document.documentElement.clientWidth)
    );
}

// const building1 = document.querySelector(".building-1")
// print(building1)

// const sub_1 = document.querySelector("h1")

// top = sub_1.getBoundingClientRect().top
// bot = sub_1.getBoundingClientRect().bottom
document.addEventListener('scroll', () => {
    // print(isInViewport(sub_1))
    // print(`${HEIGHT} ${WIDTH}`)
    // print(`${light.getBoundingClientRect().top} ${light.getBoundingClientRect().bottom}`)
})

// building1.style.filter = `brightness(50%)`

// console.log(HEIGHT)
// console.log(WIDTH)