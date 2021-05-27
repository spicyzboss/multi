// const preload = document.querySelector(".preload")
// const loaded = document.querySelector(".loaded")
// loaded.classList.add("hide")
document.querySelector("html").style.overflowY = `hidden`
var arrow_state = 1
const arrow_left = document.querySelector("#arrow_left")
const arrow_right = document.querySelector("#arrow_right")
// window.addEventListener("load", () => {
//     preload.classList.add("hide")
//     loaded.classList.remove("hide")
// })
document.querySelector("html").style.overflowY = `auto`
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
howmuch_earth = document.querySelector("#howmuch_earth")
howmuch_virus1 = document.querySelector("#howmuch_virus1")
howmuch_virus2 = document.querySelector("#howmuch_virus2")
howmuch_virus3 = document.querySelector("#howmuch_virus3")
howmuch_virus4 = document.querySelector("#howmuch_virus4")
howmuch_thai = document.querySelector("#howmuch_thai")
howmuch_waste1 = document.querySelector("#howmuch_waste1")
howmuch_garbage = document.querySelector("#howmuch_garbage")
howmuch_garbage2 = document.querySelector("#howmuch_garbage2")
howmuch_bubble1 = document.querySelector("#howmuch_bubble1")
howmuch_bubble2 = document.querySelector("#howmuch_bubble2")
howmuch_bubble3 = document.querySelector("#howmuch_bubble3")
howmuch_bubble4 = document.querySelector("#howmuch_bubble4")
howmuch_bubble5 = document.querySelector("#howmuch_bubble5")
howmuch_text1 = document.querySelector("#howmuch_text1")
howmuch_text2 = document.querySelector("#howmuch_text2")
howmuch_text3 = document.querySelector("#howmuch_text3")
decision = () => {
    console.log(arrow_state)
    if (arrow_state == 1) {
        howmuch_earth.style.opacity = 100
        howmuch_virus1.style.opacity = 100
        howmuch_virus2.style.opacity = 100
        howmuch_virus3.style.opacity = 100
        howmuch_virus4.style.opacity = 100
        howmuch_thai.style.opacity = 0
        howmuch_waste1.style.opacity = 0
        howmuch_garbage.style.opacity = 0
        howmuch_garbage2.style.opacity = 0
        howmuch_bubble1.style.opacity = 0
        howmuch_bubble2.style.opacity = 0
        howmuch_bubble3.style.opacity = 0
        howmuch_bubble4.style.opacity = 0
        howmuch_bubble5.style.opacity = 0
        howmuch_text1.style.opacity = 100
        howmuch_text2.style.opacity = 0
        howmuch_text3.style.opacity = 0
    } else if (arrow_state == 2) {
        howmuch_earth.style.opacity = 0
        howmuch_virus1.style.opacity = 0
        howmuch_virus2.style.opacity = 0
        howmuch_virus3.style.opacity = 0
        howmuch_virus4.style.opacity = 0
        howmuch_thai.style.opacity = 100
        howmuch_waste1.style.opacity = 100
        howmuch_garbage.style.opacity = 0
        howmuch_garbage2.style.opacity = 0
        howmuch_bubble1.style.opacity = 0
        howmuch_bubble2.style.opacity = 0
        howmuch_bubble3.style.opacity = 0
        howmuch_bubble4.style.opacity = 0
        howmuch_bubble5.style.opacity = 0
        howmuch_text1.style.opacity = 0
        howmuch_text2.style.opacity = 100
        howmuch_text3.style.opacity = 0
    } else if (arrow_state == 3) {
        howmuch_earth.style.opacity = 0
        howmuch_virus1.style.opacity = 0
        howmuch_virus2.style.opacity = 0
        howmuch_virus3.style.opacity = 0
        howmuch_virus4.style.opacity = 0
        howmuch_thai.style.opacity = 0
        howmuch_waste1.style.opacity = 0
        howmuch_garbage.style.opacity = 100
        howmuch_garbage2.style.opacity = 100
        howmuch_bubble1.style.opacity = 100
        howmuch_bubble2.style.opacity = 100
        howmuch_bubble3.style.opacity = 100
        howmuch_bubble4.style.opacity = 100
        howmuch_bubble5.style.opacity = 100
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
btn_nature = document.querySelector("#btn_nature")
btn_human = document.querySelector("#btn_human")
nature = () => {
    document.querySelector("#effect_text1").style.opacity = 100
}
human = () => {
    document.querySelector("#effect_text2").style.opacity = 100
}

playGame = () => window.location.href = `index.html`

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
    if (isInViewport(document.querySelector("#effect_text3"))) {
        document.querySelector("#effect_text3").style.opacity = 100;
    }
    if (isInViewport(document.querySelector("#effect_text4"))) {
        document.querySelector("#effect_text4").style.opacity = 100;
    }
    if (isInViewport(document.querySelector("#head_solve"))) {
        bubble()
    }
    if (isInViewport(document.querySelector("#head_effect"))) {
        document.querySelector("#head_effect").style.opacity = 100
    }
    if (isInViewport(document.querySelector("#effect_nature"))) {
        setInterval(() => {
            document.querySelector("#effect_nature").style.opacity = 100
            document.querySelector("#effect_text1").style.opacity = 100
        }, 500);
        setInterval(() => {
            document.querySelector("#effect_human").style.opacity = 100
            document.querySelector("#effect_text2").style.opacity = 100
        }, 1000)
    }
})

bubble = () => {
    setInterval(() => {
        document.querySelector("#head_solve").style.opacity = 100
    }, 200);
    setInterval(() => {
        document.querySelector("#solve_text1").style.opacity = 100
    }, 500);
    setInterval(() => {
        document.querySelector("#solve_repair").style.opacity = 100
    }, 600);
    setInterval(() => {
        document.querySelector("#solve_reuse").style.opacity = 100
    }, 700);
    setInterval(() => {
        document.querySelector("#solve_reduce").style.opacity = 100
    }, 800);
    setInterval(() => {
        document.querySelector("#solve_recycle").style.opacity = 100
    }, 900);
    setInterval(() => {
        document.querySelector("#solve_reject").style.opacity = 100
    }, 1000);
    setInterval(() => {
        document.querySelector("#solve_text2").style.opacity = 100
    }, 1100);
}

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
callout = () => window.open("https://www.greenpeace.org/thailand/act/refuseplastic/", "_blank")