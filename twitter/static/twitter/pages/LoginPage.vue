<template>
    <div class="login-page">
        <LoginForm />
    </div>
</template>

<script>
    import LoginForm from '../modules/auth/components/LoginForm.vue';

    export default {
        name: 'LoginPage',

        components: {
            LoginForm
        }
    };
</script>
