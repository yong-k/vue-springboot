<script setup>
import router from '@/scripts/router';
import axios from 'axios';
import { reactive } from 'vue'

const form = reactive({
  name: "",
  username: "",
  email: "",
  password: "",
  address: "",
  phone: "",
  website: "",
  company: ""
})

const submit = () => {
  axios.post("/api/user", form).then((res) => {
    if (res.data.code === 0) 
      router.push({ path: "/" })
    else 
      window.alert('오류가 발생했습니다. 다시 시도해주세요.')
  })
}
</script>

<template>
  <h3>회원 등록</h3>
  <v-sheet width="400" class="mx-auto">
    <v-form>
      <v-text-field label="name" v-model="form.name" />
      <v-text-field label="username" v-model="form.username" />
      <v-text-field label="email" v-model="form.email" />
      <v-text-field label="password" type="password" v-model="form.password" />
      <v-text-field label="password-check" type="password" />
      <v-text-field label="address" v-model="form.address" />
      <v-text-field label="phone" v-model="form.phone" />
      <v-text-field label="website" v-model="form.website" />
      <v-text-field label="company" v-model="form.company" />
      <v-btn @click="submit()" block class="mt-2" color="#5865f2" size="large">등록</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped>
</style>
