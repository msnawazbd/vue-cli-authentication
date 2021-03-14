<template>
  <div class="row justify-content-center">
    <div class="col-md-12 mb-5">
      <div class="card">
        <div class="card-body">
          <p v-if="user" class="mb-0">Hello, {{ user.name }}</p>
          <p v-if="!user" class="mb-0">You are not login!</p>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-sm-12">
      <div class="card">
        <div class="card-header">
          <h5 class="card-title mb-0">Home</h5>
        </div>
        <div class="card-body">
          <h5>What is Lorem Ipsum?</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="card-footer"></div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Home",
  computed: {
    ...mapGetters(['user'])
  }
};
</script>

<style scoped>
</style>
