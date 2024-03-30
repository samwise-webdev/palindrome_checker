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

function punctRemover(textInput) {
    const removedPunct = textInput.replaceAll(punctfinder, "");
    palindromeCheck(removedPunct);
}

//functions to run on button click
    // using === doesn't compare contents of an array
function palindromeCheck() {
    empty();
    const stringArray = Array.from(textInput.value.toLowerCase());
    const stringReversed = Array.from(stringArray).reverse(); //need to reverse stringArray for some reason, not use textInput.value again. That didn't work, idk why
        if (stringArray.join('') === stringReversed.join('')) {
            result.innerText = (`${stringArray.join('')} is a palindrome.`);
        } else {
            result.innerText = (`${stringArray.join('')} is not a palindrome.`); //have to .join() again b/c it will show up as an array otherwise
        }

}