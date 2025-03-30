<script setup lang="ts">
const props = defineProps({
    title: { String, required: true },
    context: { String, required: true },
    href: { String, required: true }
})
</script>

<template>
    <div class="card lg:card-side bg-base-100 shadow-xl">
        <div class="card-body">
            <h2 class="card-title font-slab"> {{ props.title }} </h2>
            <p class="font-slab"> {{ props.context }} </p>
            <div class="card-actions justify-end">

                <RouterLink :to="`/post/${index}`" class="btn btn-primary font-slab">{{
                    post.title
                    }}</RouterLink>

                <button class="btn btn-primary">Visit</button>
            </div>
        </div>
    </div>
</template>
