<template>
    <div class="register-page auth-page">
        <img src="~source/images/twitter.svg" alt="twitter logo" class="site-logo">
        <AuthRegisterForm />
    </div>
</template>

<script>
    import AuthRegisterForm from 'source/modules/auth/components/AuthRegisterForm.vue';

    export default {
        name: 'RegisterPage',

        components: {
            AuthRegisterForm
        }
    };
</script>

<style scoped src="source/stylesheets/shared/auth-pages.css"></style>
