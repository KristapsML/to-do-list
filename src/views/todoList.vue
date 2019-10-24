<template>
  <div id="app">
    <!-- Header Component -->
    <Header />
    <!-- Wrapper -->
    <section class="wrapper">
      <!-- To-Do form -->
      <form class="new-todo-form">
        <label class="new-todo-label">
          New Todo:
          <!-- V-model newTodo - the string from input gets passed with @click -->
          <input v-model="newTodo" type="text" class="new-todo-input" />
        </label>
        <button type="submit" @click.prevent="addTodo()" class="new-todo-button">Add</button>
      </form>
      <ul class="todo-list">
        <li v-for="todo in todos" :key="todo.id" class="todo-item">
          <label v-if="currentlyEditing !== todo.id" class="todo-item-label">
            <input
              type="checkbox"
              v-model="todo.completed"
              @change="updateTodo(todo)"
              class="todo-item__checkbox"
            />
            {{todo.text}}
          </label>
          <div v-if="currentlyEditing !== todo.id">
            <button @click="editTodo(todo)" class="todo-button">
              <img src="../assets/pencil.svg" alt="Edit todo" />
            </button>
            <button @click="deleteTodo(todo)" class="todo-button">
              <img src="../assets/trash.svg" alt="Delete todo" />
            </button>
          </div>
          <form v-else class="edit-todo-form">
            <label class="edit-todo-label">
              Edit Exercise:
              <input type="text" v-model="todoEditText" class="edit-todo-input" />
            </label>
            <button type="submit" class="edit-todo-button" @click.prevent="updateTodoText()">Save</button>
          </form>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// Imports
import { todosCollection } from "../firebase";
import Header from "../components/Header.vue";
// Export Default
export default {
  name: "todoList",
  components: {
    Header
  },

  // Empty string & array
  data() {
    return {
      newTodo: "",
      todos: [],
      currentlyEditing: null,
      todoEditText: ""
    };
  },
  // Firestore returns todos
  firestore() {
    return {
      todos: todosCollection.orderBy("createdAt", "desc")
    };
  },
  // Adding todos
  methods: {
    addTodo() {
      // Adding if statement - if NOT an empty string, execute code
      if (!this.newTodo == "") {
        todosCollection
          .add({
            text: this.newTodo,
            completed: false,
            id: this.todos.length,
            createdAt: new Date()
          })

          // Console logs when an item is added
          .then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
          })
          // Otherwise console logs an error
          .catch(function(error) {
            console.error("Error adding document: ", error);
          });
        this.newTodo = "";
      }
    },
    // Deletes an item based on todo.id which is given when an item is added.
    deleteTodo(todo) {
      todosCollection.doc(todo.id).delete();
    },

    // Updated Todo when checkmark is clicked, console logs id, otherwise throws an error.
    updateTodo(todo) {
      todosCollection
        .doc(todo.id)
        .update({ ...todo })
        .then(function(docRef) {
          console.log("Updated document with ID: ", todo.id);
        })
        .catch(function(error) {
          console.error("Error updating document: ", error);
        });
    },
    // Takes Item by ID and sets value as the value of currentlyEditing
    editTodo(todo) {
      this.currentlyEditing = todo.id;
      this.todoEditText = todo.text;
    },
    // Passes ID to know which item to edit
    updateTodoText() {
      todosCollection
        .doc(this.currentlyEditing)
        .update({
          text: this.todoEditText
        })
        .then(function(docRef) {
          console.log("Updated document text with ID: ", todo.id);
        })
        .catch(function(error) {
          console.error("Error updating document text: ", error);
        });
      this.currentlyEditing = null;
      this.todoEditText = "";
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}

.wrapper {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 1rem;
}
.new-todo-form {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 3px;
  border: 1px solid #fafafa;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.15);
  margin-top: 1rem;
  background: white;
}
.new-todo-label {
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: flex-start;
  text-align: left;
  font-weight: bold;
}
.new-todo-input {
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
  font-size: 1rem;
  margin-top: 0.5rem;
  font-weight: normal;
}
.new-todo-button {
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 3px;
  color: white;
  font-weight: bold;
  background: #3dce6b;
  flex: 1;
  margin-left: 1rem;
  border: 1px solid #3dce6b;
}
.todo-item {
  display: flex;
  align-items: center;
  border-top: 1px solid lightgrey;
  border-left: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  &:first-of-type {
    border-radius: 3px 3px 0 0;
  }
  &:last-of-type {
    border-bottom: 1px solid lightgrey;
    border-radius: 0 0 3px 3px;
  }
}
.todo-item-label {
  cursor: pointer;
  padding: 1rem;
}
.todo-item__checkbox {
  margin-right: 1rem;
}
.todo-list {
  max-width: 100%;
  margin: 2rem auto;
}

.todo-button {
  background: transparent;
  border: 0;
  padding: 0.5rem;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  cursor: pointer;
}

.edit-todo-form {
  width: 100%;
  justify-content: space-between;
  display: flex;
  padding: 1rem;
}
.edit-todo-label {
  flex: 1;
  text-align: left;
  display: flex;
  align-items: center;
}
.edit-todo-input {
  padding: 0.5rem;
  border-radius: 3px;
  border: 1px solid lightgrey;
  font-size: 1rem;
  font-weight: normal;
  flex: 1;
  margin-left: 1rem;
}
.edit-todo-button {
  font-size: 1rem;
  padding: 0.5rem 0.7rem;
  border-radius: 3px;
  color: #ff4d4d;
  background: none;
  font-weight: bold;
  margin-left: 1rem;
  border: 1px solid #ff4d4d;
}
</style>