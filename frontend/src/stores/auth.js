import router from '@/router/router'
import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const username = ref(null)

    function login(form) {
        axios.post("/api/login", form, {
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            this.username = res.data.username
            router.push({ path: "/user/list" })
        })
        .catch(err => {
            console.log(err)
            window.alert('예상치 못한 오류가 발생했습니다.')
        })
    }

    function logout() {
        axios.post("/api/logout")
        .then(res => {
            router.push({ path: "/login" })
        })
        .catch(err => {
            console.log(err)
            window.alert('예상치 못한 오류가 발생했습니다.')
        })
    }

    function check() {
        axios.get("/api/check")
        .then(res => {
            this.username = res.data.username
            console.log("authStore of username: " + this.username)
        })
        .catch(err => {
            console.log(err)
            window.alert('예상치 못한 오류가 발생했습니다.')
        })
    }

    return { username, login, logout, check }
})