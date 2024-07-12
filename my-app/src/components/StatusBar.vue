<template>
  <div class="status-bar">
    <h1>Done</h1>
    <ul>
      <li v-for="item in completedTodos" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
  <div class="progress-bar">
    <h1>Progress: {{ progress }}%</h1>
  </div>
</template>

<script>
// import { mapState } from "vuex";
export default {
  computed: {
    completedTodos() {
      return this.$store.state.todos.filter((item) => item.completed);
    },
    todo() {
      return this.$store.state.todos;
    },
    progress() {
      return Math.round(
        (this.$store.state.todos.filter((item) => item.completed).length /
          this.$store.state.todos.length) *
          100
      );
    },
  },
};
</script>

<style scoped>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
.status-bar {
  padding: 5px;
  /* text-align: center; */
  background: rgb(240, 240, 240);
  color: black;
}
.status-bar ul li {
  margin-left: 0;
  background: rgb(240, 240, 240);
  color: black;
  list-style-type: none;
}
</style>
