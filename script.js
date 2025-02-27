"use strict";
const faviconTag = document.getElementById("favicon-logo");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");
const changeFavicon = () => {
  if (isDark.matches) {
    faviconTag.href = "img/light-logo.svg";
  } else {
    faviconTag.href = "img/dark-logo.svg";
  }
};
changeFavicon();

const images = document.querySelectorAll(".screenshot-img .img");
let currentIndex = 0;

var next = document.querySelector(".button.next");
var prev = document.querySelector(".button.back");
var imgSrc = document.querySelectorAll(".img");
var pageNum = document.querySelector(".page");
next.addEventListener("click", showNextImage);
prev.addEventListener("click", showPreviousImage);

pageNum.textContent = `${currentIndex + 1} / ${imgSrc.length - 1}`;
function showNextImage() {
  // Remove the "show" class from the current image
  images[currentIndex].classList.remove("show");

  // Increment the index to move to the next image
  currentIndex = (currentIndex + 1) % images.length;
  // Update page count in DOM
  pageNum.textContent = `${currentIndex + 1} / ${imgSrc.length - 1}`;

  // Add the "show" class to the next image
  images[currentIndex].classList.add("show");
}
function showPreviousImage() {
  images[currentIndex].classList.remove("show");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  pageNum.textContent = `${currentIndex + 1} / ${imgSrc.length - 1}`;
  images[currentIndex].classList.add("show");
}
// document.addEventListener("DOMContentLoaded", initializeImageSlider);
// function initializeImageSlider(projectContent) {
//   const images = projectContent.querySelectorAll(".screenshot-img .img");
//   const nextButton = projectContent.querySelector(".button.next");
//   const prevButton = projectContent.querySelector(".button.back");
//   const pageNum = projectContent.querySelector(".page");
//   let currentIndex = 0;

//   pageNum.textContent = `${currentIndex + 1} / ${images.length}`;

//   function showNextImage() {
//     images[currentIndex].classList.remove("show");
//     currentIndex = (currentIndex + 1) % images.length;
//     pageNum.textContent = `${currentIndex + 1} / ${images.length}`;
//     images[currentIndex].classList.add("show");
//   }

//   function showPreviousImage() {
//     images[currentIndex].classList.remove("show");
//     currentIndex = (currentIndex - 1 + images.length) % images.length;
//     pageNum.textContent = `${currentIndex + 1} / ${images.length}`;
//     images[currentIndex].classList.add("show");
//   }

//   nextButton.addEventListener("click", showNextImage);
//   prevButton.addEventListener("click", showPreviousImage);
// }

// // Initialize the image slider for each project content div
// document.querySelectorAll(".project-content").forEach(initializeImageSlider);
