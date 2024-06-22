<script setup>
import { reactive } from 'vue';
const ChangeTheme = reactive({
    active: false,
});
</script>

<template>
    <div :class="{ active: ChangeTheme.active }" class="ThemeChanger">
        <div class="container">
            <button @click="ChangeTheme.active = true">To Light</button>
            <button @click="ChangeTheme.active = false">To Dark</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Themes',
    setup() {
        return {
            ChangeTheme,
        };
    },
};
</script>
