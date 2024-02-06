<script setup>
import { useUserStore } from '@/stores/user'
import router from '@/router/router'
import axios from 'axios'
import { onMounted } from 'vue';
import { ref, reactive } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id 
const userStore = useUserStore()
const { getUser } = userStore
const userInfo = ref({})
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

const rules = {
  required: value => !!value || '필수 항목입니다.',
  email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || '이메일 형식을 확인해주세요.'
          }
}

const updateUser = () => {
  axios.put("/api/user/" + id, form)
    .then(res => {
      if (res.data.code === 0) {
        userStore.users.set(id, res.data.user) 
        router.push({ path: "/user/detail/" + id })
      } else {
        window.alert('오류가 발생했습니다. 다시 시도해주세요.')
      }
    })
    .catch(err => {
      console.log(err)
      window.alert('예상치 못한 오류가 발생했습니다.');
    })
}

onMounted(async() => {
  if (!userStore.users.get(id))
    await getUser(id)
  
  userInfo.value = userStore.users.get(id)
  form.name = userInfo.value.name
  form.username = userInfo.value.username
  form.email = userInfo.value.email
  form.address = userInfo.value.address
  form.phone = userInfo.value.phone
  form.website = userInfo.value.website
  form.company = userInfo.value.company  
})
</script>

<template>
  <div class="container">
    <h3 class="page-title">회원 정보 수정</h3>
    <v-sheet width="400" class="mx-auto">
      <v-form>
        <v-text-field label="name" v-model="form.name" />
        <v-text-field label="username" v-model="form.username" readonly />
        <v-text-field label="email" v-model="form.email" :rules="[rules.required, rules.email]" />
        <v-text-field label="password" type="password" v-model="form.password" />
        <v-text-field label="password-check" type="password" />
        <v-text-field label="address" v-model="form.address" />
        <v-text-field label="phone" v-model="form.phone" />
        <v-text-field label="website" v-model="form.website" />
        <v-text-field label="company" v-model="form.company" />
        <v-btn @click="updateUser()" block class="mt-2" color="#5865f2" size="large">수정</v-btn>
      </v-form>
    </v-sheet>
  </div>
</template>

<style scoped>
</style>
