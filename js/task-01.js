const categoriesRef = document.querySelectorAll('li.item')
console.log(`В списке ${categoriesRef.length} категории.`)
categoriesRef.forEach((element) => {
    console.log(`Категория: ${element.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${element.lastElementChild.children.length}`)
})