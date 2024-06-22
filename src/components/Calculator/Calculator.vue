<script setup>
import { ref } from 'vue';
let expression = ref('');

function clearExpression() {
    expression.value = '';
}

function addToExpression(value) {
    expression.value += value;
}

function doResult() {
    expression.value = eval(expression.value);
}
</script>

<template>
    <div class="Calculator">
        <div class="container">
            <div class="Calculator__inner">
                <div class="Calculator-resultArea" readonly name="result" id="resultArea">{{ expression }}</div>
                <div class="Calculator-buttons">
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
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calculator',
    setup() {
        return {
            doResult,
            addToExpression,
            clearExpression,
            expression,
        };
    },
};
</script>
