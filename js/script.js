//LOADER
// const mainBody = document.querySelector('#main');
//  mainBody.classList.add('hidden')

document.body.style.overflow = 'hidden'

setTimeout(function(){
    document.body.style.overflow = 'visible'
},4800)


//REVEAL ELEMENTS 
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

function revealLeft() {
    var revealsLeft = document.querySelectorAll(".revealleft");

    for (var i = 0; i < revealsLeft.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsLeft[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsLeft[i].classList.add("active");
        } else {
            revealsLeft[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealLeft);

function revealRight() {
    var revealsRight = document.querySelectorAll(".revealright");

    for (var i = 0; i < revealsRight.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = revealsRight[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            revealsRight[i].classList.add("active");
        } else {
            revealsRight[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealRight);

//scroll btn
let mybutton = document.getElementById("myBtn");

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// HAMBURGER MENU FOR MOBILE SCREEN
const btn = document.getElementById("menu-btn");
const menuSpan = document.querySelectorAll(".hamburger span")
const mainMenu = document.querySelector(".hamburger")

mainMenu.addEventListener("click", () => {
    document.querySelector("#menu").classList.toggle("change");
    btn.classList.toggle("open");
    mainMenu.classList.add('fixed')
    // menuSpan.classList.remove("bg-black")
})

//COUNTER JS
let sectionCounter = document.querySelector('#sectioncounter')
let counters = document.querySelectorAll('.counter')

let counterObserver = new IntersectionObserver((entries, observer) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;

    let speed = 180;
    counters.forEach((counter, index) => {
        function UpDateCounter() {
            const targetNumber = +counter.dataset.target;
            const initialNumber = +counter.innerText;
            const incPerCount = targetNumber / speed
            if (initialNumber < targetNumber) {
                counter.innerText = Math.ceil(initialNumber + incPerCount);
                setTimeout(UpDateCounter, 300);
            }
        }
        UpDateCounter()
        if (counter.parentElement.style.animation) {
            counter.parentElement.style.animation = ""
        } else {
            counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5}s`;
        }
    })
    observer.unobserve(sectionCounter)
}, {
    root: null,
    threshold: 0.4,
})
counterObserver.observe(sectionCounter)




