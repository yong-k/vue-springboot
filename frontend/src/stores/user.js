import axios from 'axios'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        users: []
    }),
    getters: {
        getUserById: (state) => {
            return (userId) => state.users.find((user) => user.id === parseInt(userId))
        }
    },
    actions: {
        async getUser(userId) {
            try {
                const response = await axios.get("/api/user/" + userId)
                this.users.push(response.data.user)
                console.log("Call getUser() in actions")
            } catch(err) {
                console.log(err)
                window.alert('예상치 못한 오류가 발생했습니다.');
            }
        }   
    }
})