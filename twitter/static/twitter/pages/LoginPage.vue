<template>
    <div class="login-page auth-page">
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

<style scoped src="../stylesheets/shared/auth-pages.css"></style>
