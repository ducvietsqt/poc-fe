import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);



const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: PageHome,
  //   meta: {
  //     title: "Home Page"
  //   }
  // },
  // { path: "*", component: PageHome }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
