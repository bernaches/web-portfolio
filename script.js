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

// const images = document.querySelectorAll(".screenshot-img .img");
// let currentIndex = 0;

// var next = document.querySelector(".button.next");
// var prev = document.querySelector(".button.back");
// var imgSrc = document.querySelectorAll(".img");
// var pageNum = document.querySelector(".page");
// next.addEventListener("click", showNextImage);
// prev.addEventListener("click", showPreviousImage);

// pageNum.textContent = `${currentIndex + 1} / ${imgSrc.length - 1}`;
// console.log(`index outside: ${currentIndex}`);
// function showNextImage() {
//   // Remove the "show" class from the current image
//   images[currentIndex].classList.remove("show");
//   console.log(`current index: ${currentIndex}`);

//   // Increment the index to move to the next image
//   currentIndex = (currentIndex + 1) % images.length;
//   console.log(`next index: ${currentIndex}`);

//   // Add the "show" class to the next image
//   images[currentIndex].classList.add("show");
//   console.log(`next img called ${currentIndex}`);

//   // Update page count in DOM
//   pageNum.textContent = `${currentIndex + 1} / ${imgSrc.length - 1}`;
//   console.log(`final index: ${currentIndex + 1}`);
// }
// function showPreviousImage() {
//   images[currentIndex].classList.remove("show");
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   // pageNum.textContent = `${currentIndex + 1} / ${imgSrc.length - 1}`;
//   images[currentIndex].classList.add("show");
//   console.log(`back img called`);
// }

// Select all elements with the class 'project-content'
// const projectContents = document.querySelectorAll(".project-content");

// // Loop through each 'project-content' element
// projectContents.forEach((projectContent, index) => {
//   // Add a click event listener to each 'project-content'
//   projectContent.addEventListener("click", () => {
//     // Log which 'project-content' was clicked
//     console.log(`Clicked on project-content ${index + 1}`);

//     // You can also access specific elements within the clicked 'project-content'
//     const headingTitle =
//       projectContent.querySelector(".heading-title").textContent;
//     console.log(`Project Title: ${headingTitle}`);

//     const prev = projectContent.querySelectorAll(".button.back");
//     const next = projectContent.querySelectorAll(".button.next");
//     prev.forEach((p) => {
//       p.addEventListener("click", () => {
//         console.log(`${p}`);
//       });
//     });
//     next.forEach((n) => {
//       n.addEventListener("click", () => {
//         console.log(`You clicked next`);
//       });
//     });

//     // console.log(`button: ${buttons}`);
//   });
// });

let imageIndex = 0;
showImage(imageIndex);

function plusImage(n) {
  showImage((imageIndex += n));
}
function currentImage(n) {
  showIage((imageIndex = n));
}

function showImage(n) {
  console.log(`current: ${imageIndex}`);
  var i;
  var images = document.querySelectorAll(".screenshot-img .img");

  if (n >= images.length) {
    imageIndex = 0;
    console.log(`new: ${imageIndex}`);
  }

  images[imageIndex].classList.add("show");
}
