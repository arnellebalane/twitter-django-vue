<template>
    <div class="login-page auth-page">
        <img src="~source/images/twitter.svg" alt="twitter logo" class="site-logo">
        <LoginForm />
    </div>
</template>

<script>
    import LoginForm from 'source/modules/auth/components/LoginForm.vue';

    export default {
        name: 'LoginPage',

        components: {
            LoginForm
        }
    };
</script>

<style scoped src="source/stylesheets/shared/auth-pages.css"></style>
