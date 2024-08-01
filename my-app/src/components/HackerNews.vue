<template>
   <div class="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4 mb-5">
    <div class="flex mb-5 gap-x-5 flex-shrink-0">
      <input
        v-model="query"
        type="text"
        class="border border-gray-200 p-5 block w-full rounded-md transition-all focus:border-blue-400"
        placeholder="Typing key word"
      />
      <button
        class="bg-blue-500 text-white font-semibold p-5 rounded-md"
        @click="fetchData"
      >
        Fetching
      </button>
    </div>

    <div v-if="loading" class="loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin mx-auto my-10"></div>
    <p v-if="error" class="text-red-500 my-5">{{ error }}</p>
    <div class="flex flex-wrap gap-5">
      <h3
        v-for="item in data"
        :key="item.id"
        class="p-3 bg-gray-100 rounded-md"
      >
        {{ item.title }}
      </h3>
    </div>
  </div>
  </template>
  
  <script>
import axios from 'axios';

  export default {
    data(){
      return {
      data: [],
      query: '',
      loading: true,
      error: '',
      url: "https://hn.algolia.com/api/v1/search?query=''",
    };
    },   
    methods: {
    async fetchData() {
      this.loading = true;
      setTimeout( async () => {
        try {
        const response = await axios.get(this.url);
        this.data = response.data?.hits || [];
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.error = `Error: ${error}`;
      }
      }, 1000)
      
      
    },
  },
  watch: {
    query(newQuery) {
      this.url = `https://hn.algolia.com/api/v1/search?query=${newQuery}`;
    },
  },
  mounted() {
    this.fetchData();
    
  },
  };
  </script>
  <style></style>