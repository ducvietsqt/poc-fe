import { UPDATE_ROULETTE } from './constants.roulette.store'
import {
    ROULETTE_NUMBERS_AMOUNT,
} from "@/constants/roulette.constant";


export default {
    async spin({ commit }) {
        const number = Math.floor(
            Math.random() * ROULETTE_NUMBERS_AMOUNT + 0
        );
        commit(UPDATE_ROULETTE, {
            spin: true,
            number: number
        })
    }
};
