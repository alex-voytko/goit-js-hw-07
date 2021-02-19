const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', element => {
    outputRef.textContent = element.target.value
    if (element.target.value === '') {
        outputRef.textContent = 'Незнакомец'
    }
})
