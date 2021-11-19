<template>
  <main class="">
    <div class="row">
      <div class="col-md">
        <div class="text-start m-2">
          <img :src="eachBlog.image" alt="" class="card-img-top" />

          <div class="card-body">
            <h3>
              {{ eachBlog.title }}
            </h3>
            <div v-html="eachBlog.content"></div>
            <div>
              <strong>Author:{{ eachBlog.author }}</strong>
              |
              <em>{{ eachBlog.created_at }}</em>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">

      </div>
    </div>
  </main>
</template>

<script>
import { eachPost } from "../services/login.service";
export default {
  data() {
    return {
      id: null,
      eachBlog: {},
    };
  },
  methods: {},
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    eachPost(this.id).then((res) => {
      console.log(res.data);
      this.eachBlog = res.data.posts;
    });
  },
};
</script>


<style>
</style>