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

const accordionHeader = document.querySelectorAll(".accordion_header");
const steps = document.querySelectorAll(".accordion_steps");

let activeHeader = null;

accordionHeader.forEach((header) => {
  header.addEventListener("click", () => {
    const isActive = header.classList.contains("active");
    const accordionBody = header.nextElementSibling;

    if (activeHeader && activeHeader !== header) {
      activeHeader.classList.remove("active");
      const activeH2 = activeHeader.querySelector("h2");
      if (activeH2) {
        activeH2.classList.remove("text-secondary");
        activeH2.classList.add("text-neutral2");
      }
      activeHeader.nextElementSibling.style.maxHeight = 0;
    }

    header.classList.toggle("active");

    const h2Element = header.querySelector("h2");
    if (h2Element) {
      if (header.classList.contains("active")) {
        h2Element.classList.remove("text-neutral2");
        h2Element.classList.add("text-secondary");
      } else {
        h2Element.classList.remove("text-secondary");
        h2Element.classList.add("text-neutral2");
      }
    }

    accordionBody.style.maxHeight = isActive
      ? 0
      : accordionBody.scrollHeight + "px";

    activeHeader = isActive ? null : header;
  });
});

//   const choice = question.querySelector(".inactive");
//   choice.classList.remove("inactive");
//   choice.classList.add("active");
//   question.querySelector("h2").classList.add("text-secondary");

//   steps.forEach((step, stepIndex) => {
//     if (index !== stepIndex) {
//       step.classList.remove("text-secondary");
//       step
//         .querySelector("span")
//         .classList.remove("text-primary/40", "text-primary");
//     } else {
//       step.classList.add("text-secondary");
//       step
//         .querySelector("span")
//         .classList.remove("text-primary/40", "text-primary");
//       step.querySelector("span").classList.add("text-primary");
//     }
//   });
// });

steps.forEach((selected, index) => {
  selected.addEventListener("click", () => {
    steps.forEach((step) => {
      accordion[index].click();
      step.classList.remove("text-secondary");
      step
        .querySelector("span")
        .classList.remove("text-primary/40", "text-primary");
    });
    selected.classList.add("text-secondary");
    selected.querySelector("span").classList.add("text-primary");
    const associatedAccordionSection = document.querySelector(
      `.accordion_question(${index})`,
    );
    if (associatedAccordionSection) {
      associatedAccordionSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
