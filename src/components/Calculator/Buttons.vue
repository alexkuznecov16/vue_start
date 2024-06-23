<template>
  <button @click="clearExpression" type="button">C</button>
  <button @click="addToExpression('(')" type="button">(</button>
  <button @click="addToExpression(')')" type="button">)</button>
  <button @click="addToExpression('/')" type="button">/</button>
  <button @click="addToExpression('7')" type="button">7</button>
  <button @click="addToExpression('8')" type="button">8</button>
  <button @click="addToExpression('9')" type="button">9</button>
  <button @click="addToExpression('*')" type="button">*</button>
  <button @click="addToExpression('4')" type="button">4</button>
  <button @click="addToExpression('5')" type="button">5</button>
  <button @click="addToExpression('6')" type="button">6</button>
  <button @click="addToExpression('-')" type="button">-</button>
  <button @click="addToExpression('1')" type="button">1</button>
  <button @click="addToExpression('2')" type="button">2</button>
  <button @click="addToExpression('3')" type="button">3</button>
  <button @click="addToExpression('+')" type="button">+</button>
  <button @click="addToExpression('0')" type="button">0</button>
  <button @click="addToExpression('.')" type="button">.</button>
  <button @click="addToExpression('%')" type="button">%</button>
  <button @click="doResult" type="button">=</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Buttons',
  props: {
    clearExpression: {
      type: Function,
      required: true,
    },
    addToExpression: {
      type: Function,
      required: true,
    },
    doResult: {
      type: Function,
      required: true,
    },
  },
});
</script>
