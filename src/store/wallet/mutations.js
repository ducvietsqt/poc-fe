import { UPDATE_WALLET } from "./constants";
export default {
  [UPDATE_WALLET](state, { provider }) {
    state.provider = { ...state.provider, ...provider }
  }
};
