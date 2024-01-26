<script setup>
import Header from '@/components/Header.vue'
import { ref } from 'vue';
const flag = ref(true)
</script>

<template>
  <v-app>
    <Header v-if="flag" />
    <router-view :flag="flag"></router-view>
  </v-app>
</template>

<style scoped>
#logo {
  width: 5%;
  cursor: pointer;
}
</style>