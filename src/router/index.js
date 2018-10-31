import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Vue from "vue";
import Router from "vue-router";
import anonymousOnly from "./guards/anonymous-only";
import authenticatedOnly from "./guards/authenticated-only";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: authenticatedOnly
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: anonymousOnly
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
  ]
});

export default router;
