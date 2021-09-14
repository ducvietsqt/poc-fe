import http from '@/utils/http.util'
import { UPDATE_USER_LIST, UPDATE_USER_DETAIL } from './constants.user.store'

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
    async detail({ commit }, { userId }) {
        try {
            console.log(`userId:>>`, userId)
            const results = await http.get(`/users/${userId}/bettings`)
            console.log(`results:>>`, results)
            commit(UPDATE_USER_DETAIL, {
                bettings: results.data
            })
        } catch (error) {
            console.log(`error:>>`, error)
        }
    },
};
