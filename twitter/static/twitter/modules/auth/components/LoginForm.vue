<template>
    <form class="login-form auth-form" @submit.prevent="onSubmit">
        <header>
            <h1>Login to your account</h1>
        </header>

        <p v-if="error" class="error form-error">{{ error }}</p>

        <div class="field">
            <label for="username">Email or username</label>
            <input type="text" id="username" v-model="formData.username" autocomplete="email username" required>
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
    import {mapActions} from 'vuex';
    import to from 'await-to-js';
    import AppButton from 'source/components/AppButton.vue';

    export default {
        name: 'LoginForm',

        components: {
            AppButton
        },

        data() {
            return {
                formData: {
                    username: '',
                    password: ''
                },
                loading: false,
                error: null
            };
        },

        methods: {
            ...mapActions('auth', ['performLogin']),

            async onSubmit() {
                this.loading = true;
                this.error = null;

                const [error] = await to(this.performLogin(this.formData));
                if (error) {
                    this.error = error.response.data.non_field_errors[0];
                } else {
                    this.$emit('login');
                }

                this.loading = false;
            }
        }
    };
</script>

<style scoped src="../stylesheets/auth.css"></style>
