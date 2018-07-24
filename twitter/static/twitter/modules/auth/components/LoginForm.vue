<template>
    <form class="login-form auth-form" @submit.prevent="onSubmit">
        <header>
            <h1>Login to your account</h1>
        </header>

        <p v-if="error" class="error form-error">{{ error }}</p>

        <div class="field">
            <label for="identifier">Email or username</label>
            <input type="text" id="identifier" v-model="formData.identifier" autocomplete="email username" required>
        </div>

        <div class="field">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="formData.password" autocomplete="current-password" required>
        </div>

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
    import AppButton from '../../../components/AppButton.vue';

    export default {
        name: 'LoginForm',

        components: {
            AppButton
        },

        data() {
            return {
                formData: {
                    identifier: '',
                    password: ''
                },
                loading: false,
                error: null
            };
        },

        methods: {
            onSubmit() {
                this.loading = true;
                setTimeout(() => this.loading = false, 1000);
            }
        }
    };
</script>

<style scoped src="../stylesheets/auth.css"></style>
