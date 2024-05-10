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

accordionBody.forEach((body, index) => {
  let activeCard = null;
  const cards = body.querySelectorAll(".plan_card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.add("bg-primary");
      card.classList.add("text-neutral1");
      card.classList.remove("hover:bg-info");

      if (index === 0) {
        const habit = document.querySelector(".habit");
        habit.innerText = card.querySelector("h4").textContent;
      }

      if (index === 1) {
        const type = document.querySelector(".type");
        type.innerText = card.querySelector("h4").textContent;
      }

      if (index === 2) {
        const quantity = document.querySelector(".quantity");
        quantity.innerText = card.querySelector("h4").textContent;
      }

      if (index === 3) {
        const grind = document.querySelector(".grind");
        grind.innerText = card.querySelector("h4").textContent;
      }

      if (index === 4) {
        const delivery = document.querySelector(".delivery");
        delivery.innerText = card.querySelector("h4").textContent;
      }

      if (activeCard && activeCard !== card) {
        activeCard.classList.remove("bg-primary");
        activeCard.classList.remove("text-neutral1");
        activeCard.classList.add("hover:bg-info");
      }

      activeCard = card;
    });
  });
});
