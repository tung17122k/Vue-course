<template>
  <div class="youtube-list">
    <ComHeader
      v-for="item in YoutubeData"
      :key="item.id"
      :image="item.image"
      :author="item.author"
      :title="item.title"
      :avatar="item.avatar"
    ></ComHeader>
  </div>
  <DispatchDB></DispatchDB>
  <NavbarListComponent></NavbarListComponent>
  <TodosList></TodosList>
  <StatusBar></StatusBar>
  <div class="flex flex-col-3 gap-5 p-3 mt-5 mb-5">
    <CardTailwind></CardTailwind>
    <CardTailwind></CardTailwind>
    <CardTailwind></CardTailwind>
  </div>
  <HackerNews class="mt-[60px]"></HackerNews>
  
</template>

<script>
import ComHeader from "./components/ComHeader.vue";
import DispatchDB from "./components/DispatchDB.vue";
import NavbarListComponent from "./components/NavbarListComponent.vue";
import StatusBar from "./components/StatusBar.vue";
import TodosList from "./components/TodosList.vue";
import CardTailwind from "./components/CardTailwind.vue";
import HackerNews from "./components/HackerNews.vue";
import { YoutubeData } from "./data.js";

export default {
  name: "App",
  components: {
    ComHeader,
    DispatchDB,
    NavbarListComponent,
    TodosList,
    StatusBar,
    CardTailwind,
    HackerNews
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
}
</style>
