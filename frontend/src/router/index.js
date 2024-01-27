import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import UserList from '@/views/UserList.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/', 
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/user/list',
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
        }, 
        {
            path: '/:pathMatch(.*)',
            redirect: '/'
        }
    ]
})

export default router