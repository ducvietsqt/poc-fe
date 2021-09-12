import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import VModal from 'vue-js-modal'
import VueClipboard from "vue-clipboard2";
import Notifications from 'vue-notification'

Vue.config.productionTip = false;

import "@/assets/style.less";

//Vue-filter START
Vue.use(VModal)
Vue.use(VueClipboard);
Vue.use(Notifications)

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
