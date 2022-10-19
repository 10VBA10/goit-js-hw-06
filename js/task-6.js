const inputRef = document.querySelector("#validation-input");
const symbolsLength = inputRef.getAttribute("data-length");

inputRef.addEventListener("blur", (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue.length === Number(symbolsLength)) {
        inputRef.classList.remove("invalid");
        inputRef.classList.add("valid");
    } else {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
    }
});