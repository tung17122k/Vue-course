<template>
  <div class="todo-list">
    <ul v-if="isAuthenticated">
      <li v-for="item in todos" :key="item.id">{{ item.title }}</li>
    </ul>
    <p v-else style="text-align: center">Not Authenticated</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    todos: (state) => state.todos,
    isAuthenticated: (state) => state.auth.isAuthenticated,
  }),
};
</script>

<style>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}

.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
