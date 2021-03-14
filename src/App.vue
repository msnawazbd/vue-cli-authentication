<template>
  <div id="app">
    <!-- navbar start -->
    <Nav/>
    <!-- /.navbar end -->

    <!-- main content -->
    <div class="main-content my-5">
      <div class="container">
          <router-view />
      </div>
    </div>
    <!-- ./end main content -->

    <!-- footer start -->
    <Footer/>
    <!-- /.footer end -->
  </div>
</template>

<script>
import UserDataServices from "./services/UserDataServices";

import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default {
  name: "App",
  components: {
     Nav, Footer
  },
  data(){
    return {
      // user: null
    }
  },
  created() {
    UserDataServices.user()
    .then(res => {
      this.$store.dispatch('user', res.data.user)
      console.log(res.data)
    })
    .catch(e => {
      console.log(e)
    })
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
