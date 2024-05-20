// Accordion

const accordionHeaders = document.querySelectorAll(".accordion_header");
const accordionSteps = document.querySelectorAll(".accordion_steps");

// Open the accordion on title click and close the previous one.

let activeHeader = null;

accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    const isActive = header.classList.contains("active");
    const accordionBody = header.nextElementSibling;

    // Colors config
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

// Open the accordion by clicking on the left step indicators, and automatically navigate to each one

accordionSteps.forEach((selected, index) => {
  selected.addEventListener("click", () => {
    // Accordion config
    setTimeout(() => {
      accordionHeaders[index].click();
    }, "100");
    accordionHeaders[index - 1].scrollIntoView({ behavior: "smooth" });

    // Colors config
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

// Fill the summary based on the user's choices

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

            btn.addEventListener("click", () => {
              const checkout = document.querySelector(".module");
              checkout.classList.remove("hidden");
              checkout.classList.add("flex");

              document.querySelector("body").classList.add("body-bg");

              const moduleSummary = document.querySelector(".module_summary");
              const summary = document.querySelector(".summary").innerHTML;
              moduleSummary.innerHTML = summary;
            });
          }

          // Open the next accordion and close the current one
          if (index < accordionHeaders.length - 1) {
            accordionHeaders[index + 1].click();
          }
        });
      });
    }
  });
});

// If "Capsule" is selected, hide accordion 3 and update the order summary text

const accordion = document.querySelectorAll(".accordion");
const cards = document.querySelectorAll(".plan_card");

const capsuleText = document.querySelectorAll(".capsule");
const grindContent = document.querySelector(".grind");

cards[0].addEventListener("click", () => {
  accordion[3].classList.add("hidden");
  capsuleText[0].textContent = "using";
  capsuleText[1].classList.add("hidden");
  grindContent.textContent = "empty";
});

function showAccordion() {
  accordion[3].classList.remove("hidden");
  capsuleText[0].textContent = "as";
  capsuleText[1].classList.remove("hidden");
  grindContent.textContent = "_____";
}
cards[1].addEventListener("click", showAccordion);
cards[2].addEventListener("click", showAccordion);

// Adjust the price based on the user's selection

const weights = document.querySelectorAll(".weight");
const price = document.querySelectorAll(".price");

const priceData = {
  "250g": {
    "Every Week": "7.20",
    "Every 2 Weeks": "9.60",
    "Every Month": "12.00",
  },
  "500g": {
    "Every Week": "13.00",
    "Every 2 Weeks": "17.50",
    "Every Month": "22.00",
  },
  "1000g": {
    "Every Week": "22.00",
    "Every 2 Weeks": "32.00",
    "Every Month": "42.00",
  },
};

weights.forEach((weight) => {
  weight.addEventListener("click", () => {
    const selectedWeight = weight.getAttribute("data-weight");
    price[0].textContent = priceData[selectedWeight]["Every Week"];
    price[1].textContent = priceData[selectedWeight]["Every 2 Weeks"];
    price[2].textContent = priceData[selectedWeight]["Every Month"];
  });
});

// Display the total price based on the user's selection

const periods = document.querySelectorAll(".period");
const amounts = document.querySelectorAll(".amount");

function formatPrice(price) {
  return Number(price).toFixed(2);
}

periods.forEach((period, index) => {
  period.addEventListener("click", () => {
    amounts.forEach((amount) => {
      if (index === 0) {
        amount.textContent = formatPrice(price[0].textContent * 4);
      }
      if (index === 1) {
        amount.textContent = formatPrice(price[1].textContent * 2);
      }
      if (index === 2) {
        amount.textContent = price[2].textContent;
      }
    });
  });
});

// Restore default properties on module btn click

const moduleBtn = document.querySelectorAll(".module-btn");
moduleBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const checkout = document.querySelector(".module");
    checkout.classList.add("hidden");
    checkout.classList.remove("flex");

    document.querySelector("body").classList.remove("body-bg");
  });
});
