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

    export default {
        name: 'AuthLoginForm',

        components: {
            AppButton,
            AuthFormField
        },

        data() {
            return {
                formData: {
                    username: '',
                    password: ''
                },
                formErrors: {},
                loading: false,
                error: null
            };
        },

        methods: {
            ...mapActions('auth', ['performLogin']),

            async onSubmit() {
                this.loading = true;
                this.resetFormErrors();

                const [error] = await to(this.performLogin(this.formData));
                if (error) {
                    const data = error.response.data;
                    if (data.non_field_errors) {
                        this.error = data.non_field_errors[0];
                        delete data.non_field_errors;
                    }

                    for (let key in data) {
                        this.$set(this.formErrors, key, data[key][0]);
                    }
                } else {
                    this.$emit('login');
                }

                this.loading = false;
            },

            resetFormErrors() {
                this.formErrors = {};
                this.error = null;
            }
        }
    };
</script>

<style scoped src="../stylesheets/auth.css"></style>
