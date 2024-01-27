<script setup>
import Header from '@/components/Header.vue'
</script>

<template>
  <v-app>
    <Header />
    <router-view></router-view>
  </v-app>
</template>

<style scoped>
#logo {
  width: 5%;
  cursor: pointer;
}
</style>