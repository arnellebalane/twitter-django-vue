<template>
    <div class="register-page auth-page">
        <img src="~source/images/twitter.svg" alt="twitter logo" class="site-logo">
        <RegisterForm @register="onRegister" />
    </div>
</template>

<script>
    import RegisterForm from 'source/modules/auth/components/RegisterForm.vue';

    export default {
        name: 'RegisterPage',

        components: {
            RegisterForm
        },

        methods: {
            onRegister() {
                this.$router.replace({name: 'feed'});
            }
        }
    };
</script>

<style scoped src="source/stylesheets/shared/auth-pages.css"></style>
