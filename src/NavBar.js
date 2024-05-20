// Mobile navigation

const menu = document.querySelector(".menu");

let menuState = "menu";

menu.addEventListener("click", () => {
  nav = document.querySelector(".nav_mobile");

  if (menuState === "menu") {
    menu.src = "./assets/shared/mobile/icon-close.svg";
    menuState = "close";
    nav.classList.add("visible");
    nav.classList.remove("max-md:-translate-y-80");
    nav.classList.add("h-screen");
  } else {
    menu.src = "./assets/shared/mobile/icon-hamburger.svg";
    menuState = "menu";
    nav.classList.remove("visible");
    nav.classList.add("max-md:-translate-y-80");
    nav.classList.remove("h-screen");
  }
});
