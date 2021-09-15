import http from '@/utils/http.util'
import { UPDATE_USER_LIST } from './constants.user.store'

export default {
    async list({ commit }) {
        try {
            const results = await http.get('/users')
            commit(UPDATE_USER_LIST, {
                list: results.data
            })
        } catch (error) {
            console.log(`error:>>`, error)
        }
    },
};
