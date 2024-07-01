function resetFlexbox() {
    const container = document.getElementById("container");
    container.style.gap = "0px";
    container.style.flexDirection = "row";
    container.style.justifyContent = "flex-start";
    container.style.alignItems = "stretch";
    container.querySelectorAll(".card").forEach(card => card.style.flexGrow = "0");
  
    document.getElementById("gap").value = 0;
    document.getElementById("box1").value = 0;
    document.getElementById("box2").value = 0;
    document.getElementById("box3").value = 0;
  }
  
  function changeGap() {
    const gapValue = document.getElementById("gap").value;
    document.getElementById("container").style.gap = `${gapValue}px`;
  }
  
  function changeFlexDirection(direction) {
    document.getElementById("container").style.flexDirection = direction;
  }
  
  function changeJustifyContent(justifyContent) {
    document.getElementById("container").style.justifyContent = justifyContent.replace(" ", "-");
  }
  
  function changeAlignItems(alignItems) {
    document.getElementById("container").style.alignItems = alignItems;
  }
  
  function resetFlexGrow() {
    const container = document.getElementById("container");
    container.querySelectorAll(".card").forEach(card => card.style.flexGrow = "0");
  
    document.getElementById("box1").value = 0;
    document.getElementById("box2").value = 0;
    document.getElementById("box3").value = 0;
  }
  
  function growAllCards() {
    const container = document.getElementById("container");
    container.querySelectorAll(".card").forEach(card => card.style.flexGrow = "1");
  
    document.getElementById("box1").value = 1;
    document.getElementById("box2").value = 1;
    document.getElementById("box3").value = 1;
  }
  
  function changeBoxGrow(index) {
    const boxValue = document.getElementById(`box${index + 1}`).value;
    document.querySelectorAll(".card")[index].style.flexGrow = boxValue;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("controls").addEventListener("click", (event) => {
      if (event.target.classList.contains("btn")) {
        const action = event.target.textContent.toLowerCase();
        switch (action) {
          case "reset flexbox":
            resetFlexbox();
            break;
          case "row":
          case "column":
            changeFlexDirection(action);
            break;
          case "start":
          case "center":
          case "end":
          case "space between":
          case "space around":
          case "space evenly":
            changeJustifyContent(action);
            break;
          case "align-start":
          case "align-center":
          case "align-end":
            changeAlignItems(action.split("-")[1]);
            break;
          case "reset":
            resetFlexGrow();
            break;
          case "grow all":
            growAllCards();
            break;
          default:
            break;
        }
      }
    });
  
    document.getElementById("box1").addEventListener("input", () => changeBoxGrow(0));
    document.getElementById("box2").addEventListener("input", () => changeBoxGrow(1));
    document.getElementById("box3").addEventListener("input", () => changeBoxGrow(2));
  });
  
