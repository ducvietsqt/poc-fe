import { UPDATE_USER_LIST, UPDATE_USER_DETAIL } from "./constants.user.store";

export default {
  [UPDATE_USER_LIST](state, { list }) {
    state.list = [].concat(list)
  },
  [UPDATE_USER_DETAIL](state, { bettings }) {
    state.detail.bettings = [].concat(bettings)
  }
};
