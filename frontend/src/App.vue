<script setup>
import { useAuthStore } from '@/stores/auth'
import Header from '@/components/Header.vue'
import { useRoute } from 'vue-router';
import { watch } from 'vue';

const authStore = useAuthStore()

// 경로 바뀔 때마다 check() 실행
const route = useRoute()
watch(route, () => {
  authStore.check()
})
</script>

<template>
  <v-app>
    <Header v-if="authStore.username" />
    <router-view></router-view>
  </v-app>
</template>

<style scoped>
#logo {
  width: 5%;
  cursor: pointer;
}
</style>