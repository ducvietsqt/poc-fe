import { UPDATE_ROULETTE_SPIN } from './constants.roulette.store'
import http from '@/utils/http.util'

export default {
    async spin({ commit }) {
        try {
            const result = await http.post('/spins')
            commit(UPDATE_ROULETTE_SPIN, {
                loading: true,
                number: result.data
            })
        } catch (error) {
            console.log(`error:>>`, error)
        }
    },
    async getCurrent({ commit }) {
        try {
            const result = await http.get('/spins')
            commit(UPDATE_ROULETTE_SPIN, {
                id: result.data
            })
        } catch (error) {
            console.log(`error:>>`, error)
        }
    }
};
