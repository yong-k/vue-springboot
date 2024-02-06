<script setup>
import { useAuthStore } from '@/stores/auth'
import Header from '@/components/Header.vue'
import { useRoute } from 'vue-router';
import { watch } from 'vue';
import axios from 'axios';

const authStore = useAuthStore()

function check() {
  axios.get("/api/check")
    .then(res => {
      authStore.username = res.data.username
      console.log("authStore of username: " + authStore.username)
    })
    .catch(err => {
      console.log(err)
      window.alert('예상치 못한 오류가 발생했습니다.')
    })
}

// 경로 바뀔 때마다 check() 실행
const route = useRoute()
watch(route, () => {
  check()
})
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