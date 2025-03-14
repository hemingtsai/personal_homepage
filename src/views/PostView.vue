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
fetch(`https://lunalog.hmtsai.cn/posts/${route.params.id}`)
  .then((response) => {
    if (!response.ok) {
      console.log("Response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    const md = new MarkdownIt({})
      .use(markdownItHighlightjs)
      .use()
      .use(markdownItClass, {
        h1: ["text-4xl", "font-bold"],
        h2: ["text-3xl", "font-bold"],
        h3: ["text-2xl", "font-bold"],
        h4: ["text-xl", "font-bold"],
        h5: ["font-bold"],
        a: ["text-blue-300", "hover:underline"],
      });

    post.value = md.render(data);

    loading.value = false;
  });
</script>

<template>
  <div class="lg:p-5 lg:pr-auto lg:pl-auto w-full h-full">
    <div v-if="loading" class="flex">
      <span class="font-slab">Loading</span>
      <span class="loading loading-spinner loading-xl"></span>
    </div>
    <div class="prose md:prose-lg lg:prose-xl font-slab" v-html="post"></div>
  </div>
</template>
