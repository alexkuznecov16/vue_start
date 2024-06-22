<template>
    <div class="Users-item">
        <h3>@{{ user.name }}</h3>
        <p>{{ user.username }} - {{ user.email }}</p>
        <span>{{ user.phone }}</span>
    </div>
</template>

<script>
export default {
    name: 'Request',
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>
