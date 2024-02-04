<script setup>
import { useAuthStore } from '@/stores/auth'
const authStore = useAuthStore()
</script>

<template>
    <div id="header">
        <router-link to="/user/list">
            <img id="logo" src="@/assets/vue-home.png">
        </router-link>
        <div class="header-right-box">
            <span id="username" v-if="authStore.username">{{ authStore.username }} 님</span>
            <router-link to="/login" id="login" v-if="!authStore.username">로그인</router-link>
            <a id="logout" @click="authStore.logout()" v-else>로그아웃</a>
        </div>
    </div>
</template>

<style scoped>
#logo {
  width: 5%;
  cursor: pointer;
}

.header-right-box {
    float: right;
}

.header-right-box #username {
    margin-right: 15px;
}

.header-right-box #login {
    text-decoration: none;
    color: #000000;
}

.header-right-box #logout {
    cursor: pointer;
}
</style>