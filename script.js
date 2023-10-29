const navToggleEl = document.getElementsByClassName("toggle-nav");
const navEl = document.getElementById("nav");
navToggleEl[0].addEventListener("click", toggleNav);
navToggleEl[1].addEventListener("click", toggleNav);

function toggleNav() {
  navEl.classList.toggle("hide-nav");
}
