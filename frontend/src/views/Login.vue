<script setup>
import router from '@/router/router';
import { useAuthStore } from '@/stores/auth'
import axios from 'axios';
import { ref, reactive } from 'vue';

const authStore = useAuthStore()
let submitFlag = ref(true)
const form = reactive({
  username: "",
  password: "",
})

const rules = {
  required: value => !!value || '필수 항목입니다.'
}

function submit() {
  let username = form.username
  let password = form.password
  
  if (!username || !password) {
    submitFlag.value = false 
    return false
  }
  else {
    login(username, password)
  }
}

function login(username, password) {
  axios.post("/api/login", {
      username: username,
      password: password
    })
    .then(res => {
      authStore.username = res.data.username
      router.push({ path: "/user/list" })
    })
    .catch(err => {
      console.log(err)
      window.alert('예상치 못한 오류가 발생했습니다.')
    })
}
</script>

<template>
  <div class="container">
    <div class="login-box">
      <h3 class="page-title">로그인</h3>
      <v-sheet width="400" class="mx-auto">
        <v-form>
          <v-text-field label="username" v-model="form.username" :rules="[rules.required]" 
          @keyup.enter="submit()" />
          <v-text-field label="password" type="password" v-model="form.password" :rules="[rules.required]" 
          @keyup.enter="submit()" />
          <input type="hidden" name="_token" v-bind:value="csrf">
          <v-btn @click="submit()" block class="mt-2" color="#5865f2" size="large" style="height: 54px;">로그인</v-btn>
          <span v-if="!submitFlag" class="error-msg">아이디와 비밀번호를 모두 입력해주세요.</span>
        </v-form>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped>
div.login-box {
  margin-top: 10%;
}

.login-box h3.page-title {
  text-align: center;
  font-size: 20px;
  margin-bottom: 2%;
}

span.error-msg {
  display: inline-block;
  margin-top: 2%;
  color: #B00020;
}
</style>
