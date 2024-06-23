<template>
  <div class="Todo">
    <div class="container">
      <div class="Todo__inner">
        <div class="Todo-add">
          <label for="add">Add todo:</label>
          <input minlength="5" type="text" id="add" name="add" placeholder="My todo." v-model="newTodo" />
          <button type="button" @click="addTodo()">Add</button>
        </div>
        <div class="Todo-elements">
          <UsersTodo :todoItems='todoItems' :deleteTodo='deleteTodo' />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UsersTodo from './UsersTodo.vue'

export default {
  name: 'Todo',
  components: {
    UsersTodo
  },
  data() {
    return {
      todoItems: [],
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length < 5) {
        alert('Todo cannot be less than 5 characters.');
      } else {
        this.todoItems.push(this.newTodo);
        this.newTodo = '';
        this.saveTodos(); // save todo in localStorage
      }
    },
    deleteTodo(index) {
      this.todoItems.splice(index, 1);
      this.saveTodos(); // save todo in localStorage
    },
    saveTodos() {
      localStorage.setItem('todoItems', JSON.stringify(this.todoItems)); // add item to localStorage
    },
    loadTodos() {
      const todos = localStorage.getItem('todoItems'); // get todo items
      if (todos) {
        this.todoItems = JSON.parse(todos); // parse (JSON)
      }
    }
  },
  // Вызывается после того, как компонент был смонтирован
  mounted() {
    this.loadTodos();
  },
};
</script>
