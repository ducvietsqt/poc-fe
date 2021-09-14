import Vue from "vue";
import App from "./app.vue";
import router from "./router";
import store from "./store";
import http from "./utils/http.util";
import VModal from 'vue-js-modal'
import VueClipboard from "vue-clipboard2";
import Notifications from 'vue-notification'
import "@/assets/style.less";
import Antd from 'ant-design-vue';


Vue.config.productionTip = false;

import "@/plugins/vue-filter-truncate.plugin";
import "@/plugins/vue-filter-currency.plugin";

Vue.use(Antd);
//Vue-filter START
Vue.use(VModal)
Vue.use(VueClipboard);
Vue.use(Notifications)

Vue.prototype.$http = http;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
