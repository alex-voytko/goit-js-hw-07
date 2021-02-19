const increaseBtnRef = document.querySelector('button[data-action="increment"]');
const currentValueRef = document.querySelector('#value');
const decreaseBtnRef = document.querySelector('button[data-action="decrement"]');

let counterValue = Number(currentValueRef.textContent)

increaseBtnRef.addEventListener('click', increment)
decreaseBtnRef.addEventListener('click', decrement)

function increment() {
    counterValue += 1;
    currentValueRef.textContent = counterValue;
}
function decrement() {
    counterValue -= 1;
    currentValueRef.textContent = counterValue;
}