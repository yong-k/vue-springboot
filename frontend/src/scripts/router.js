import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/views/UserList.vue'
import UserRegisterform from '@/views/UserRegisterform.vue'
import UserDetail from '@/views/UserDetail.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: UserList },
        { path: '/user/regist', component: UserRegisterform },
        { path: '/user/detail', component: UserDetail }
    ]
})

export default router