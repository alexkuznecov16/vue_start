<script setup>
import { reactive, ref } from 'vue';

const count = ref(0);

const state = reactive({
    number: 10,
    message: 'Error',
});

function divideTo10() {
    if (state.number <= 0) {
        return (state.message = 'Number cannot be less than 0');
    } else {
        return (state.number -= 20);
    }
}

function multiplyTo10() {
    if (state.number >= 100) {
        return (state.message = 'Number cannot be greater than 100');
    } else {
        return (state.number += 20);
    }
}

const author = reactive({
    name: 'John Doe',
    books: ['Vue 2 - Advanced Guide', 'Vue 3 - Basic Guide', 'Vue 4 - The Mystery'],
});
</script>

<template>
    <div class="Counter">
        <div class="container">
            <div class="Counter__inner">
                <button type="button" @click="count--">Minus</button>
                <p class="Counter-text">{{ count }}</p>
                <button type="button" @click="count++">Plus</button>
                <br /><br />
                <button type="button" @click="multiplyTo10">Click to + 20</button>
                <p v-if="state.number > 0 && state.number < 100">{{ state.number }}</p>
                <p v-else>{{ state.message }}</p>
                <button type="button" @click="divideTo10">Click to - 20</button>
                <!-- iterate all books -->
                <div v-for="(book, index) in author.books" :key="index">
                    <p>{{ book }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    setup() {
        return {
            count,
            state,
            multiplyTo10,
            author,
        };
    },
};
</script>
