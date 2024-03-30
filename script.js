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
    const punctfinder = /[^a-z0-9]/g;
    textInput.replaceAll(punctfinder, "");
}

//functions to run on button click
    // using === doesn't compare contents of an array
function palindromeCheck() {
    empty();
    punctRemover(textInput.value);
    const stringArray = Array.from(textInput.value.toLowerCase());
    const stringReversed = Array.from(stringArray).reverse(); //need to reverse stringArray for some reason, not use textInput.value again. That didn't work, idk why
        if (stringArray.join('') === stringReversed.join('')) {
            result.innerText = (`${stringArray.join('')} is a palindrome.`);
        } else {
            result.innerText = (`${stringArray.join('')} is not a palindrome.`); //have to .join() again b/c it will show up as an array otherwise
        }

}