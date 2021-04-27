// Draft ไง!!!!
print = (a) => {
    console.log(a)
}

// const building1 = document.querySelector(".building-1")
// print(building1)

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

const sub_1 = document.querySelector(".sub-1")

top = sub_1.getBoundingClientRect().top
bot = sub_1.getBoundingClientRect().bottom
document.addEventListener('scroll', () => {
    print(`${HEIGHT} ${WIDTH}`)
})

// building1.style.filter = `brightness(50%)`

// console.log(HEIGHT)
// console.log(WIDTH)