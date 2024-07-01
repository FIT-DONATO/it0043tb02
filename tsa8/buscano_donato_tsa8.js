function resetFlexbox() {
    const container = document.getElementById("container");
    container.style.gap = "0px";
    container.style.flexDirection = "row";
    container.style.justifyContent = "flex-start";
    container.style.alignItems = "stretch";
  
    document.getElementById("gap").value = 0;
    document.getElementById("box1").value = 0;
    document.getElementById("box2").value = 0;
    document.getElementById("box3").value = 0;
    
    document.getElementById("card1").style.flexGrow = "0";
    document.getElementById("card2").style.flexGrow = "0";
    document.getElementById("card3").style.flexGrow = "0";
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
    document.getElementById("card1").style.flexGrow = "0";
    document.getElementById("card2").style.flexGrow = "0";
    document.getElementById("card3").style.flexGrow = "0";
    
    document.getElementById("box1").value = 0;
    document.getElementById("box2").value = 0;
    document.getElementById("box3").value = 0;
  }
  
  function growAllCards() {
    document.getElementById("card1").style.flexGrow = "1";
    document.getElementById("card2").style.flexGrow = "1";
    document.getElementById("card3").style.flexGrow = "1";
  
    document.getElementById("box1").value = 1;
    document.getElementById("box2").value = 1;
    document.getElementById("box3").value = 1;
  }
  
  function changeBoxGrow(index) {
    const boxValue = document.getElementById(`box${index + 1}`).value;
    document.getElementById(`card${index + 1}`).style.flexGrow = boxValue;
  }
  
