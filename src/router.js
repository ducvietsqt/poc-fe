import Vue from "vue";
import VueRouter from "vue-router";
import { DEFAULT_USER } from '@/env'
import http from "./utils/http.util";
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
    async beforeEnter(to, from, next) {
      try {
        console.log(`beforeRouteEnter:>>`, to.params)
        const { data } = await http.get('/users')
        const isExist = data.some(item => item.id == to.params.userId)
        if (isExist) return next()
        return next(`/user/${data[0].id}`)
      } catch (error) {
        console.log(`error:>>`, error)
        next('/404')
      }
    },
    component: PageUser,
  },
  { path: "*", redirect: { path: `/user/${DEFAULT_USER}` } }
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
