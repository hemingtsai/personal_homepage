<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  context: { type: String, required: true },
  href: { type: String, required: true },
});
</script>

<template>
  <div class="card lg:card-side bg-white dark:bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transform transition-all duration-300 ease-in-out hover:-translate-y-2">
    <div class="card-body p-6 space-y-4">
      <h2 class="card-title text-2xl sm:text-3xl font-serif text-gray-800 dark:text-white">{{ props.title }}</h2>
      <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-300">{{ props.context }}</p>
      <div class="card-actions justify-end">
        <RouterLink
          :to="props.href"
          class="btn btn-primary font-serif py-2 px-6 text-lg sm:text-xl rounded-full transition-all duration-300 hover:bg-indigo-600 hover:text-white"
        >
          Visit
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
