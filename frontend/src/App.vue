<script setup>
</script>

<template>
  <router-link to="/">
    <img id="logo" src="/favicon.ico" to="/">
  </router-link>
  <router-view></router-view>
</template>

<style scoped>
#logo {
  width: 5%;
  cursor: pointer;
}
</style>