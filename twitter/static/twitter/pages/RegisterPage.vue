<template>
    <div class="register-page auth-page">
        <RegisterForm />
    </div>
</template>

<script>
    import RegisterForm from 'source/modules/auth/components/RegisterForm.vue';

    export default {
        name: 'RegisterPage',

        components: {
            RegisterForm
        }
    };
</script>

<style scoped src="source/stylesheets/shared/auth-pages.css"></style>
