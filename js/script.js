const translate = document.querySelectorAll(".translate");
const translateRight = document.querySelectorAll(".translateRight");
const translateLeft = document.querySelectorAll(".translateLeft");

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