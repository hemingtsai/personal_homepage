<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="navbar bg-base-100">
    <a class="btn btn-ghost text-xl">Hmtsai's Website</a>
    <div class="grow"></div>
    <a class="btn btn-ghost text-lg" href="https://blog.hmtsai.cn">Blog</a>
  </div>

  <RouterView />

  <footer class="footer bg-neutral text-neutral-content p-10">
    <aside>
      <p>Hmtsai's Personal Website 2024 💗 Forever</p>
      <p>Copyright © 2025 - All right reserved by Hemingtsai.</p>
    </aside>
    <nav>
      <h6 class="footer-title">Projects</h6>
      <a class="link link-hover" href="https://study-area.org.cn">Study Area CN</a>
      <a class="link link-hover" href="https://git.hmtsai.cn">Hmtsai Gitea</a>
    </nav>
    <nav>
      <h6 class="footer-title">Me</h6>
      <a class="link link-hover">About me</a>
      <a class="link link-hover">Contact me</a>
      <a class="link link-hover">Blog</a>
    </nav>
  </footer>
</template>

<style scoped></style>
