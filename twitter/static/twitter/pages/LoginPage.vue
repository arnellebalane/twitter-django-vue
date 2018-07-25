<template>
    <div class="login-page auth-page">
        <img src="~source/images/twitter.svg" alt="twitter logo" class="site-logo">
        <AuthLoginForm @login="onLogin" />
    </div>
</template>

<script>
    import AuthLoginForm from 'source/modules/auth/components/AuthLoginForm.vue';

    export default {
        name: 'LoginPage',

        components: {
            AuthLoginForm
        },

        methods: {
            onLogin() {
                this.$router.replace({name: 'feed'});
            }
        }
    };
</script>

<style scoped src="source/stylesheets/shared/auth-pages.css"></style>
