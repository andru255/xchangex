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
  getCurrency(completion, fail) {
    axios({ method: "GET", url: serviceURL })
      .then(result => {
        let value = Object.assign({}, this.defaultValue, result);
        completion.call(this, value.rates.EUR);
      })
      .catch(() => {
        fail.call(this);
      });
  }
}

const instance = new CurrencyRepository();
export default instance;
