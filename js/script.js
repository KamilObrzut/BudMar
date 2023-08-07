
//const SCENE_ELEMENT_ID = "scene";

//const sceneElement = document.getElementById(SCENE_ELEMENT_ID);
//const parallaxInstance = new Parallax(sceneElement);


const translate = document.querySelectorAll(".translate");
const translateRight = document.querySelectorAll(".translateRight");
const translateLeft = document.querySelectorAll(".translateLeft");
const translateBorderOne = document.querySelectorAll(".translateBorderOne");
const translateBorderTwo = document.querySelectorAll(".translateBorderTwo");
const translateBorderThree = document.querySelectorAll(".translateBorderThree");

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
    translateBorderOne.forEach(element => {
        let speed = element.dataset.speed;
        element.style.width = `${scroll * speed + 50}px`;
    })
    translateBorderTwo.forEach(element => {
        let speed = element.dataset.speed;
        element.style.width = `${scroll * speed + 60}px`;
    })
    translateBorderThree.forEach(element => {
        let speed = element.dataset.speed;
        element.style.width = `${scroll * speed}px`;
    })
})