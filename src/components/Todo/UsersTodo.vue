<template>
  <div class="Todo-item" v-for="(todo, index) in todoItems">
    <p>{{ todo }}</p>
    <button type="button" @click="deleteTodo(index)">Remove</button>
  </div>
</template>

<script>
export default {
  name: 'UsersTodo',
  props: {
    todoItems: {
      type: Array,
      required: true
    },
    deleteTodo: {
      type: Function,
      required: true
    }
  }
}
</script>