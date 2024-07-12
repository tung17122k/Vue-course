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
</template>

<script>
import ComHeader from "./components/ComHeader.vue";
import DispatchDB from "./components/DispatchDB.vue";
import NavbarListComponent from "./components/NavbarListComponent.vue";
import StatusBar from "./components/StatusBar.vue";
import TodosList from "./components/TodosList.vue";
import { YoutubeData } from "./data.js";

export default {
  name: "App",
  components: {
    ComHeader,
    DispatchDB,
    NavbarListComponent,
    TodosList,
    StatusBar,
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
