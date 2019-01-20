<template>
  <form class="py-3" v-on:submit.prevent>
    <div v-show="errors.length > 0" class="alert alert-danger" role="alert">
      <ul v-for="error in errors" v-bind:key="error">
        <li>{{ error }}</li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="dollarAmount">Monto en dólares</label>
        <input class="form-control" v-model="dollar" placeholder="USD" :disabled="isRequestInProgress">
      </div>
      <div class="col-md-6 mb-3">
        <label for="euroAmount">Monto en euros</label>
        <input class="form-control" v-model="euro" placeholder="EU" readonly="readonly">
      </div>
    </div>
    <button class="btn btn-primary btn-lg" v-on:click="calculate" v-on:keyup.13="calculate" :disabled="isRequestInProgress">Calcular</button>
  </form>
</template>

<script>
import CurrencyRepository from "../repositories/currency";
import Utils from "../utils";

export default {
  name: "Form",
  data: function() {
    return {
      errors: [],
      dollar: undefined,
      euro: undefined,
      isRequestInProgress: false,
      intervalCurrencyUpdate: function() {}
    };
  },
  methods: {
    calculate: function() {
      this.errors = [];
      this.isRequestInProgress = true;

      if (Utils.isValidCurrencyFormat(this.dollar)) {
        CurrencyRepository.getCurrency(
          value => {
            this.isRequestInProgress = false;
            let euroFloat = value * Utils.currencyToFloat(this.dollar);
            this.euro = Utils.floatToCurrency(euroFloat);
          },
          () => {
            this.errors.push(
              "Ups! Se encontró un error interno, intente de nuevo"
            );
            this.isRequestInProgress = false;
          }
        );
        return false;
      }

      this.euro = undefined;
      clearInterval(this.intervalCurrencyUpdate);
      this.intervalCurrencyUpdate = function() {};
      this.isRequestInProgress = false;
      this.errors.push("Ingrese un monto con formáto válido. Ejemplo: 1,100");
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
