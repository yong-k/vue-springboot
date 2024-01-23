<script setup>
import { useTestStore } from '@/stores/test'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const testStore = new useTestStore()
const { user, userInfoCallCount } = storeToRefs(testStore)
const route = useRoute()
testStore.id = route.params.id

// 1)
onMounted(async() => {
    if (testStore.user === null) {
        await testStore.getData() 
        testStore.user = testStore.userInfo
    }
})

// 2)
async function check()  {
    if (testStore.user === null) {
        await testStore.getData() 
        testStore.user = testStore.userInfo
    }
}

// 3)
function no_check()  {
    testStore.getData()
    testStore.user = testStore.userInfo
}


</script>

<template>
    <h3>TEST</h3>
    <h1>Call cnt: {{ userInfoCallCount }}</h1>   <br><br>

    <!-- 1) -->
    {{ user }}

    <br><br>

    <!-- 2) check -->
    <br><br><v-btn color="#dddddd" @click="check"
    >Before check</v-btn> <br><br>
    {{ user }}
    
    <!-- 3) no_check -->
    <br><br><v-btn color="#dddddd" @click="no_check"
    >Not check</v-btn> <br><br>
    {{ user }}

</template>