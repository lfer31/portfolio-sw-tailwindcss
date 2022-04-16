<script setup>
import { onMounted, ref } from 'vue'
import { useAxios } from '@/composables/useAxios'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'

const Axios = useAxios()

const datos = ref([])
const loading = ref(false)

onMounted( async () => {
  try {
    loading.value = true
    const res = await Axios.get('/all.json')
    datos.value = res.data
  } catch (error) {
    console.log('error ', error)
  } finally {
    loading.value = false
  }
})

</script>

<template>
  <Header></Header>
  <div class="container mt-6 mx-auto"> 
    <Search class="mx-auto"></Search>
  </div>
  <h1 v-if="loading">Loading...</h1>
  <div class="container mx-auto grid grid-cols-3 mt-5">
    <div class="h-full p-2 overflow-hidden" v-for="item in datos" :key="item.id">
      <div class="rounded-lg border">
        <img class="w-full h-72 object-cover" :src="item.image" alt="">
        <div class="p-2">
          <h2 class="text-sm font-bold">{{ item.name }}</h2>
          <p class="text-sm text-gray-500">Gender: {{ item.gender }}</p> 
          <p class="text-sm text-gray-500">Homeworld: {{ item.homeworld }}</p>           
        </div>
      </div>
    </div>
  </div>
</template>
