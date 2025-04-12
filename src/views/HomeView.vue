<script setup lang="ts">
import { ref, onMounted } from "vue";
import PageHeader from "@/components/PageHeader.vue";

const isVisible = ref(false);

const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
};

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersection, {
    rootMargin: "0px",
    threshold: 0.5,
  });

  const elements = document.querySelectorAll('.animate-on-scroll');
  elements.forEach(element => observer.observe(element));
});
</script>

<template>
  <div class="h-full w-full m-0 flex flex-col">
    <!-- Hero Section -->
    <div class="h-screen flex items-center justify-center bg-gradient-to-r from-teal-200 via-pink-300 to-indigo-400 text-black dark:text-white relative">
      <div class="absolute inset-0 bg-opacity-50 bg-black"></div>
      <PageHeader class="mr-auto ml-auto text-center font-serif text-5xl sm:text-6xl md:text-7xl font-bold leading-tight tracking-wider relative z-10" />
    </div>

    <!-- First Content Section -->
    <section class="h-screen w-full flex flex-col sm:flex-row bg-[url(@/assets/bocchi.jpeg)] bg-cover bg-center text-black dark:text-white">
      <div class="m-auto pr-6 pl-6 sm:pr-12 sm:pl-12 backdrop-blur-lg hover:backdrop-blur-sm transition-all duration-500 ease-in-out hover:-translate-y-3 drop-shadow-2xl transform animate-on-scroll">
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl mt-12 mb-6 sm:mb-8 opacity-0 animate-slide-up" style="animation-delay: 0.2s;">
          💻 As a Developer,
        </h1>
        <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl mt-12 mb-6 sm:mb-12 opacity-0 animate-slide-up" style="animation-delay: 0.3s;">
          I believe code can change the world.
        </h1>
        <p class="font-serif text-lg sm:text-xl mt-6 mb-8 sm:mb-12 opacity-0 animate-slide-up" style="animation-delay: 0.4s;">
          I work hard every day to build meaningful software that helps people achieve their goals.
        </p>
      </div>
    </section>

    <!-- Second Content Section -->
    <section class="h-screen w-full flex flex-col sm:flex-row bg-[url(@/assets/book.jpeg)] bg-cover bg-center text-black dark:text-white">
      <div class="m-auto pr-6 pl-6 sm:pr-12 sm:pl-12 backdrop-blur-lg hover:backdrop-blur-sm transition-all duration-500 ease-in-out hover:-translate-y-3 drop-shadow-2xl transform animate-on-scroll">
        <h1 class="font-serif text-3xl sm:text-4xl lg:text-5xl mt-12 mb-6 sm:mb-8 opacity-0 animate-slide-up" style="animation-delay: 0.2s;">
          📚 As a Student,
        </h1>
        <h1 class="font-serif text-5xl sm:text-6xl lg:text-7xl mt-12 mb-6 sm:mb-12 opacity-0 animate-slide-up" style="animation-delay: 0.3s;">
          Every page is a step towards mastery.
        </h1>
        <p class="font-serif text-lg sm:text-xl mt-6 mb-8 sm:mb-12 opacity-0 animate-slide-up" style="animation-delay: 0.4s;">
          I am constantly learning, reading, and growing to expand my knowledge and skills.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Animation for fade-in and slide-up */
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

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply fade-in effect */
.animate-fade-in {
  animation: fadeIn 1s ease-out forwards;
}

/* Apply slide-up effect */
.animate-slide-up {
  animation: slideUp 1s ease-out forwards;
}

.animate-on-scroll {
  opacity: 0;
}

/* Section hover effect */
section {
  transition: all 0.5s ease-in-out;
}

section:hover {
  transform: scale(1.02);
}

/* Overall page layout */
html, body {
  height: 100%;
  margin: 0;
  font-family: 'Merriweather', serif;
  overflow-x: hidden;
}

/* Body Flex Layout */
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Font family for serif */
.font-serif {
  font-family: 'Merriweather', serif;
}

/* Backdrop blur styles */
.backdrop-blur-sm {
  backdrop-filter: blur(5px);
}

.backdrop-blur-lg {
  backdrop-filter: blur(15px);
}

/* Gradient animation */
.bg-gradient-to-r {
  background-size: 400% 400%;
  animation: dynamicGradient 15s ease infinite;
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

/* Dark mode adjustments */
@media (prefers-color-scheme: dark) {
  .bg-gradient-to-r {
    background: linear-gradient(to right, #1e1e1e, #333333);
  }

  .text-black {
    color: white;
  }
}

/* Utility for containers */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Utility for text centering */
.text-center {
  text-align: center;
}

/* Responsive typography adjustments */
@media (max-width: 768px) {
  .text-5xl {
    font-size: 3rem;
  }

  .text-6xl {
    font-size: 3.5rem;
  }

  .text-7xl {
    font-size: 4rem;
  }
}
</style>
