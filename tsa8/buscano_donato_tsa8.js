document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const gapInput = document.getElementById("gap");
  const buttons = document.querySelectorAll(".btn");
  const boxInputs = document.querySelectorAll(".seventh input");

  // Function to reset flexbox properties
  const resetFlexbox = () => {
    container.style.gap = "0px";
    container.style.flexDirection = "row";
    container.style.justifyContent = "flex-start";
    container.style.alignItems = "stretch";
    container.querySelectorAll(".card").forEach(card => card.style.flexGrow = "0");
    gapInput.value = 0;
    boxInputs.forEach(input => input.value = 0);
  };

  // Change gap
  gapInput.addEventListener("input", () => {
    container.style.gap = `${gapInput.value}px`;
  });

  // Event delegation for buttons
  document.querySelector(".controls").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn")) {
      const action = event.target.textContent.toLowerCase();
      switch (action) {
        case "reset flexbox":
          resetFlexbox();
          break;
        case "row":
        case "column":
          container.style.flexDirection = action;
          break;
        case "start":
        case "center":
        case "end":
        case "space between":
        case "space around":
        case "space evenly":
          container.style.justifyContent = action.replace(" ", "-");
          break;
        case "start":
        case "center":
        case "end":
          container.style.alignItems = action;
          break;
        case "reset":
          container.querySelectorAll(".card").forEach(card => card.style.flexGrow = "0");
          boxInputs.forEach(input => input.value = 0);
          break;
        case "grow all":
          container.querySelectorAll(".card").forEach(card => card.style.flexGrow = "1");
          boxInputs.forEach(input => input.value = 1);
          break;
        default:
          break;
      }
    }
  });

  // Change flex grow for individual boxes
  boxInputs.forEach((input, index) => {
    input.addEventListener("input", () => {
      container.querySelectorAll(".card")[index].style.flexGrow = input.value;
    });
  });
});