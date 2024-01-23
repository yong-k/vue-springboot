import axios from 'axios'
import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
    state: () => ({
        id: 0,
        user: null,
        userInfoCallCount: 0
    }),
    getters: {
        userInfo: (state) => {
            state.userInfoCallCount++   // 테스트
            return state.user
        }
    },
    actions: {
        getData() {
            axios.get("/api/user/" + this.id)
            .then(res => {
                this.user = res.data
                console.log("Call getData() in actions")    // 테스트
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
})