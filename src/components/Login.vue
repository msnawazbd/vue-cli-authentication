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
            <error v-if="error" :error='error'/>
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
import Error from './Error'

export default {
  name: "Login",
  components: {
    Error
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        email: this.email,
        password: this.password,
      };

      UserDataServices.login(data)
        .then((res) => {
          localStorage.setItem("token", res.data.data.token.access_token);
          this.$store.dispatch("user", res.data.data.user);
          console.log(res.data);
          this.$router.push("/");
        })
        .catch((e) => {
          this.error = 'Invalid username/password!'
          console.log(e);
        });
    },
  },
};
</script>

<style scoped>
</style>
