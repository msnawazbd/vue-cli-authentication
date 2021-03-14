<template>
  <div class="row justify-content-center">
    <div class="col-md-6 col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Register</h5>
        </div>
        <div class="card-body">
          <!-- login form -->
          <form @submit.prevent="handleSubmit">
            <error :v-if="error" :error=error />
            <div class="form-group">
              <label for="name">Name</label>
              <input
                  id="name"
                  v-model="name"
                  class="form-control"
                  type="text"
              />
            </div>

            <div class="form-group">
              <label for="email">Email address</label>
              <input
                  id="email"
                  v-model="email"
                  class="form-control"
                  type="email"
              />
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input
                  id="password"
                  v-model="password"
                  class="form-control"
                  type="password"
              />
            </div>
            <button class="btn btn-warning btn-block" type="submit">
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
import Error from "../components/Error"

export default {
  name: "Register",
  components: {
    Error
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      error: '',
    }
  },
  methods: {
    handleSubmit() {
      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
      }
      UserDataServices.create(data)
          .then(res => {
            console.log(res.data)
            this.$router.push('/login')
          })
          .catch(e => {
            this.error = "Registration Failed!"
            console.log(e)
          })
    }
  }
};
</script>

<style scoped>
</style>
