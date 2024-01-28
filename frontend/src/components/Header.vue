<script setup>
import { ref } from 'vue';

let isVisible = ref('true')

if (window.location.pathname === '/') 
    isVisible = false
else
    isVisible = true
</script>

<template>
    <div id="header" v-if="isVisible">
        <router-link to="/">
            <img id="logo" src="/vue-home.png" to="/">
        </router-link>
        <div class="header-right-box">
            <a href="">로그인</a>
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