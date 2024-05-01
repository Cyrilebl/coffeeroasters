// Menu navigation

const menu = document.querySelector(".menu");

let menuState = "menu";

menu.addEventListener("click", () => {
  nav = document.querySelector(".nav_mobile");

  if (menuState === "menu") {
    menu.src = "./assets/shared/mobile/icon-close.svg";
    menuState = "close";
    nav.classList.remove("opacity-0");
    nav.classList.remove("-translate-y-32");
  } else {
    menu.src = "./assets/shared/mobile/icon-hamburger.svg";
    menuState = "menu";
    nav.classList.add("opacity-0");
    nav.classList.add("-translate-y-32");
  }
});
