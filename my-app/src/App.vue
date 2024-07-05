<template>
  <div class="youtube-list">
    <ComHeader v-for="item in YoutubeData" :key="item.id"
    :image="item.image"
    :author="item.author"
    :title ="item.title"
    :avatar="item.avatar"
    ></ComHeader>
    <div v-show="isShow">
      <h1>Lap trinh</h1>
    </div>
    <button @click="isShow = !isShow">An/hien</button>
  </div>
</template>

<script>
import ComHeader from "./components/ComHeader.vue";
import {YoutubeData} from "./data.js"

export default {
  name: "App",
  components: {
    ComHeader,
  },
  data() {
    return {
      isShow: true,
      YoutubeData,
    };
  },
};
</script>

<style>
.youtube-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  padding: 25px;
}</style>
