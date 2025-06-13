// Script for the project slider
const container = document.querySelector('.card-slider');
const cards = container.querySelectorAll('.card-slider .card');
const cardsPerSlide = 2;
let currentIndex = 0;

function slideProjects() {
    currentIndex += cardsPerSlide;

    if (currentIndex >= cards.length){
        currentIndex = 0;
    }

    const offset = -(100/cardsPerSlide)*currentIndex;
    container.style.transform = `translateX(${offset}%)`;
}

setInterval(slideProjects, 4000)

//Script for the typewritters function in the portfolio
const text =  "Hi, I'm Crypt - ethical hacker, programmer, toolsmith, software developer & digital ghost. The go to person in securing your technologies.";

const speed = 70;

let i = 0;

function typeWriter() {
    if (i < text.length){
        document.querySelector(".main h2").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();
