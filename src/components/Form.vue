<template>
  <form class="py-3" v-on:submit.prevent>
    <div class="row">
      <div class="col-md-6 mb-3">
        <label for="dollarAmount">Monto en dólares</label>
        <input class="form-control" v-model="price" placeholder="USD">
      </div>
      <div class="col-md-6 mb-3">
        <label for="euroAmount">Monto en euros</label>
        <input class="form-control" v-model="change" placeholder="EU">
      </div>
    </div>
    <button class="btn btn-primary btn-lg" v-on:click="calculate">Calcular</button>
  </form>
</template>


<script>
export default {
  name: "Form",
  data: function() {
    return {
      price: undefined,
      change: undefined
    };
  },
  methods: {
    calculate: function() {
      console.log("do request!!");
    }
  }
};
</script>

<style>
input {
  text-align: center;
}
</style>
