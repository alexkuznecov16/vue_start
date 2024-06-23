<template>
  <div class="Calculator">
    <div class="container">
      <div class="Calculator__inner">
        <div class="Calculator-resultArea" readonly name="result" id="resultArea">{{ expression }}</div>
        <div class="Calculator-buttons">
          <Buttons :addToExpression="addToExpression" :clearExpression="clearExpression" :doResult="doResult" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Buttons from './Buttons.vue';
let expression = ref('');

export default {
  name: 'Calculator',
  components: {
    Buttons,
  },
  setup() {
    return {
      expression,
    };
  },
  methods: {
    addToExpression(element) {
      expression.value += element;
    },
    clearExpression() {
      expression.value = '';
    },
    doResult() {
      try {
        expression.value = eval(expression.value);
      } catch (error) {
        console.error(`Error: ${error}`);
        expression.value = 'Error';
      }
    },
  },
};
</script>

<!-- function clearExpression() {
  expression.value = '';
}

function addToExpression(value) {
  expression.value += value;
}

function doResult() {
  try {
    expression.value = eval(expression.value);
  } catch (error) {
    console.error(error);
    expression.value = error;
  }
} -->
