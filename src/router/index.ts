import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BlogView from "@/views/BlogView.vue";
import PostView from "@/views/PostView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/post/:id",
      name: "post",
      component: PostView,
    }
  ],
});

export default router;
