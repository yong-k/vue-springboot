import axios from 'axios'
import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useUserStore = defineStore('user', () => {
    const users = reactive(new Map())
    
    async function getUser(userId) {
        try {
            const response = await axios.get("/api/user/" + userId)
            this.users.set(userId, response.data.user)
            console.log("Call getUser() in actions")
        } catch(err) {
            console.log(err)
            window.alert('예상치 못한 오류가 발생했습니다.');
        }
    }

    return { users, getUser }
})