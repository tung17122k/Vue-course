<template>
  <div>
    <ComHeader></ComHeader>
    <div v-show="isShow">
      <h1>Lap trinh</h1>
    </div>
    <button @click="isShow = !isShow">An/hien</button>
  </div>
</template>

<script>
import ComHeader from "./components/ComHeader.vue";

export default {
  name: "App",
  components: {
    ComHeader,
  },
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
