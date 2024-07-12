import { createStore } from "vuex";

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
  },
});

export default store;
