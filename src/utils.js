const Utils = {
  isValidCurrencyFormat(value) {
    let regexDollar = /^\d{1,3}(,\d{3})*?(\.\d{1,4})?$/;
    if (regexDollar.test(value)) {
      return true;
    }
    return false;
  },
  currencyToFloat(value) {
    let number = value.replace(",", "");
    return parseFloat(number);
  },
  floatToCurrency(value) {
    var count = 2;
    let decimalSymbol = ".";
    let separatorSymbol = ",";
    let prefix = value < 0 ? "-" : "";
    let overridedValue = Math.abs(Number(value) || 0);
    let index = String(parseInt(overridedValue.toFixed(count)));
    let j = (j = index.length) > 3 ? j % 3 : 0;
    let output = [
      prefix,
      j ? index.substr(0, j) + separatorSymbol : "",
      index.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + separatorSymbol),
      decimalSymbol,
      Math.abs(value - index)
        .toFixed(count)
        .slice(2)
    ].join("");
    return output;
  }
};

export default Utils;
