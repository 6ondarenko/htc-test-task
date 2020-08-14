import Vue from "vue";
import VueRouter from "vue-router";
import Films from "../pages/Films.vue";
import Film from "../pages/Film.vue";
import Category from "../pages/Category.vue";
import Channels from "../pages/Channels.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Films",
    component: Films
  },
  {
    path: "/category/:category_id",
    name: "Category",
    component: Category,
    props: true
  },
  {
    path: "/film/:film_id",
    name: "Film",
    component: Film,
    props: true
  },
  {
    path: "/channels",
    name: "Channels",
    component: Channels
  }
];

const router = new VueRouter({
  routes
});

export default router;
