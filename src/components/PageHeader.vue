<template>
    <div class="hero-content flex-col lg:flex-row mr-auto ml-auto">
        <div class="m-3 lg:mr-auto lg:ml-auto">
            <h1 class="font-slab text-xl sm:text-2xl mb-3">👏 Hi, there!</h1>
            <h1 class="font-slab text-3xl lg:text-5xl mb-3">I'm <b>Hemingtsai</b>,</h1>
            <h1 class="font-slab text-3xl lg:text-5xl text-nowrap">I'm <div ref="typewriterElement" class="inline-block text-nowrap"></div>
            </h1>
            <p class="font-slab py-6 text-xl sm:text-sm text-justify">
                Don't compare your life with others. There's no comparison between the sun and the moon. They shine when
                it's their time.
            </p>
        </div>
        <div class="mockup-code w-4/5 lg:w-auto">
            <pre><code>
    while(life){
        eat();
        drink();
        study();
        sleep();
    }
            </code></pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import Typed from "typed.js";
const typewriterElement = ref(null);
let typed: Typed | any = null;
onMounted(() => {
    typed = new Typed(typewriterElement.value, {
        strings: ["a Developer!", "a Student!", "an Interesting man!"],
        typeSpeed: 40,
        backSpeed: 20,
        loop: true,
    });
});
onUnmounted(() => {
    if (typed && typed != null) {
        typed.destroy();
        typed = null;
    }
});
</script>