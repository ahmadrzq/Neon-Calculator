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

