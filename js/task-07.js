const rangeEl = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

rangeEl.addEventListener('input', () => {
    spanRef.setAttribute('style', `font-size: ${rangeEl.value}px`)
})
