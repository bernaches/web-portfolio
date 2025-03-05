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

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all carousels
  const carousels = document.querySelectorAll(".project-screenshot");

  carousels.forEach((carousel) => {
    let imageIndex = 0;
    const images = carousel.querySelectorAll(".screenshot-img .img");
    const pageCounter = carousel.querySelector(".page");
    const totalImages = images.length;

    function updateCarousel(n) {
      if (n >= totalImages) {
        imageIndex = 0;
      } else if (n < 0) {
        imageIndex = totalImages - 1;
      } else {
        imageIndex = n;
      }

      // Hide all images and show only the current one
      images.forEach((img) => img.classList.remove("show"));
      images[imageIndex].classList.add("show");

      // Update the page counter
      pageCounter.textContent = `${imageIndex + 1} / ${totalImages}`;
    }

    // Initialize this carousel
    updateCarousel(imageIndex);

    // Add event listeners for buttons
    const backButton = carousel.querySelector(".button.back");
    const nextButton = carousel.querySelector(".button.next");

    backButton.addEventListener("click", () => updateCarousel(imageIndex - 1));
    nextButton.addEventListener("click", () => updateCarousel(imageIndex + 1));
  });
});
