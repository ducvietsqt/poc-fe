import { UPDATE_WALLET } from "./constants.wallet.store";
export default {
  [UPDATE_WALLET](state, { provider }) {
    state.provider = { ...state.provider, ...provider }
  }
};
