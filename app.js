const amountElement = document.getElementById("amount");
const firstCurrency = document.getElementById("firstCurrency")
const secondCurrency = document.getElementById("secondCurrency")
const currency = new Currency("USD", "TRY")
const ui = new Ui(firstCurrency, secondCurrency)


eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function () {
        const elems = document.querySelectorAll("select");
        const instances = M.FormSelect.init(elems);
    });
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems);
    });
    amountElement.addEventListener("input", exchangeCurrency)
    firstCurrency.onchange = function () {
        currency.changeFirstCurrency(firstCurrency.options[firstCurrency.selectedIndex].textContent)
        ui.changeFirst();


    }
    secondCurrency.onchange = function () {
        currency.changeSecondCurrency(secondCurrency.options[secondCurrency.selectedIndex].textContent)
        ui.changeSecond();
    }
}

function exchangeCurrency() {
    currency.changeAmount(amountElement.value);
    currency.exchange()
        .then(result => {
            ui.displayResult(result);

        })
        .catch(err => console.log(err))
}
