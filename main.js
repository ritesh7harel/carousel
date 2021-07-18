"use strict";
var carousel = null;

window.addEventListener("DOMContentLoaded", function() {
  const img1 = "./assests/bg-1.jpg";
  const img2 = "./assests/bg-2.jpg";
  const img3 = "./assests/bg-3.jpg";
  const images = [img1, img2, img3];

  const c = new renderCarousel();
  c.init(images, true, 3000);
  c.start();
});

function renderCarousel() {
  this.images = [];
  this.isAutoplay = false;
  this.autopayDuration = 3000;
  this.height = 500;
  this.width = 500;
  this.currentSlide = 0;
  this.sliderInterval = null;
  this.slides = document.getElementsByClassName("slides")[0];
  this.slideLength = 0;

  this.init = function(images, isAutoplay, autopayDuration, height, width) {
    this.images = images;
    this.isAutoplay = isAutoplay;
    this.autopayDuration = autopayDuration;
    this.height = 500;
    this.width = 500;
    carousel = this;
    this.images.forEach(img => {
      const d = document.createElement("div");
      d.classList.add("slide");
      const imgTag = document.createElement("img");
      imgTag.setAttribute("src", img);
      d.appendChild(imgTag);
      this.slides.appendChild(d);
    });
  };

  this.slideShow = function() {
    this.currentSlide++;
    if (this.currentSlide >= this.slideLength) {
      this.slides.style.transform = `translateX(${0}px)`;
      this.currentSlide = 0;
    } else {
      this.slides.style.transform = `translateX(${-this.currentSlide * 500}px)`;
    }
  };

  this.prevSlide = function() {
    if (this.currentSlide === 0) {
      return;
    }
    this.currentSlide = this.currentSlide - 2;
    clearInterval(this.sliderInterval);
    this.slideShow();
    this.play();
  };

  this.nextSlide = function() {
    if (this.currentSlide === this.slideLength) {
      return;
    }
    clearInterval(this.sliderInterval);
    this.slideShow();
    this.play();
  };

  this.start = function() {
    if (this.isAutoplay) {
      document.getElementsByClassName("slide")[0].classList.add("active");
      this.slideLength = document.querySelectorAll(".slide").length;
      this.play();
    }
  };

  this.play = function() {
    this.sliderInterval = setInterval(() => {
      this.slideShow();
    }, this.autopayDuration);
  };
}
