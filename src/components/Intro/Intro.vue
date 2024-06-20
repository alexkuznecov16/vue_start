<template>
    <main class="Intro">
        <div class="container">
            <div class="Intro__inner">
                <p class="Intro-text">{{ subtitle }}</p>
                <h1 class="Intro-title">{{ title }}</h1>
                <p class="Intro-text">{{ description }}</p>
                <button class="Intro-button" @click="handleClick()">Click</button>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'Intro',
    data() {
        return {
            subtitle: 'Lorem, ipsum dolor.',
            title: 'Template title',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
        };
    },
    methods: {
        handleClick() {
            alert('Button is clicked!');
        },
    },
};
</script>
