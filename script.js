const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// unicode 0061-007A

//checks if input box is empty
function empty() {
    if (textInput.value.length <= 0) {
        const emptyInput = "Please input a value"
        alert(emptyInput)
    }
}

//converts input value to lowercase letters
function lowercase() {
    const lowercase = textInput.value.toLowerCase();
    console.log(lowercase)
}

//turn input into an array by character
function inputArray(...lowercase) {
    const originalArray = textInput.value
    console.log(lowercase);
}

//functions to run on button click
function palindromeCheck() {
    empty();
    lowercase();
    inputArray()
}