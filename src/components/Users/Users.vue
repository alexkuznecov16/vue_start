<template>
    <div v-if="users.length === 0">Loading...</div>
    <div class="Users" v-else>
        <div class="container">
            <div class="Users__inner">
                <Request v-for="(user, index) in users" :key="index" :user="user" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Request from './Request.vue';

export default {
    name: 'Users',
    components: {
        Request,
    },
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
                console.log('Fetching users...');
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.users = response.data;
                console.log('Users fetched:', this.users);
                this.users = response.data;
            } catch (error) {
                console.error('Error fetching users: ', error);
            }
        },
    },
};
</script>
