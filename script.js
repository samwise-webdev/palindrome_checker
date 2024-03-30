const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
// const textValue = textInput.value;
// unicode 0061-007A

//checks if input box is empty
function empty() {
    if (textInput.value.length <= 0) {
        const emptyInput = "Please input a value"
        alert(emptyInput)
    }
}

// function punctRemover() {
//     const punctfinder = /[^a-z0-9]/g;
//     textInput.value.replaceAll(punctfinder, "");
// }

// function punctRemover(textValue) {
//     const punctfinder = /[^a-z0-9]/g;
//     const cleanInput = textValue.replaceAll(punctfinder, "");
//     return cleanInput
// }

//functions to run on button click
    // using === doesn't compare contents of an array
function palindromeCheck() {
    empty();
//    punctRemover();
    const cleanInput = textInput.value.replaceAll(/[^a-zA-Z0-9]/g, "");
    const stringArray = Array.from(cleanInput.toLowerCase());
    const stringReversed = Array.from(cleanInput).reverse(); //need to reverse stringArray for some reason, not use textInput.value again. That didn't work, idk why
        if (stringArray.join('') === stringReversed.join('')) {
            result.innerText = (`${textInput.value} is a palindrome.`);
        } else {
            result.innerText = (`${textInput.value} is not a palindrome.`); //have to .join() again b/c it will show up as an array otherwise
        }

}