<script setup lang="ts">
import PageHeader from "@/components/PageHeader.vue";
</script>

<template>
  <div class="h-full w-full m-0">
    <div class="carousel carousel-vertical h-full w-full">
      <div class="carousel-item h-full">
        <PageHeader class="mr-auto ml-auto" />
      </div>

      <div
        class="carousel-item h-full w-full flex flex-col sm:flex-row bg-[url(@/assets/bocchi.jpeg)] bg-cover bg-center text-black"
      >
        <div
          class="m-auto pr-3 pl-3 backdrop-blur-sm hover:backdrop-blur-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 drop-shadow-md"
        >
          <h1 class="font-slab text-xl lg:text-2xl mb-3">💻 As a developer,</h1>
          <h1 class="font-slab text-3xl lg:text-5xl mb-3">
            I try to use the code to make the world better.
          </h1>
        </div>
      </div>

      <div
        class="carousel-item h-full w-full flex flex-col sm:flex-row bg-[url(@/assets/book.jpeg)] bg-cover bg-center text-black"
      >
        <div
          class="m-auto pr-3 pl-3 backdrop-blur-sm hover:backdrop-blur-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 drop-shadow-md"
        >
          <h1 class="font-slab text-xl lg:text-2xl mb-3">📕 As a student,</h1>
          <h1 class="font-slab text-3xl lg:text-5xl mb-3">
            I strive to learn more knowledge.
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
