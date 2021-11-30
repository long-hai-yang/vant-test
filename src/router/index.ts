import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../pages/home/home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes,
});
export default router;
