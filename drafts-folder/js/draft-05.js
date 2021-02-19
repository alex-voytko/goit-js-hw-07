
const openModalBtn = document.querySelector('button[data-action="open-modal"]')
const closeModalBtn = document.querySelector('button[data-action="close-modal"]')
const closeOnBackdropByClick = document.querySelector('.js-backdrop')

openModalBtn.addEventListener('click', openModalHandler)
closeModalBtn.addEventListener('click', closeModalHandler)
closeOnBackdropByClick.addEventListener('click', onBackdropClick)

function openModalHandler() {
    window.addEventListener('keydown', pressESCforCloseModal)
    document.body.classList.add('show-modal')
}
function closeModalHandler() {
    window.removeEventListener('keydown', pressESCforCloseModal)
    document.body.classList.remove('show-modal')
}
function onBackdropClick(event) {
    if (event.target === event.currentTarget) {
        closeModalHandler()
    }
}
function pressESCforCloseModal (event) {
    if (event.code === 'Escape') {
        closeModalHandler()
        console.log('нажатый ESC')
    }

}


