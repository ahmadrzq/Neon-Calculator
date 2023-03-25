// Selecting all elements that have class "button" and the element with id "layerNumber"
const button = document.querySelectorAll(".button");
const layer = document.querySelector("#layerNumber");

// When the window loads, set the content of the element with id "layerNumber" to "0"
window.addEventListener("load", () => {
  layer.innerHTML = "0";
});

