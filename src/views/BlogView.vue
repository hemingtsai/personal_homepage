<script setup lang="js">
import { ref } from "vue";
import PostCard from "@/components/PostCard.vue";

const loading = ref(false);
const posts = ref(null);

loading.value = true;
fetch(`${import.meta.env.VITE_LUNALOG_SERVER}/posts_list`)
  .then((response) => response.json())
  .then((data) => {
    posts.value = data;
    loading.value = false;
  });
</script>

<template>
  <div class="p-6 lg:p-10 lg:pr-auto lg:pl-auto w-full min-h-screen text-black dark:text-white">
    <h1 class="font-serif font-bold text-5xl sm:text-6xl md:text-7xl mb-4 text-center">Blog</h1>
    <h3 class="font-serif font-bold text-2xl sm:text-3xl mb-6 text-center">Posts</h3>
    <p class="font-serif text-lg sm:text-xl mb-8 text-justify">
      Write your creative on paper.
    </p>

    <div v-if="loading" class="flex justify-center items-center space-x-4">
      <span class="font-serif text-xl">Loading...</span>
      <span class="loading loading-spinner loading-lg"></span>
    </div>

    <div v-if="posts" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(post, index) in posts"
        :key="index"
        class="transform transition-all duration-500 ease-in-out hover:scale-105"
      >
        <PostCard :title="post.title" context="" :href="`/post/${index}`" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

html, body {
  height: 100%;
  margin: 0;
  font-family: 'Merriweather', serif;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.font-serif {
  font-family: 'Merriweather', serif;
}

.bg-gradient-to-r {
  background-size: 400% 400%;
  animation: dynamicGradient 15s ease infinite;
}

@media (prefers-color-scheme: dark) {
  .bg-gradient-to-r {
    background: linear-gradient(to right, #1e1e1e, #333333);
  }

  .text-black {
    color: white;
  }
}

@keyframes dynamicGradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
