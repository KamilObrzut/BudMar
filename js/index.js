//Header

const translate = document.querySelectorAll(".translate");
const translateRight = document.querySelectorAll(".translateRight");
const translateLeft = document.querySelectorAll(".translateLeft");
const menuIcon = document.querySelector(".menu-icon")
const expandMenu = document.querySelector(".expand-menu")
const carousel = document.querySelector('.carousel');

window.addEventListener('scroll', () => {
    let scroll = window.pageYOffset;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    })
    translateRight.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateX(${scroll * speed}px)`;
    })
    translateLeft.forEach(element => {
        let speed = element.dataset.speed;
        speed = -speed
        element.style.transform = `translateX(${scroll * speed}px)`;
    })
})

const funcExpandMenu = () => {
    expandMenu.classList.toggle("hidden")
}

menuIcon.addEventListener('click', funcExpandMenu)

//Carousel

const slides = document.querySelectorAll('.carousel-one-slide');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides[currentSlide].style.opacity = 0;
    slides[currentSlide].style.display = 'none';

    currentSlide = (slideIndex + slides.length) % slides.length;

    slides[currentSlide].style.display = 'block';
    slides[currentSlide].style.opacity = 1;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

showSlide(currentSlide);

//Back to Home Page

const btnBackHome = document.querySelector(".btn-back-home")

const backHome = () => {
    window.location.href = "https://kamilobrzut.github.io/BudMar/index.html"
}

btnBackHome.addEventListener('click', backHome)