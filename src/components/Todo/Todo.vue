<template>
  <div class="Todo">
    <div class="container">
      <div class="Todo__inner">
        <div class="Todo-add">
          <label for="add">Add todo:</label>
          <input minlength='5' type="text" id='add' name='add' placeholder='My todo.' v-model='newTodo' />
          <button type='button' @click='addTodo()'>Add</button>
        </div>
        <div class="Todo-elements">
          <div class="Todo-item" v-for='(todo, index) in todoItems'>
            {{ todo }}
            <button type="button" @click='deleteTodo(index)'>Remove</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      todoItems: ['First todo', 'Second todo'],
      newTodo: ''
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length < 5) {
        alert('Todo cannot be less than 5 characters.');
      } else {
        this.todoItems.push(this.newTodo);
        this.newTodo = '';
      }
    },
    deleteTodo(index) {
      this.todoItems.splice(index, 1);
    }
  }
};
</script>