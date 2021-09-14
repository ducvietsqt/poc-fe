import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import { APP_NAME, APP_VERSION } from '@/env'

import wallet from "./store/wallet/index.wallet.store";
import roulette from "./store/roulette/index.roulette.store";
import user from "./store/user/index.user.store";

Vue.use(Vuex);

const persistenceOptions = {
  key: ["vuex", APP_NAME, APP_VERSION].join("-"),
  storage: window.localStorage
};

export default new Vuex.Store({
  modules: {
    wallet,
    roulette,
    user
  },
  plugins: [new VuexPersistence(persistenceOptions).plugin]
});
