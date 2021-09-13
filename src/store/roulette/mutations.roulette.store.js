import { UPDATE_ROULETTE } from './constants.roulette.store'

export default {
    [UPDATE_ROULETTE](state, payload) {
        state.spin = payload.spin
        state.number = payload.number
    },
};
