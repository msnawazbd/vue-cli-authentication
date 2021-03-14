<template>
  <div class="row justify-content-center">
    <div class="col-md-4 col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Add Category</h5>
        </div>
        <div class="card-body">
          <!-- login form -->
          <form @submit.prevent="handleSubmit">
            <error v-if="error" :error="error" />
            <div v-if="message" class="alert alert-danger" role="alert">
              {{ message }}
            </div>
            <div class="form-group">
              <label for="name">Category Name</label>
              <input
                type="text"
                class="form-control"
                id="name"
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label for="details">Details</label>
              <input
                type="text"
                class="form-control"
                id="details"
                v-model="details"
              />
            </div>
            <div class="form-group">
              <label for="status">Details</label>
              <select class="form-control" id="status" v-model="status">
                <option value="1">Published</option>
                <option value="0">Unpublished</option>
              </select>
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
    <div class="col-md-6 col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Manage Categories</h5>
        </div>
        <div class="card-body p-0">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Category Name</th>
                <th scope="col">Status</th>
                <th scope="col">Created By</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(category, index) in categories" :key="category.id">
                <th scope="row">{{ index + +1 }}</th>
                <td>{{ category.name }}</td>
                <td>
                  {{ category.status }}
                </td>
                <td>{{ category.created_user.name }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="card-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import CategoryDataServices from "../services/CategoryDataServices";
import Error from "./Error";

export default {
  name: "Category",
  components: {
    Error,
  },
  data() {
    return {
      name: "",
      details: "",
      status: 1,
      categories: {},
      error: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        name: this.name,
        details: this.details,
        status: this.status,
      };
      CategoryDataServices.create(data)
        .then((res) => {
          console.log(res.data);
          this.message = "Category Insertion Success!";
          this.$router.push("/category").catch(() => {});
        })
        .catch((e) => {
          this.error = "Category Insertion Failed!";
          console.log(e);
        });
    },
  },
  created() {
    CategoryDataServices.categories()
      .then((res) => {
        this.categories = res.data.categories;
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style scoped>
</style>
