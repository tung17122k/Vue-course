<template>
  <div class="todo-list">
    <ul v-if="isAuthenticated">
      <li v-for="item in todos" :key="item.id" :class="item.completed ? 'completed' : ''">{{ item.title }}
        <input type="checkbox" :checked = "item.completed" @change="markComplete(item.id)">
      </li> 
    </ul>
    <p v-else style="text-align: center" >Not Authenticated</p>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapState } from "vuex";
export default {
  computed: mapState({
    todos: (state) => state.todos,
    isAuthenticated: (state) => state.auth.isAuthenticated,
  }),
  methods: {
    markComplete(itemId){
      this.$store.commit('MARK_COMPLETED',itemId)
    },
  }
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
.todo-list li input[type='checkbox'] {
 -ms-transform: scale(2); /* IE */
 -moz-transform: scale(2); /* FF */
 -webkit-transform: scale(2); /* Safari and Chrome */
 -o-transform: scale(2); /* Opera */
 transform: scale(2);
 padding: 10px;
 float: right;
}
.todo-list li.completed {
 background: rgb(119, 218, 243);
}
</style>
