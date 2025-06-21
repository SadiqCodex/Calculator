// ...existing code...

// Luxurious animated heading add karo
const heading = document.createElement("div");
heading.className = "calc-heading";
heading.textContent = "Calculator";

// Calculator elements
const calculator = document.createElement("div");
const screen = document.createElement("input");
const container = document.createElement("div");

calculator.classList.add("calcu-lator");
container.classList.add("btn-container");
screen.classList.add("input-screen");
screen.placeholder = "Enter a valid expression to execute";
screen.type = "text";
screen.readOnly = true;

// Buttons
let btn = [
  "7",
  "8",
  "9",
  "C",
  "4",
  "5",
  "6",
  "+",
  "1",
  "2",
  "3",
  "-",
  "0",
  "*",
  "/",
  "=",
];

btn.forEach((value) => {
  const buttons = document.createElement("button");
  buttons.classList.add("btns");
  // Special styling for C and = buttons
  if (value === "C") buttons.classList.add("special");
  if (value === "=") buttons.classList.add("equal");
  buttons.innerText = value;
  buttons.addEventListener("click", () => {
    if (value == "C") {
      screen.value = "";
    } else if (value == "=") {
      try {
        screen.value = eval(screen.value);
      } catch {
        screen.value = "Error";
      }
    } else {
      screen.value += value;
    }
  });
  container.appendChild(buttons);
});

// Add heading at the top
calculator.appendChild(heading);
calculator.appendChild(screen);
calculator.appendChild(container);
document.body.appendChild(calculator);

// ...existing
