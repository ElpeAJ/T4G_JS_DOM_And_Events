function addToCart() {
  // let additem = document.querySelector(".program1");
  let inputResponse = prompt("Add C programming to your order? Y/ N");
  if (inputResponse == "Y") {
    let prog = document.querySelector(".program1");
    prog.innerHTML = "Bought";
    prog.style.background = "grey";
    let cartitem = document.querySelector(".one");
    cartitem.textContent = "C programming";
  }
}

function addToCart2() {
  // let additem = document.querySelector(".program1");
  let inputResponse = prompt("Add C++ programming to your order? Y/ N");
  if (inputResponse == "Y") {
    let prog = document.querySelector(".program2");
    prog.innerHTML = "Bought";
    prog.style.background = "grey";
    let cartitem2 = document.querySelector(".two");
    cartitem2.textContent = "C++ programming";

  }
}
const program1 = document.querySelector(".program1");
program1.addEventListener("click", addToCart);

const program2 = document.querySelector(".program2");
program2.addEventListener("click", addToCart2);
