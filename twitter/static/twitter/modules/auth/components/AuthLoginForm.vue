<template>
    <form class="auth-login-form auth-form" @submit.prevent="onSubmit">
        <header>
            <h1>Login to your account</h1>
        </header>

        <p v-if="error" class="error form-error">{{ error }}</p>

        <AuthFormField
            v-model="formData.username"
            :error="formErrors.username"
            label="Email or username"
            type="text"
            autocomplete="email username"
            required
        />
        <AuthFormField
            v-model="formData.password"
            :error="formErrors.password"
            label="Password"
            type="password"
            autocomplete="current-password"
            required
        />

        <footer>
            <AppButton :loading="loading">Login</AppButton>
            <p>
                Don't have an account yet?
                <router-link :to="{name: 'register'}">Register</router-link>
            </p>
        </footer>
    </form>
</template>

<script>
    import {mapActions} from 'vuex';
    import to from 'await-to-js';
    import AppButton from 'source/components/AppButton.vue';
    import AuthFormField from './AuthFormField.vue';
    import AuthFormMixin from '../mixins/AuthForm';

    export default {
        name: 'AuthLoginForm',

        components: {
            AppButton,
            AuthFormField
        },

        mixins: [AuthFormMixin],

        data() {
            return {
                formData: {
                    username: '',
                    password: ''
                },
                loading: false
            };
        },

        methods: {
            ...mapActions('auth', ['performLogin']),

            async onSubmit() {
                this.loading = true;
                this.resetFormErrors();

                const [error] = await to(this.performLogin(this.formData));
                if (error) {
                    this.handleFormError(error);
                } else {
                    this.$emit('login');
                }

                this.loading = false;
            }
        }
    };
</script>

<style scoped src="../stylesheets/auth.css"></style>
