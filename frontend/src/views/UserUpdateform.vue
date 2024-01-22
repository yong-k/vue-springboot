<script setup>
import router from '@/scripts/router';
import axios from 'axios';
import { reactive } from 'vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const userInfo = ref([])
const form = reactive({
  name: "",
  username: "",
  email: "",
  address: "",
  phone: "",
  website: "",
  company: ""
})

axios.get(`/api/user/${ route.params.id }`).then((res) => {
  userInfo.value = res.data.user
  form.name = userInfo.value.name
  form.username = userInfo.value.username
  form.email = userInfo.value.email
  form.address = userInfo.value.address
  form.phone = userInfo.value.phone
  form.website = userInfo.value.website
  form.company = userInfo.value.company
})

const updateUser = () => {
  axios.put(`/api/user/${route.params.id}`, form).then((res) => {
    if (res.data.code === 0)
      router.push({ path: `/user/detail/${ route.params.id }` })
    else
      window.alert('오류가 발생했습니다. 다시 시도해주세요.')
  })
}
</script>

<template>
  <h3>회원 정보 수정</h3>
  <v-sheet width="400" class="mx-auto">
    <v-form>
      <v-text-field label="name" v-model="form.name" />
      <v-text-field label="username" v-model="form.username" readonly />
      <v-text-field label="email" v-model="form.email" />
      <v-text-field label="address" v-model="form.address" />
      <v-text-field label="phone" v-model="form.phone" />
      <v-text-field label="website" v-model="form.website" />
      <v-text-field label="company" v-model="form.company" />
      <v-btn @click="updateUser()" block class="mt-2" color="#5865f2" size="large">수정</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped>
</style>
