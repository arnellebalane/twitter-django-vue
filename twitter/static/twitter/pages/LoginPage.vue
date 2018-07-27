<template>
    <div class="login-page auth-page">
        <img src="~source/images/twitter.svg" alt="twitter logo" class="site-logo">
        <AuthLoginForm />
    </div>
</template>

<script>
    import AuthLoginForm from 'source/modules/auth/components/AuthLoginForm.vue';

    export default {
        name: 'LoginPage',

        components: {
            AuthLoginForm
        }
    };
</script>

<style scoped src="source/stylesheets/shared/auth-pages.css"></style>
