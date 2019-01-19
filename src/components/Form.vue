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
        <input class="form-control" v-model="dollar" placeholder="USD" :disabled="isRequestInProgress == true">
      </div>
      <div class="col-md-6 mb-3">
        <label for="euroAmount">Monto en euros</label>
        <input class="form-control" v-model="euro" placeholder="EU" readonly="readonly">
      </div>
    </div>
    <button class="btn btn-primary btn-lg" v-on:click="calculate" v-on:keyup.13="calculate" :disabled="isRequestInProgress == true">Calcular</button>
  </form>
</template>

<script>
export default {
  name: "Form",
  data: function() {
    return {
      errors: [],
      dollar: undefined,
      euro: undefined,
      isRequestInProgress: false
    };
  },
  methods: {
    calculate: function() {
      this.errors = [];
      this.isRequestInProgress = true;
      let regexDollar = /^\d{1,3}(,\d{3})*?(\.\d{2,4})?$/;

      if (regexDollar.test(this.dollar)) {
        this.doRequest();
        setTimeout(() => { 
          this.isRequestInProgress = false;
        }, 300);
        return false;
      }

      // estados por defecto
      this.isRequestInProgress = false;
      this.errors.push("Ingrese un monto con formáto válido. Ejemplo: 1,100");
    },
    doRequest: function() {
      console.log("Realizando petición...");
    }
  }
};
</script>

<style>
input {
  text-align: center;
}
</style>
