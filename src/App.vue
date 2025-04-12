<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();
const transitionName = ref("slide-left");
const historyStack = ref<string[]>([]);

watch(
  () => router.currentRoute.value.path,
  (newPath) => {
    if (!newPath) return;
    if (historyStack.value.length === 0) {
      historyStack.value.push(newPath);
      return;
    }

    const existingIndex = historyStack.value.indexOf(newPath);
    if (existingIndex !== -1) {
      transitionName.value = "slide-right";
      historyStack.value = historyStack.value.slice(0, existingIndex + 1);
    } else {
      transitionName.value = "slide-left";
      historyStack.value.push(newPath);
    }
  }
);
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="navbar w-full flex">
      <RouterLink class="font-serif btn btn-ghost text-2xl font-bold dark:text-white" to="/">
        Hmtsai's Website
      </RouterLink>
      <div class="grow"></div>
      <RouterLink class="font-serif btn btn-ghost text-lg font-medium dark:text-white transition-colors duration-200 hover:text-teal-500" to="/blog">
        Blog
      </RouterLink>
    </div>

    <div class="min-h-screen">
      <router-view v-slot="{ Component, route }">
        <transition :name="transitionName" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </div>

  <div class="footer bg-gray-800 backdrop-blur-lg text-white py-8">
    <div class="container mx-auto px-4 text-center flex flex-col justify-center items-center">
      <div class="mb-6">
        <p class="text-lg font-serif font-medium">Hmtsai's Personal Website 2024 💗 Forever</p>
        <p class="text-sm font-serif">Copyright © 2025 - All rights reserved by Hemingtsai.</p>
      </div>
    </div>
  </div>

  </div>
</template>

<style scoped>
/* 毛玻璃背景效果 */
.backdrop-blur-lg {
  backdrop-filter: blur(15px);
}

.navbar {
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.footer {
  backdrop-filter: blur(15px);
}

/* 单色背景 */
.bg-gray-800 {
  background-color: #2d3748; /* 深灰色背景 */
}

/* 链接的颜色和样式 */
.link-hover {
  text-decoration: underline;
}

.link-hover:hover {
  color: #38b2ac;
}

/* 滑动动画 */
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 400ms cubic-bezier(0.5, 0, 0, 1),
              opacity 400ms cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-30%);
  opacity: 0;
}

.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(30%);
  opacity: 0;
}

.navbar .btn-ghost {
  color: #ffffff;
}

.navbar .btn-ghost:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: #38b2ac;
}

.footer-title {
  font-size: 1.2rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }

  .footer {
    padding: 2rem;
  }
}
</style>
