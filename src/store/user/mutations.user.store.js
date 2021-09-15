import { UPDATE_USER_LIST, RESET_USER, UPDATE_USER_DETAIL, UPDATE_USER_HISTORY } from "./constants.user.store";

export default {
  [UPDATE_USER_LIST](state, { list }) {
    state.list = [].concat(list)
  },
  [UPDATE_USER_DETAIL](state, payload) {
    state.detail = { ...state.detail, ...payload }
  },
  [UPDATE_USER_HISTORY](state, payload) {
    state.history = { ...payload }
  },
  [RESET_USER](state) {
    state.list = []
    state.detail = {
      id: null,
      address: "",
      betting: [],
    }
    state.history = {}
  },
};
