// Selecting all elements that have class "button" and the element with id "layerNumber"
const button = document.querySelectorAll(".button");
const layer = document.querySelector("#layerNumber");

// When the window loads, set the content of the element with id "layerNumber" to "0"
window.addEventListener("load", () => {
  layer.innerHTML = "0";
});

// For each button element, add a click event listener
for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    // Log the button that was clicked to the console
    console.log(`Klik button : ${button[i].innerHTML}`);
    // Call the deleteZero function to remove leading zeros
    deleteZero();
    // Add the button's content to the end of the layer element's content
    layer.innerHTML += button[i].innerHTML;
  });
}

// Function to remove leading zeros from the layer element's content
function deleteZero() {
  if (layer.innerHTML.charAt(0) === "0") {
    layer.innerHTML = layer.innerHTML.substring(1);
  }
}

// Selecting the "clear" button and adding a click event listener
const btnClear = document.querySelector("#clear");
const history = document.querySelector(".history");
btnClear.addEventListener("click", () => {
  // Log that the "clear" button was clicked to the console
  console.log("Button clear clicked");
  // Set the content of the layer element to "0"
  layer.innerHTML = 0;
  history.textContent = null;
});

// Get a reference to the "delete" button using its ID
const btnDelete = document.querySelector("#delete");
// Add a "click" event listener to the "delete" button
btnDelete.addEventListener("click", function () {
  // Log a message to the console to indicate that the button has been clicked
  console.log("Button delete clicked and delete 1 char");
  // Get the current text content of the "layer" element
  const content = layer.textContent;
  // If the content is not "0", remove the last character from the text content
  // and set it as the new text content of the "layer" element.
  // If the content is "0", set "0" as the new text content of the "layer" element.
  if (content !== "0") {
    layer.textContent = content.slice(0, -1) || "0";
  }
});

// Selecting the "total" button and adding a click event listener to calculate the operation
const total = document.querySelector("#total");
total.addEventListener("click", () => {
  if (
    layer.textContent !== "0" &&
    layer.textContent[layer.textContent.length - 1] !== "(" &&
    checkParentheses(layer.textContent) === true
  ) {
    let allInputs = layer.textContent;
    history.textContent = `${allInputs} =`;
    layer.textContent = eval(allInputs);
    console.log(eval(allInputs));
  }
});

// Select the buttons for opening and closing parentheses
const btnParenthesisOpen = document.querySelector("#parenthesisOpen");
const btnParenthesisClose = document.querySelector("#parenthesisClose");

// Add a click event listener to the opening parenthesis button
btnParenthesisOpen.addEventListener("click", () => {
  // Get the content of a layer element
  const layerContent = layer.textContent;
  // Check if the content is not empty
  if (layerContent.length > 0) {
    // Get the last character of the content
    const lastChar = layerContent.slice(-1);
    // Check if the last character is a number or a closing parenthesis
    if (!isNaN(lastChar) || lastChar === ")") {
      // If it is, delete leading zeros and add a multiplication operator before the opening parenthesis
      deleteZero();
      layer.textContent += "*";
      if (layer.textContent[0] === "*") {
        layer.textContent = layer.textContent.slice(1);
      }
    }
  }
  // Append an opening parenthesis to the content
  layer.textContent += "(";
});

// Add a click event listener to the closing parenthesis button
btnParenthesisClose.addEventListener("click", () => {
  // Append a closing parenthesis to the content
  layer.textContent += ")";
});

