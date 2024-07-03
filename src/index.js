function changeColor() {
  const colorChange = document.querySelector("#button");
  colorChange.style.background = "blue"; // Example: change text color to blue
}

function hoverColor() {
  const hoverChange = document.querySelector("#button2");
  hoverChange.style.background = "grey"; // Example: change text color to blue
  hoverChange.innerHTML = "Grey I am";
}

function redColor() {
  const redChange = document.querySelector("#button1");
  redChange.style.background = "red"; // Example: change text color to blue
}
// const button = document.querySelector("#button");
// button.addEventListener("click", changeColor);

const button1 = document.querySelector("#button1");
button1.addEventListener("mouseout", redColor);

const button2 = document.querySelector("#button2");
button2.addEventListener("mouseover", hoverColor);

// shop.html
// function addToCart() {
//   // let additem = document.querySelector(".program1");
//   let inputResponse = prompt("Add C programming to your order? Y/ N");
//   if (inputResponse == "Y") {
//     let prog = document.querySelector(".buy-me");
//     prog.innerHTML = "Bought";
//   }
// }
// const program1 = document.querySelector(".buy-me");
// program1.addEventListener("click", addToCart);
