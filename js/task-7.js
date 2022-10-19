const inputRef = document.querySelector("#font-size-control");
const spanRef = document.querySelector("#text");

inputRef.addEventListener("input", () => { 
    const sizeChange = inputRef.value + "px";
    console.log(sizeChange);
    spanRef.style.fontSize = sizeChange;
});