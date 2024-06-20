<template>
    <div v-if="users.length === 0"></div>
    <div class="Users" v-else>
        <div class="container">
            <div class="Users__inner">
                <div class="Users-item" v-for="(user, index) in users" :key="index">
                    <h3>@{{ user.name }}</h3>
                    <p>{{ user.username }} - {{ user.email }}</p>
                    <span>{{ user.phone }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Users',
    data() {
        return {
            users: [],
        };
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = response.data;
            } catch (error) {
                console.error('Error fetching users: ', error);
            }
        },
    },
};
</script>
