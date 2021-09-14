import { UPDATE_ROULETTE_SPIN, RESET_ROULETTE_SPIN, UPDATE_BETTING } from './constants.roulette.store'
import {
    BETTING,
} from "@/constants/roulette.constant";

export default {
    [UPDATE_ROULETTE_SPIN](state, payload) {
        state.spin = { ...state.spin, ...payload }
    },
    [RESET_ROULETTE_SPIN](state) {
        state.spin.loading = false
        state.spin.number = 0
        state.spin.id = 1
        state.betting = Object.assign({}, BETTING)
    },
    [UPDATE_BETTING](state, payload) {
        console.log(`UPDATE_BETTING:>>`, payload)
        state.betting = Object.assign({}, payload)
    }
};
