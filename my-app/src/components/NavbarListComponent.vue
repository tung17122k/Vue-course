<template>
  <div class="navbar">
    <h1>My vue Todo list</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="isAuthenticated">
        Total Todo: {{ totalTodos }}
        <button>Logout</button>
      </li>
      <button v-else>Login</button>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    totalTodos: (state) => state.todos.length,
    isAuthenticated: (state) => state.auth.isAuthenticated,
  }),
};
</script>

<style scoped>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
</style>
