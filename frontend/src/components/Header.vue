<script setup>
import axios from 'axios';
import { ref } from 'vue';

let isVisible = ref('true')

if (window.location.pathname === '/') 
    isVisible = false
else
    isVisible = true

function logout() {
    axios.post("/api/logout")
    .then(res => {
        console.log('로그아웃')
        console.log("code: " + res.data.code)
    })
    .catch(err => {
        console.log(err)
        window.alert('예상치 못한 오류가 발생했습니다.')
    })
}
</script>

<template>
    <div id="header" v-if="isVisible">
        <router-link to="/">
            <img id="logo" src="@/assets/vue-home.png" to="/">
        </router-link>
        <div class="header-right-box">
            <!-- <a href="">로그인</a> -->
            <a @click="logout()">로그아웃</a>
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
</style>