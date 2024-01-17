<script setup>
import axios from 'axios';
import { ref } from 'vue';

const userList = ref([])
const pageNum = ref(1)
//const numOfRows = ref(10)
const numOfRows = ref(5)
const totalPages = ref(0)

axios.get("/api/user?numOfRows=" + numOfRows.value).then(res => {
  userList.value = res.data.userList
  totalPages.value = res.data.page.totalPages
})

function pageDown() {
  pageNum.value--
  axios.get("/api/user?pageNum=" + pageNum.value + "&numOfRows=" + numOfRows.value).then(res => {
    userList.value = res.data.userList
  })
}

function pageUp() {
  pageNum.value++
  axios.get("/api/user?pageNum=" + pageNum.value + "&numOfRows=" + numOfRows.value).then(res => {
    userList.value = res.data.userList
  })
}
</script>

<template>
  <table class="table table-hover">
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
      <tr v-for="user in userList" :key="user">
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
  </table>

  <div class="btn-box">
    <button @click="pageDown" class="btn btn-primary" :disabled="pageNum - 1 === 0">prev</button>
    <span id="nowPageNum">{{ pageNum }}</span>
    <button @click="pageUp" class="btn btn-primary" :disabled="pageNum === totalPages">next</button>
  </div>
</template>

<style scoped>
.btn-box {
  padding-top: 10px;
  text-align: center;
}

button {
  margin-left: 5px;
  width: 70px;
}

span#nowPageNum {
  margin: 0 2%;
  font-size: 17px;
}
</style>
