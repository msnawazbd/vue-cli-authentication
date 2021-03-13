<template>
  <div id="app">
    <!-- navbar start -->
    <Nav/>
    <!-- /.navbar end -->

    <!-- main content -->
    <div class="main-content my-5">
      <div class="container">
          <router-view/>
      </div>
    </div>
    <!-- ./end main content -->

    <!-- footer start -->
    <Footer/>
    <!-- /.footer end -->
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
     Nav, Footer
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
