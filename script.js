const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// unicode 0061-007A

function empty() {
    if (textInput.value.length <= 0) {
        const emptyInput = "Please input a value"
        alert(emptyInput)
    }
}