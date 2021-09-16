import Vue from "vue";
import VueRouter from "vue-router";
import { DEFAULT_USER } from '@/env'

Vue.use(VueRouter);


const PageUser = () => import("@/pages/user.page");

const routes = [
  {
    path: "/",
    redirect: { path: `/user/${DEFAULT_USER}` },
  },
  {
    path: "/user/:userId",
    name: 'Sunrise - Presale',
    component: PageUser,
  },
  { path: "*", redirect: { path: `/user/${DEFAULT_USER}` }, }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
