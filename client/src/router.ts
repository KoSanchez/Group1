import Vue from "vue";
import Router from "vue-router";
import Home from "./views/customer/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/customer/About.vue")
    },
    {
      path: "/shopall",
      name: "shopall",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/customer/ShopAll.vue")
    },
    {
      path: "/shopbikes",
      name: "shopbikes",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/customer/ShopBikes.vue")
    },
    {
      path: "/shopparts",
      name: "shopparts",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/customer/ShopParts.vue")
    },
    {
      path: "/services",
      name: "services",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/customer/Services.vue")
    },
    {
      path: "/orders",
      name: "orders",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/customer/Orders.vue")
    }
  ]
});
