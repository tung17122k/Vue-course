<template>
  <div>
    <ComHeader
      image="https://images.unsplash.com/photo-1719176372344-b29f6613e870?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      title="Leaning Vue"
    ></ComHeader>
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

<style></style>
