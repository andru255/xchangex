<template>
  <form class="py-3" v-on:submit.prevent>
    <div v-show="error !== ''" class="alert alert-danger" role="alert">
        {{ error }}
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="dollarAmount">Monto en dólares</label>
        <input name="dollarAmount" class="form-control" v-model="dollar" placeholder="USD" :disabled="isRequestInProgress">
      </div>
      <div class="col-md-6 mb-3">
        <label for="euroAmount">Monto en euros</label>
        <input name="euroAmount" class="form-control" v-model="euro" placeholder="EU" readonly="readonly">
      </div>
    </div>
    <button class="btn btn-primary btn-lg" v-on:click="calculate" v-on:keyup.13="calculate" :disabled="isRequestInProgress">{{ btnText }}</button>
  </form>
</template>

<script>
import CurrencyRepository from "../repositories/currency";
import Utils from "../utils";

const defaultBtnText = "Calcular";

export default {
  name: "Form",
  data: function() {
    return {
      error: "",
      dollar: undefined,
      euro: undefined,
      isRequestInProgress: false,
      intervalCurrencyUpdate: function() {},
      btnText: defaultBtnText
    };
  },
  methods: {
    calculate: function() {
      this.error = "";
      this.isRequestInProgress = true;
      this.btnText = "Calculando...";

      if (!Utils.isValidCurrencyFormat(this.dollar)) {
        this.euro = undefined;
        clearInterval(this.intervalCurrencyUpdate);
        this.intervalCurrencyUpdate = function() {};
        this.isRequestInProgress = false;
        this.error = "Ingrese un monto con formáto válido. Ejemplo: 1,100";
        this.btnText = defaultBtnText;
        return false;
      }

      CurrencyRepository.getCurrency()
        .then(value => {
          this.isRequestInProgress = false;
          this.btnText = defaultBtnText;
          let euroFloat = value * Utils.currencyToFloat(this.dollar);
          this.euro = Utils.floatToCurrency(euroFloat);
        })
        .catch(() => {
          this.isRequestInProgress = false;
          this.btnText = defaultBtnText;
          this.error = "Ups! Se encontró un error interno, intente de nuevo";
        });
    }
  },
  watch: {
    euro() {
      if (typeof this.euro !== "undefined") {
        clearInterval(this.intervalCurrencyUpdate);
        this.intervalCurrencyUpdate = setInterval(() => {
          this.calculate();
        }, 60000 * 10);
      }
    }
  }
};
</script>

<style>
input {
  text-align: center;
}
</style>
