const hamburger = document.querySelector(".hamburger-icons");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  const hamIcon = document.querySelector(".hams");
  const crossIcon = document.querySelector(".cross");

  menu.classList.toggle("show-menu");

  if (menu.classList.contains("show-menu")) {
    hamIcon.style.display = "none";
    crossIcon.style.display = "inline";
  } else {
    hamIcon.style.display = "inline";
    crossIcon.style.display = "none";
  }
});
