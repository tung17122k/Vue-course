import { createStore } from "vuex";
import axios from 'axios';


const store = createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "Learn Vue",
        completed: false,
      },
      {
        id: 2,
        title: "Learn JS",
        completed: true,
      },
      {
        id: 3,
        title: "Learn React",
        completed: true,
      },
    ],
    auth: {
      isAuthenticated: true,
    },
    results: [],
    error: '',
    query: ''
    
  },
  getters: {
      completedTodos: state => state.todos.filter(item => item.completed),
      todos: state => state.todos,
      progress: (state, getters) => {
        return Math.round((getters.completedTodos.length / state.todos.length) * 100)
      },
      getResults: state => state.results,
  },
  mutations: {
    TOGGLE_AUTH(state){
      state.auth.isAuthenticated = !state.auth.isAuthenticated
    },
    MARK_COMPLETED(state, itemId) {
      state.todos.map(item => {
        if(item.id === itemId) item.completed = !item.completed
        return item
      })
    },
    SET_RESULTS(state,results){
      state.results = results;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions:{
    async fetchData({commit}, query){     
      try {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
        commit('SET_RESULTS', response.data.hits);
        // console.log(response.data.hits);
      }catch(error) {
        console.log(error);
        commit ('SET_ERROR', error)
      }
    },
  }
});

export default store;
