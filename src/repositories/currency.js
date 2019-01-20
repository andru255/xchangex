import axios from "axios";

let serviceURL = "https://api.exchangeratesapi.io/latest?base=USD&symbols=EUR";

class CurrencyRepository {
  constructor() {
    this.defaultValue = {
      rates: {
        EUR: 0.8770391159
      },
      base: "USD",
      date: ""
    };
  }
  getCurrency() {
    return new Promise((resolve, reject) => {
      axios({ method: "GET", url: serviceURL })
        .then(result => {
          let value = Object.assign({}, this.defaultValue, result);
          resolve(value.rates.EUR);
        })
        .catch(() => {
          reject();
        });
    });
  }
}

const instance = new CurrencyRepository();
export default instance;
