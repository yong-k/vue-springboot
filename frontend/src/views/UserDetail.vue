<script setup>
import router from '@/scripts/router';
import axios from 'axios';
//console.log("id: " + $route.params.id)
// axios.get(`/api/user/${ $route.params.id }`).then((res) => {
//   console.log(res.data.user)
// })
</script>

<template>
  id: {{ $route.params.id }}
  <h3>회원 정보</h3>
  <v-sheet width="400" class="mx-auto">
    <v-form>
      <v-text-field label="name" readonly />
      <v-text-field label="username" readonly />
      <v-text-field label="email" readonly />
      <v-text-field label="address" readonly />
      <v-text-field label="phone" readonly />
      <v-text-field label="website" readonly />
      <v-text-field label="company" readonly />
    </v-form>
  </v-sheet>
   <div class="btn-center-box">
    <v-btn class="first-btn" variant="flat" color="#5865f2" size="large">수정</v-btn>
    <v-btn class="second-btn" variant="flat" color="#5865f2" size="large">삭제</v-btn>
  </div>
</template>

<style scoped>
</style>
