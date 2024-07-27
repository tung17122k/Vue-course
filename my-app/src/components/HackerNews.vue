<template>
    <div class="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4  mb-5">
      <div class="flex mb-5 gap-x-5 flex-shrink-0">
        <input
          type="text"
          class="border border-gray-200 p-5 block w-full rounded-md  transition-all focus:border-blue-400"
          placeholder="Typing key word"
          v-model="query"
        />
        <button
          class="bg-blue-500 text-white font-semibold p-5 rounded-md"
          @click = "fetchData"
        >
          Featching
        </button>
      </div>
        <p class="text-red-500 my-5">Error</p>
      <div class="flex flex-wrap gap-5">
        <div v-for="item in getResults" :key="item.id" class="p-3 bg-gray-100 rounded-md">
          <h3 :key="item.id"> {{item.title}}</h3>
        </div>
      </div>
    </div>
  </template>
  
  <script>
import { mapActions, mapGetters } from 'vuex';

// import { mapActions } from 'vuex';
// import axios from 'axios';

 
  // import { mapState } from "vuex";

  export default {
    data(){
      return {
        query:''
        
      }
    },
    computed: {
      ...mapGetters(
        {
          getResults: 'getResults'
        }
      ),
      error() {
        return this.$store.state.error;
      },
    },
    methods: {
      ...mapActions({
        fetchData: 'fetchData',
      }),
    },
    mounted(){
      
      
    }
  };
  </script>
  <style></style>