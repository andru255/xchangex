<template>
  <div id="app">
    <header class="py-3">
      <h1 class="text-center">XChangex</h1>
    </header>
    <div class="nav-scroller py-1 mb-2">
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Características</a>
        <a class="p-2 text-dark" href="#">Empresas</a>
        <a class="p-2 text-dark" href="#">Soporte</a>
        <a class="p-2 text-dark" href="#">Paquetes</a>
      </nav>
    </div>
    <div class="container-form">
      <div class="container">
          <Form />
      </div>
    </div>
    <footer class="container">
        <div class="pt-4 my-md-5 pt-md-5 border-top">
          <div class="row">
            <div class="col-6 col-md">
              <h5>Features</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Cool stuff</a></li>
                <li><a class="text-muted" href="#">Random feature</a></li>
                <li><a class="text-muted" href="#">Team feature</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>Resources</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Resource</a></li>
                <li><a class="text-muted" href="#">Resource name</a></li>
                <li><a class="text-muted" href="#">Another resource</a></li>
              </ul>
            </div>
            <div class="col-6 col-md">
              <h5>About</h5>
              <ul class="list-unstyled text-small">
                <li><a class="text-muted" href="#">Team</a></li>
                <li><a class="text-muted" href="#">Privacy</a></li>
                <li><a class="text-muted" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p>&copy; 2019 XChangex, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </div>
</template>

<script>
// components
import Form from "./components/Form.vue";
import "bootstrap";

export default {
  name: "app",
  components: {
    Form
  }
};
</script>

<style lang="css">
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
</style>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.container-form {
  padding: 4rem 2rem;
  background-color: #e9ecef;
}
footer {
  text-align: left;
}
</style>
