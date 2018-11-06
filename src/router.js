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

      component: () => import("./views/AmericanArtists.vue")
    },
    {
      path: "/dutch-artists",
      name: "dutch-artists",
      component: () => import("./views/DutchArtists.vue")
    },
    {
      path: "/spanish-artists",
      name: "spanish-artists",
      component: () => import("./views/SpanishArtists.vue")
    }
  ]
});
