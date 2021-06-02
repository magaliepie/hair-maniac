let result = document.getElementById('result');
let ingredients = document.getElementById('ingredients');
let searchBtn = document.getElementById('searchBtn');
let badIngredients = document.getElementById('badIngredients');

let emolients = document.getElementById('emolients');
let proteins = document.getElementById('proteins');
let humectants = document.getElementById('humectants');

let handleSubmit = () => {
    checkIngredient();
    ingredients.value = '';
};

let checkIngredient = () => {
    let results = ingredients.value.replace(/[,;]+/g, `<br>`);

    let isProtein = arrayOfProteins.filter((item) => results.includes(item));
    let isHumectant = arrayOfHumectants.filter((item) =>
        results.includes(item)
    );
    let isEmolient = arrayOfEmolients.filter((item) => results.includes(item));
    let harmfulIngredients = arrayOfBadIngredients.filter((item) =>
        results.includes(item)
    );

    if (results.length > 0) {
        if (isProtein.length > 0) {
            proteins.innerHTML = `${isProtein}`;
            proteins.style.color = 'green';
        } else if (isProtein.length === 0) {
            proteins.innerHTML = 'none';
        }
        if (isHumectant.length > 0) {
            humectants.innerHTML = `${isHumectant}`;
            humectants.style.color = 'blue';
        } else if (isHumectant.length === 0) {
            humectants.innerHTML = 'none';
        }
        if (isEmolient.length > 0) {
            emolients.innerHTML = ` ${isEmolient}`;
            emolients.style.color = '#556191';
        } else if (isEmolient.length === 0) {
            emolients.innerHTML = 'none';
        }
        if (harmfulIngredients.length > 0) {
            badIngredients.innerHTML = `${harmfulIngredients}`;
            badIngredients.style.color = 'red';
        } else if (harmfulIngredients.length === 0) {
            badIngredients.innerHTML = 'none';
        }
    } else if (ingredients.innerHTML.length === 0) {
        result.textContent = 'please add an ingredient';
        result.style.color = 'red';
        result.style.textAlign = 'center';

        setTimeout(() => {
            result.textContent = '';
        }, 1000);
        proteins.innerHTML = '';
        humectants.innerHTML = '';
        emolients.innerHTML = '';
        badIngredients.innerHTML = '';
    }
};

searchBtn.addEventListener('click', handleSubmit);
