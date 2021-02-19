const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', element => {
    element.target.value.length === +inputRef.dataset.length
    ? inputRef.setAttribute('class', 'valid') 
    : inputRef.setAttribute('class', 'invalid')
})