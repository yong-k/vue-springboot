<script setup>
</script>

<template>
    <div id="header">
        <router-link to="/">
            <img id="logo" src="/favicon.ico" to="/">
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