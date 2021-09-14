import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


const PageUser = () => import("@/pages/user.page");

const routes = [
  {
    path: "/",
    redirect: { path: '/user/1' },
  },
  {
    path: "/user/:userId",
    name: 'Sunrise - Presale',
    component: PageUser,
  },
  { path: "*", redirect: { path: '/user/1' }, }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
