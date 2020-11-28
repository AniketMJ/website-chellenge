const hamburger = document.querySelector(".MainHeader-hamburger");
const nav = document.querySelector(".MainHeader-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("navActive");
});
