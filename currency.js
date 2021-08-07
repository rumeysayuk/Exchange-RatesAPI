class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "API_KEY";
        this.amount = null;

    }

    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency)
                .then(res => res.json())
                .then(data => {
                    const parity = data.rates[this.secondCurrency]
                    const amount2 = Number(this.amount)
                    let total = parity * amount2
                    resolve(total)
                })
                .catch(err => console.log(err));
        })

    }

    changeAmount(amount) {
        this.amount = amount
    }

    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency
    }

    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency
    }
}
