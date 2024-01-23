<script setup>
import { useTest2Store } from '@/stores/test2'
import { useRoute } from 'vue-router';

const testStore = new useTest2Store()
const route = useRoute()
testStore.id = route.params.id

// 검색한 user들 pinia store에 userList에 저장해놓고,
// id로 검색해서 있으면 가져오면 되나?

</script>

<template>
    <h3>TEST2</h3>

</template>