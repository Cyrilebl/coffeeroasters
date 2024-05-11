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
    nav.classList.add("h-screen");
  } else {
    menu.src = "./assets/shared/mobile/icon-hamburger.svg";
    menuState = "menu";
    nav.classList.add("opacity-0");
    nav.classList.add("-translate-y-32");
    nav.classList.remove("h-screen");
  }
});

// Accordion

const accordionHeaders = document.querySelectorAll(".accordion_header");
const accordionSteps = document.querySelectorAll(".accordion_steps");

let activeHeader = null;

accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    const isActive = header.classList.contains("active");
    const accordionBody = header.nextElementSibling;

    accordionSteps.forEach((step) => {
      step.classList.remove("text-secondary");
      step
        .querySelector("span")
        .classList.remove("text-primary/40", "text-primary");
    });

    if (activeHeader) {
      activeHeader.classList.remove("active");
      activeHeader.querySelector("h2").classList.remove("active");
      activeHeader.nextElementSibling.classList.remove("active");
    }

    if (!isActive) {
      const activeStep = accordionSteps[index];
      activeStep.querySelector("span").classList.add("text-primary");
      activeStep.classList.add("text-secondary");

      header.classList.add("active");
      setTimeout(() => {
        header.querySelector("h2").classList.add("active");
        accordionBody.classList.add("active");
      }, "150");
    }

    activeHeader = isActive ? null : header;
  });
});

accordionSteps.forEach((selected, index) => {
  selected.addEventListener("click", () => {
    setTimeout(() => {
      accordionHeaders[index].click();
    }, "100");
    accordionHeaders[index - 1].scrollIntoView({ behavior: "smooth" });

    accordionSteps.forEach((step) => {
      step.classList.remove("text-secondary");
      step
        .querySelector("span")
        .classList.remove("text-primary/40", "text-primary");
    });

    selected.classList.add("text-secondary");
    selected.querySelector("span").classList.add("text-primary");
  });
});

const accordionBody = document.querySelectorAll(".accordion_body");
let allFilled = false;

accordionBody.forEach((body, index) => {
  let activeCard = null;
  const cards = body.querySelectorAll(".plan_card");

  const elementClasses = [
    ".habit",
    ".type",
    ".quantity",
    ".grind",
    ".delivery",
  ];

  elementClasses.forEach((className, idx) => {
    const element = document.querySelector(className);
    if (element) {
      cards.forEach((card) => {
        card.addEventListener("click", () => {
          card.classList.add("bg-primary");
          card.classList.add("text-neutral1");
          card.classList.remove("hover:bg-info");

          const content = card.querySelector("h4").textContent;
          if (index === idx) {
            element.innerText = content;
          }

          if (activeCard && activeCard !== card) {
            activeCard.classList.remove("bg-primary");
            activeCard.classList.remove("text-neutral1");
            activeCard.classList.add("hover:bg-info");
          }

          activeCard = card;

          const filledElements = document.querySelectorAll(
            ".habit, .type, .quantity, .grind, .delivery",
          );
          allFilled = Array.from(filledElements).every(
            (elem) => elem.innerText.trim() !== "_____",
          );

          const btn = document.querySelector(".plan");

          if (allFilled) {
            btn.classList.remove("inactive-btn");
            btn.classList.add("btn");
          }

          btn.addEventListener("click", () => {
            const modul = document.querySelector(".module");
            modul.classList.remove("hidden");
            modul.classList.add("flex");
          });
        });
      });
    }
  });
});
