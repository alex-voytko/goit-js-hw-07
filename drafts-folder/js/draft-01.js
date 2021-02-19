const inputRef = document.querySelector('input');

// inputRef.addEventListener('blur', event => {
//     inputRef.textContent = event.target.value
// })

inputRef.addEventListener('blur', event => {
    if (!event.target.value) {
        inputRef.classList.add('error')
    }
})

inputRef.addEventListener('focus', () => {
    inputRef.classList.remove('error')
})