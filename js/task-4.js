const btnDecrement = document.querySelector(`button[data-action="decrement"]`);
const btnIncrement = document.querySelector(`button[data-action="increment"]`);

let counterValue = 0;

btnDecrement.addEventListener("click", (event) => {
    counterValue = counterValue - 1;
    let counterClick = document.querySelector("span");
    counterClick.textContent = counterValue;
});

btnIncrement.addEventListener("click", (event) => {
    counterValue += 1;
    let counterClick = document.querySelector("span");
    counterClick.textContent = counterValue;
});