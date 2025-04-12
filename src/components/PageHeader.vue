<template>
  <section class="hero min-h-screen bg-gradient-to-r from-gray-800 to-gray-700 text-white relative overflow-hidden">
    <div class="hero-content text-center px-6 py-12 relative z-10">
      <div class="max-w-2xl mx-auto">
        <h1 class="text-6xl font-extrabold tracking-wide mb-6 font-serif animate__animated animate__fadeIn animate__delay-1s text-gradient">
          Hello, I'm <span class="text-accent">Hemingtsai</span>
        </h1>
        <p class="text-lg mb-8 font-serif font-normal leading-relaxed animate__animated animate__fadeIn animate__delay-2s typing-effect">
          A passionate software developer & student, crafting elegant applications using Vue.js, TailwindCSS & DaisyUI.
        </p>
      </div>
    </div>

    <!-- 动态背景 -->
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 to-gray-800 opacity-40 animate__animated animate__fadeIn animate__delay-3s"></div>
    <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-transparent opacity-20 animate__animated animate__slideInLeft animate__delay-4s"></div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection',
};
</script>

<style scoped>
.hero {
  font-family: 'Merriweather', serif;
}

.animate__animated {
  animation-duration: 1s;
  animation-timing-function: ease-out;
}

/* 动画效果 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

/* 让背景渐变动态变化 */
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

/* 动态背景 */
.hero .bg-gradient-to-r {
  background-size: 400% 400%;
  animation: dynamicGradient 15s ease infinite;
}

/* 为文字添加进场动画 */
.hero-content h1 {
  animation-name: fadeInText;
  animation-delay: 0.5s;
}

@keyframes fadeInText {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-content p {
  animation-name: fadeInText;
  animation-delay: 1s;
}

/* Typing effect */
@keyframes typing {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.typing-effect {
  display: inline-block;
  width: 0;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 3s steps(40) 1s forwards, blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

/* Text gradient effect */
.text-gradient {
  background: linear-gradient(to right, #4A5568, #2D3748); /* 更冷静的灰蓝色渐变 */
  background-clip: text;
  color: transparent;
}

/* Text shake animation */
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-3px);
  }
  50% {
    transform: translateX(3px);
  }
  75% {
    transform: translateX(-3px);
  }
  100% {
    transform: translateX(0);
  }
}

.hero-content h1 {
  animation: shake 0.5s ease infinite;
}

/* 调整颜色 */
.text-accent {
  color: #FFB86C; /* 柔和的金黄色，具有现代感但不过于亮眼 */
}
</style>
