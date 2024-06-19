<template>
    <div class="Counter">
        <div class="container">
            <div class="Counter__inner">
                <button type="button" @click="minus()">Minus</button>
                <p class="Counter-text">{{ number }}</p>
                <button type="button" @click="plus()">Plus</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 0,
        };
    },
    methods: {
        plus() {
            this.number += 1;
        },
        minus() {
            this.number -= 1;
        },
    },
};
</script>
