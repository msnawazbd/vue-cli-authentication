<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <router-link to="/" class="navbar-brand">CRUD</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link to="/" class="nav-link">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item" v-if="user">
          <router-link to="/category" class="nav-link">Category</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" v-if="!user">
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto" v-if="user">
        <li class="nav-item">
          <a class="nav-link" href="javascript:void(0)" @click="handleClick">Logout</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Nav",
  methods: {
    handleClick(){
      localStorage.removeItem('token')
      this.$store.dispatch('user', null)
      this.$router.push("/").catch(()=>{});
    }
  },
  computed: {
    ...mapGetters(['user'])
  }
};
</script>

<style scoped>
</style>
