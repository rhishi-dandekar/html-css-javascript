let btnTranslate = document.querySelector("#btnclass");
let textInput = document.querySelector("#input-box");
let outputDiv = document.querySelector("#textOutput");

outputDiv.innerText = "Chocolate Banana!"

function clickHandler() {
    console.log("Clicked");
    console.log("input: ", textInput.value);
};

btnTranslate.addEventListener("click", clickHandler);
