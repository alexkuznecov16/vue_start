<template>
    <form id="form" @submit="handleSubmitForm" class="Form">
        <div class="container">
            <div class="Form__inner">
                <div class="Form-block">
                    <input autocomplete="on" v-model="name" type="text" id="name" name="name" placeholder="Name:" />
                    <p class="error">{{ nameError }}</p>
                </div>
                <div class="Form-block">
                    <input autocomplete="on" v-model="email" type="email" id="email" name="email" placeholder="Email:" />
                    <p class="error">{{ emailError }}</p>
                </div>
                <div class="Form-block">
                    <input autocomplete="on" v-model="phone" type="tel" id="phone" name="phone" placeholder="Phone:" />
                    <p class="error">{{ phoneError }}</p>
                </div>
                <div class="Form-block">
                    <input autocomplete="on" v-model="password" type="password" id="password" name="password" placeholder="Password:" />
                    <p class="error">{{ passwordError }}</p>
                </div>
                <button type="submit">Submit</button>
            </div>
            <br /><br />
            <!-- <div v-if="users.length == 0">
                <h4>We've not users!</h4>
                {{ phone }}
            </div>
            <div class="Form-user" v-for="(user, index) in users" :key="index">
                <div class="Form-user--item">
                    <h3>@{{ user.name }}</h3>
                    <p>{{ user.email }} - {{ user.password }}</p>
                    <span>{{ user.phone }}</span>
                </div>
            </div> -->
            <div v-if="users.length === 0">
                <h4>We have no users!</h4>
            </div>
            <div v-else class="Form-user" v-for="(user, index) in users" :key="index">
                <div class="Form-user--item">
                    <h3>@{{ user.name }}</h3>
                    <p>{{ user.email }} - {{ user.password }}</p>
                    <span>{{ user.phone }}</span>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: '',
            users: [],
            nameError: null,
            emailError: null,
            phoneError: null,
            passwordError: null,
        };
    },
    created() {
        this.fetchUsers();
    },
    methods: {
        async fetchUsers() {
            try {
                const response = await axios.get(`http://localhost:3000/users`);
                this.users = response.data;
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        },
        handleSubmitForm(e) {
            e.preventDefault();
            if (this.name === '') {
                this.nameError = 'Name cannot be empty.';
            } else {
                this.nameError = '';
            }

            if (this.email === '') {
                this.emailError = 'Email cannot be empty.';
            } else {
                this.emailError = '';
            }

            if (this.phone === '') {
                this.phoneError = 'Phone cannot be empty.';
            } else {
                this.phoneError = '';
            }

            if (this.password === '') {
                this.passwordError = 'Password cannot be empty.';
            } else {
                this.passwordError = '';
            }

            if (this.name !== '' && this.email !== '' && this.phone !== '' && this.password !== '') {
                this.users.push({
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    password: this.password,
                });
            }
        },
    },
};
</script>
