import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/american-artists",
      name: "american-artists",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "artists" */ "./views/AmericanArtists.vue")
    }
  ]
});
