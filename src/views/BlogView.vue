<script setup lang="js">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const loading = ref(false);
const posts = ref(null);

loading.value = true;
fetch("https://lunalog.hmtsai.cn/posts_list")
  .then((response) => response.json())
  .then((data) => {
    posts.value = data;
    loading.value = false;
  });
</script>

<template>
  <div class="p-3 lg:p-5 lg:pr-auto lg:pl-auto w-full h-full">
    <h1 class="font-slab font-bold text-5xl mb-3">Blog</h1>
    <h3 class="font-slab font-bold text-2xl mb-3">Posts</h3>
    <p class="font-slab py-6 text-justify">Write your creative on paper.</p>

    <div v-if="loading" class="flex">
      <span>Loading</span>
      <span class="loading loading-spinner loading-xl"></span>
    </div>

    <div v-if="posts">
      <ul class="list bg-base-100 rounded-box shadow-md">
        <li class="list-row">
          <div v-for="(post, index) in posts">
            <RouterLink :to="`/post/${index}`" class="font-slab">{{
              post.title
            }}</RouterLink>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
