<script setup>
import router from '@/router/router'
import axios from 'axios'
import { ref } from 'vue'

const NUM_OF_ROWS = 10
const userList = ref([])
const pageNum = ref(1)
const totalPages = ref(0)

const showUserDetail = (id) => {
  router.push({ path: "/user/detail/" + id })
}

function pageDown() {
  pageNum.value--
  axios.get("/api/user?pageNum=" + pageNum.value + "&numOfRows=" + NUM_OF_ROWS)
    .then(res => {
      userList.value = res.data.userList
    })
    .catch(err => {
      console.log(err)
      window.alert('예상치 못한 오류가 발생했습니다.')
    })
}

function pageUp() {
  pageNum.value++
  axios.get("/api/user?pageNum=" + pageNum.value + "&numOfRows=" + NUM_OF_ROWS)
    .then(res => {
      userList.value = res.data.userList
    })
    .catch(err => {
      console.log(err)
      window.alert('예상치 못한 오류가 발생했습니다.');
    })
}

axios.get("/api/user?numOfRows=" + NUM_OF_ROWS)
  .then(res => {
    userList.value = res.data.userList
    totalPages.value = res.data.page.totalPages
  })
  .catch(err => {
    console.log(err)
    window.alert('예상치 못한 오류가 발생했습니다.');
  })
</script>

<template>
  <div class="container">
    <div class="btn-right-box">
      <v-btn to="/user/regist" variant="flat" color="#5865f2" id="insert-btn">회원 등록</v-btn>
    </div>
    <v-table>
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">username</th>
          <th scope="col">email</th>
          <th scope="col">address</th>
          <th scope="col">phone</th>
          <th scope="col">website</th>
          <th scope="col">company</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user" @click="showUserDetail(user.id)">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.website }}</td>
          <td>{{ user.company }}</td>
        </tr>
      </tbody>
    </v-table>
  
    <div class="btn-center-box">
      <v-btn class="first-btn" variant="flat" color="#5865f2" @click="pageDown" :disabled="pageNum - 1 === 0">prev</v-btn>
      <span id="nowPageNum">{{ pageNum }}</span>
      <v-btn class="second-btn" variant="flat" color="#5865f2" @click="pageUp" :disabled="pageNum === totalPages">next</v-btn>
    </div>
  </div>
</template>

<style scoped>
table tbody tr:hover {
  background-color: #eeeeee;
  cursor: pointer;
}

span#nowPageNum {
  margin: 0 2%;
  font-size: 17px;
}
</style>
