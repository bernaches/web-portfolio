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

document.addEventListener("DOMContentLoaded", function () {
  const array = [1, 2, 3, 4];
  var next = document.getElementById("next");
  var back = document.getElementById("back");
  var image = document.getElementById("img");
  var pageNum = document.getElementById("page");
  var currentIndex = 0;

  pageNum.textContent = `${currentIndex + 1} / ${array.length}`;
  next.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % array.length;
    image.src = `img/project1-img-${array[currentIndex]}.png`;
    console.log(currentIndex);
    pageNum.textContent = `${currentIndex + 1} / ${array.length}`;
  });

  back.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + array.length) % array.length;
    image.src = `img/project1-img-${array[currentIndex]}.png`;
    console.log(currentIndex);
    pageNum.textContent = `${currentIndex + 1} / ${array.length}`;
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   var currentIndex = 0;
//   var arr = [1, 2, 3, 4];
//   var image = document.querySelector(".screenshot-img img");
//   var pageNum = document.querySelector(".img-buttons p");
//   const backButton = document.querySelector("a.button#back");
//   const nextButton = document.querySelector("a.button#next");
//   pageNum.textContent = `${currentIndex + 1} / ${arr.length}`;

//   nextButton.addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % arr.length;
//     image.src = `img/project1-img-${arr[currentIndex]}.png`;
//     console.log(currentIndex);
//     pageNum.textContent = `${currentIndex + 1} / ${arr.length}`;
//   });
//   // backButton.addEventListener("click", function () {});
//   // console.log(image);
// });
