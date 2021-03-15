<template>
  <div class="row justify-content-center">
    <div class="col-md-4 col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Add Post</h5>
        </div>
        <div class="card-body">
          <!-- login form -->
          <form @submit.prevent="handleSubmit">
            <error v-if="error" :error="error" />
            <div v-if="message" class="alert alert-success" role="alert">
              {{ message }}
            </div>
            <div class="form-group">
              <label for="title">Post Title</label>
              <input
                type="text"
                class="form-control"
                id="title"
                v-model="title"
              />
            </div>
            <div class="form-group">
              <label for="category_id">Category</label>
              <select
                class="form-control"
                id="category_id"
                v-model="category_id"
              >
                <option value="0">All</option>
                <option
                  :value="category.id"
                  v-for="(category, index) in categories"
                  :key="index"
                >
                  {{ category.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="photo">Post Photo</label>
              <input
                @change="changePhoto"
                class="form-control-file"
                id="photo"
                type="file"
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
              <label for="status">Status</label>
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
    <div class="col-md-8 col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Manage Posts</h5>
        </div>
        <div class="card-body p-0">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">SL</th>
                <th scope="col">Post Title</th>
                <th scope="col">Category</th>
                <th scope="col">Status</th>
                <th scope="col">Created By</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, index) in posts" :key="post.id">
                <th scope="row">{{ index + +1 }}</th>
                <td>{{ post.title }}</td>
                <td>{{ post.category.name }}</td>
                <td>
                  <p v-if="post.status === 1">Published</p>
                  <p v-if="post.status === 0">Unpublished</p>
                </td>
                <td>{{ post.created_user.name }}</td>
                <td>
                  <button class="btn btn-sm btn-danger">Delete</button>
                </td>
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
import PostDataServices from "../services/PostDataServices";
import CategoryDataServices from "../services/CategoryDataServices";
import Error from "./Error";

export default {
  name: "Post",
  components: {
    Error,
  },
  data() {
    return {
      title: "",
      details: "",
      category_id: "0",
      status: 1,
      photo: "",
      photo_original_name: "",
      categories: {},
      posts: {},
      error: "",
      message: "",
    };
  },
  methods: {
    changePhoto(e) {
      let file = e.target.files[0];
      this.photo_original_name = file.name
      let reader = new FileReader();

      if (file["size"] < 4410390) {
        reader.onloadend = () => {
          this.photo = reader.result;
          // console.log(file);
        }
        reader.readAsDataURL(file)
      } else {
        console.log("File size too large.");
      }
    },
    handleSubmit() {
      const data = {
        title: this.title,
        category_id: this.category_id,
        details: this.details,
        status: this.status,
        photo: this.photo,
        photo_original_name: this.photo_original_name,
      };
      PostDataServices.create(data)
        .then((res) => {
          console.log(res.data);
          this.message = "Post Insertion Success!";
          this.$router.push("/post").catch(() => {});
        })
        .catch((e) => {
          this.error = "Post Insertion Failed!";
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

    PostDataServices.posts()
      .then((res) => {
        this.posts = res.data.posts;
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
