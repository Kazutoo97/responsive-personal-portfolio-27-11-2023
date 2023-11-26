const body = document.querySelector("body");
const menu = document.querySelector(".nav__menu");
const toggleDark = document.querySelector(".toggle__dark i");
const toggleMenu = document.querySelector(".toggle__menu i");

toggleMenu.addEventListener("click", () => {
  toggleMenu.classList.toggle("bx-x");
  menu.classList.toggle("active");
});

toggleDark.addEventListener("click", () => {
  toggleDark.classList.toggle("bx-sun");
  body.classList.toggle("dark");
});
