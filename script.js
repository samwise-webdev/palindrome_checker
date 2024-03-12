const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// unicode 0061-007A

//checks if input box is empty
// function empty() {
//     if (textInput.value.length <= 0) {
//         const emptyInput = "Please input a value"
//         alert(emptyInput)
//     }
// }

// //converts input value to lowercase letters
// function lowercase() {
//     const lowerString = textInput.value.toLowerCase();
//     return lowerString
// }

// function arrayify() {
//     const stringArray = Array.from(lowercase())
//     console.log(stringArray);
//     return stringArray
// } //yay this one works

// function resultDisplay() {
//     if (arrayify() === arrayify().reverse) {
//         const result = result.innerHTML(`<div>${textInput.value} is a palindrome</div>`)
//     }
// }

//functions to run on button click
function palindromeCheck() {
    if (textInput.value.length <= 0) {
        const emptyInput = "Please input a value"
            alert(emptyInput)
    }
    const lowerString = textInput.value.toLowerCase();
    const stringArray = Array.from(lowerString);
    if (stringArray === stringArray.reverse()) {
        console.log("palindrome")
    }

}