<template>
  <div>
    <Header />
    <main>
      <div class="container">
        <form @submit.prevent="addTodo">
          <input v-model.prevent="newTodo" type="text" placeholder="Enter Exercise" id="newTodo" />
          <button type="submit" class="add-btn">Add Exercise</button>
        </form>
        <button @click="allDone" name="button" type="button">Mark All Done</button>
        <div class="container-list">
          <h2>Your Exercises</h2>
          <ul>
            <li v-for="todo in todos">
              <input type="checkbox" v-model="todo.done" />
              <span :class="{done: todo.done}">{{todo.title}}</span>
              <button type="button" name="button" @click="removeTodo(todo)">Remove Exercise</button>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// Import Header
import Header from "../components/Header";
// Export
export default {
  name: "todoList",
  components: {
    Header
  },
  // Data Function Create an empty string & array
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  // Methods
  methods: {
    // Adding Todo Item // If newTodo is an empty string
    addTodo() {
      if (!this.newTodo == "") {
        this.todos.push({
          title: this.newTodo,
          done: false
        });
        this.newTodo = "";
      }
    },
    // Storing the index of the todo in a variable so I can remove any list item
    removeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    // Marks all items as done
    allDone() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
main {
  max-width: 600px;
  margin: 0 auto;

  ul {
    margin-top: 5vh;
    align-items: center;
    justify-content: center;
    display: flex;
    color: #000000;
  }

  input[type="text"] {
    margin-top: 1vh;
    height: 50px;
    width: 350px;
    font-size: 1.5rem;
    border: none;
    background-color: #8c8c8c;
    color: #ffffff;
    padding-right: 50px;

    &::placeholder {
      color: #d9d9d9;
    }
  }

  input[type="text"]:focus {
    outline: none;
    background-color: #464646;
  }

  .container {
    margin-top: 5vh;
    height: 70vh;
  }

  .container-list {
    margin-top: 5vh;
  }

  .add-btn {
    font-size: 1.5rem;
    height: 50px;
    background-color: #37a859;
    color: #ffffff;
    margin-left: -55px;
    border: none;
    border-left: 1px solid white;
    cursor: pointer;
  }

  .done {
    text-decoration: line-through;
  }
}
</style>