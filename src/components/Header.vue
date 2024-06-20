<script setup>
import menuIcon from './icons/IconMenu.vue';
import crossIcon from './icons/IconCross.vue';
</script>

<template>
    <header class="Header">
        <div class="Header__block">
            <div class="container">
                <div class="Header__inner">
                    <h3 class="Header-title">Template</h3>
                    <nav class="Header-nav desktop">
                        <a href="#">HOME</a>
                        <a href="#">ABOUT</a>
                        <a href="#">CONTACTS</a>
                    </nav>
                    <menuIcon @click="open" class="Mobile-menu-open" />
                </div>
            </div>
        </div>
        <div class="Header__inner Header__inner--mobile">
            <crossIcon @click="close" class="Mobile-menu-close" />
            <h3 class="Header-title">Template</h3>
            <nav class="Header-nav">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACTS</a>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isMobileMenuOpen: false,
        };
    },
    methods: {
        open() {
            document.getElementsByClassName('Header__inner--mobile')[0].classList.add('open-menu');
            document.body.style.overflow = 'hidden';
        },
        close() {
            document.getElementsByClassName('Header__inner--mobile')[0].classList.remove('open-menu');
            document.body.setAttribute('style', '')
        },
    },
};
</script>
