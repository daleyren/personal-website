import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReadingView from "../views/ReadingView.vue";
import WritingView from "../views/WritingView.vue";
import LinksView from "../views/LinksView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/reading",
      name: "reading",
      component: ReadingView,
    },
    {
      path: "/writing",
      name: "writing",
      component: WritingView,
    },
    {
      path: "/links",
      name: "links",
      component: LinksView,
    },
  ],
});

export default router;
