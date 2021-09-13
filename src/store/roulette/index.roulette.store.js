import actions from "./actions.roulette.store";
import mutations from "./mutations.roulette.store";
import * as getters from "./getters.roulette.store";
import state from "./state.roulette.store";

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
};
