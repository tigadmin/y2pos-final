import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
    path: "/",
    name: "home",
    component: Home
    },
  {
    path: '/meeting',
    target: '_blank',
    beforeEnter () { location.href = 'https://www.yumapos.com/restaurant-support' }
  },
  {
    path: '/contact-yuma',
    target: '_blank',
    beforeEnter () { location.href = 'https://www.yumapos.com/restaurant-support' }
  },
  {
    path: "/restaurant-pos-platform",
    name: "pos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pos" */ "../views/Pos.vue")
  },
  {
    path: "/restaurant-pos-quote-pricing",
    name: "quoteco",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pos" */ "../views/Quote.vue")
  },
  {
    path: "/restaurant-support",
    name: "support",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "pos" */ "../views/Support.vue")
  },
  {
  path: "/restaurant-website-mobile",
  name: "webapps",
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () =>
  import(/* webpackChunkName: "pos" */ "../views/WebApps.vue")
},
  {
    path: "/online-ordering-restaurants",
    name: "onlineorderingrestaurants",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "onlineorderingrestaurants" */ "../views/OnlineOrderingRestaurants.vue")
  },
    {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
];

const router = new VueRouter({
  //mode: "history",//
  base: process.env.BASE_URL,
  routes
});

export default router;
