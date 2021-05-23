let currentSlide = 0;
let sliderInterval;

let slides = document.getElementsByClassName('slides')[0];
let slide = document.querySelectorAll(".slide");

function slideShow() {
    currentSlide++;
    if (currentSlide >= slide.length) {
        slides.style.transform = `translateX(${0}px)`;
        currentSlide = 0;
    } else {
        slides.style.transform = `translateX(${-currentSlide * 500}px)`;
    }
}

function prevSlide() {
    if (currentSlide === 0) {
        return
    }
    currentSlide = currentSlide - 2;
    clearInterval(sliderInterval);
    slideShow();
    sliderInterval = setInterval(() => {
        slideShow();
    }, 3000);
}

function nextSlide() {
    if (currentSlide === slide.length) {
        return
    }
    clearInterval(sliderInterval);
    slideShow();
    sliderInterval = setInterval(() => {
        slideShow();
    }, 3000);
}


window.addEventListener("DOMContentLoaded", function () {
    sliderInterval = setInterval(() => {
        slideShow();
    }, 3000);
});

