<script setup>
import router from '@/scripts/router';
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const userInfo = ref([])

axios.get(`/api/user/${ route.params.id }`).then((res) => {
  userInfo.value = res.data.user
})

const deleteUser = () => {
  if (window.confirm("삭제하시겠습니까?")) {
    axios.delete(`/api/user/${ route.params.id }`).then((res) => {
      if (res.data.code === 0) {
        window.alert('삭제가 완료되었습니다.');
        router.push({ path: "/" })
      } else {
        window.alert('오류가 발생했습니다. 다시 시도해주세요.')
      }
    })
  }
}
</script>

<template>
  <h3>회원 정보</h3>
  <v-sheet width="400" class="mx-auto">
    <v-form>
      <v-text-field label="name" v-model="userInfo.name" readonly />
      <v-text-field label="username" v-model="userInfo.username" readonly />
      <v-text-field label="email" v-model="userInfo.email" readonly />
      <v-text-field label="address" v-model="userInfo.address" readonly />
      <v-text-field label="phone" v-model="userInfo.phone" readonly />
      <v-text-field label="website" v-model="userInfo.website" readonly />
      <v-text-field label="company" v-model="userInfo.company" readonly />
    </v-form>
  </v-sheet>
   <div class="btn-center-box">
    <v-btn :to="'/user/update/' + userInfo.id" class="first-btn" variant="flat" color="#5865f2" size="large">수정</v-btn>
    <v-btn @click="deleteUser()" class="second-btn" variant="flat" color="#5865f2" size="large">삭제</v-btn>
  </div>
</template>

<style scoped>
</style>
