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
