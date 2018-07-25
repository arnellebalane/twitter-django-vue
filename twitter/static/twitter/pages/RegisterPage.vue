<template>
    <div class="register-page auth-page">
        <img src="~source/images/twitter.svg" alt="twitter logo" class="site-logo">
        <AuthRegisterForm @register="onRegister" />
    </div>
</template>

<script>
    import AuthRegisterForm from 'source/modules/auth/components/AuthRegisterForm.vue';

    export default {
        name: 'RegisterPage',

        components: {
            AuthRegisterForm
        },

        methods: {
            onRegister() {
                this.$router.replace({name: 'feed'});
            }
        }
    };
</script>

<style scoped src="source/stylesheets/shared/auth-pages.css"></style>
