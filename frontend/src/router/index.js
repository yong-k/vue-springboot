import { createRouter, createWebHistory } from 'vue-router'
import UserList from '@/views/UserList.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'userList',
            component: UserList
        },
        {       
            path: '/user/regist',
            name: 'userRegisterform',
            component: () => import('@/views/UserRegisterform.vue')
        },
        {
            path: '/user/detail/:id',
            name: 'userDetail',
            component: () => import('@/views/UserDetail.vue')
        },
        {
            path: '/user/update/:id',
            name: 'userUpdateform',
            component: () => import('@/views/UserUpdateform.vue')
        }
    ]
})

export default router