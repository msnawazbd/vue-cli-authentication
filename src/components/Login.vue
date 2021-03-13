<template>
  <div class="row justify-content-center">
    <div class="col-md-6 col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Login</h5>
        </div>
        <div class="card-body">
          <!-- login form -->
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
              />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
              />
            </div>
            <button type="submit" class="btn btn-warning btn-block">
              Submit
            </button>
          </form>
          <!-- ./end login form -->
        </div>
        <div class="card-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import UserDataServices from "../services/UserDataServices";

export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit(){
      const data = {
        email : this.email,
        password : this.password
      }
      UserDataServices.login(data)
      .then(res => {
        console.log(res.data)
        /*localStorage.setItem('token', res.data.token)
        console.log(localStorage.getItem('token'))
        this.$router.push('/')*/
      })
      .catch(e => {
        console.log(e)
      })
    }
  }
};
</script>

<style scoped>
</style>
