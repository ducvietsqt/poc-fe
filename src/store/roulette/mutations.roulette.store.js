import { UPDATE_ROULETTE_SPIN, RESET_ROULETTE_SPIN } from './constants.roulette.store'

export default {
    [UPDATE_ROULETTE_SPIN](state, payload) {
        state.spin = { ...state.spin, ...payload }
    },
    [RESET_ROULETTE_SPIN](state) {
        state.spin.loading = false
        state.spin.number = -1
        state.spin.id = null
    },
};
