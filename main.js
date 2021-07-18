let currentSlide = 0;
let sliderInterval;

let slides = document.getElementsByClassName("slides")[0];
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
    return;
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
    return;
  }
  clearInterval(sliderInterval);
  slideShow();
  sliderInterval = setInterval(() => {
    slideShow();
  }, 3000);
}

window.addEventListener("DOMContentLoaded", function() {
  const img1 = "./assests/bg-1.jpg";
  const img2 = "./assests/bg-2.jpg";
  const img3 = "./assests/bg-3.jpg";
  const images = [img1, img2, img3];
  console.log("count");

  renderCarousel(images, true, 3000);
});

function renderCarousel(
  images,
  isAutoplay,
  autopayDuration,
  height,
  width,
  isManualButton
) {
  images.forEach(img => {
    const d = document.createElement("div");
    d.classList.add("slide");
    const imgTag = document.createElement("img");
    imgTag.setAttribute("src", img);
    d.appendChild(imgTag);
    slides.appendChild(d);
  });

  if (isAutoplay) {
    document.getElementsByClassName("slide")[0].classList.add("active");
    slides = document.getElementsByClassName("slides")[0];
    slide = document.querySelectorAll(".slide");
    sliderInterval = setInterval(() => {
      slideShow();
    }, autopayDuration);
  }
}
