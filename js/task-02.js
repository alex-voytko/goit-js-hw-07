const ingredients = [
    "Картопля",
    "Гриби",
    "Часник",
    "Помідори",
    "Зелень",
    "Приправи",
];

const ingredientsRef = document.querySelector("#ingredients");

const elems = ingredients.map((el) => {
    const item = document.createElement("li");
    item.innerHTML = el;
    return item;
});

ingredientsRef.append(...elems);
console.log(ingredientsRef);