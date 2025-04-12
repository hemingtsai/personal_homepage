<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import MarkdownIt from "markdown-it";
import markdownItHighlightjs from "markdown-it-highlightjs";
import markdownItClass from "@toycode/markdown-it-class";

const route = useRoute();

const loading = ref(false);
const post = ref("");

loading.value = true;
fetch(`${import.meta.env.VITE_LUNALOG_SERVER}/posts/${route.params.id}`)
  .then((response) => {
    if (!response.ok) {
      console.log("Response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (!data) {
      console.error("Invalid data received", data);
      post.value = "Error: Post content not found.";
      return;
    }

    const md = new MarkdownIt({})
    .use(markdownItHighlightjs)
    .use(markdownItClass, {
      h1: ["text-4xl", "font-bold",  "mb-4"],
      h2: ["text-3xl", "font-bold",  "mb-3"],
      h3: ["text-2xl", "font-semibold", "mb-3"],
      h4: ["text-xl", "font-semibold","mb-3"],
      h5: ["text-lg", "font-semibold", "mb-2"],
      a: ["text-blue-500", "hover:text-teal-400", "hover:underline"],
      p: ["text-base", "leading-relaxed", "mb-4"],
      ul: ["list-disc", "pl-5", "space-y-2"],
      ol: ["list-decimal", "pl-5", "space-y-2"],
      li: ["text-gray-600"],
    });

    post.value = md.render(data);
    loading.value = false;
  })
  .catch((error) => {
    console.error("Error fetching post:", error);
    post.value = "Error loading post.";
    loading.value = false;
  });
</script>

<template>
  <div class="lg:p-5 lg:pr-auto lg:pl-auto h-full  m-3 lg:mr-auto lg:ml-auto">
    <div v-if="loading" class="flex">
      <span class="font-serif">Loading</span>
      <span class="loading loading-spinner loading-xl"></span>
    </div>
    <div
      class="prose md:prose-lg lg:prose-xl font-serif mr-auto ml-auto"
      v-html="post"
    ></div>
  </div>
</template>
