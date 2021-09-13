import { UPDATE_ROULETTE, RESET_ROULETTE, UPDATE_BETTING } from './constants.roulette.store'
import {
    BETTING,
} from "@/constants/roulette.constant";

export default {
    [UPDATE_ROULETTE](state, payload) {
        state.spin = payload.spin
        state.number = payload.number
    },
    [RESET_ROULETTE](state) {
        state.spin = false
        state.number = 0
        state.betting = Object.assign({}, BETTING)
    },
    [UPDATE_BETTING](state, payload) {
        console.log(`UPDATE_BETTING:>>`, payload)
        state.betting = Object.assign({}, payload)
    }
};
