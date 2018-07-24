<template>
    <form class="register-form auth-form" @submit.prevent="onSubmit">
        <header>
            <h1>Create your account</h1>
        </header>

        <p v-if="error" class="error form-error">{{ error }}</p>

        <div class="field">
            <label for="fullname">Full name</label>
            <input type="text" id="fullname" v-model="formData.fullname" autocomplete="name" required>
        </div>

        <div class="field username-field">
            <label for="username">Username</label>
            <input type="text" id="username" v-model="formData.username" autocomplete="username" :maxlength="usernameMaxLength" required>
            <span :class="usernameRemainingLengthClass">{{usernameRemainingLength}}/{{usernameMaxLength}}</span>
        </div>

        <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" autocomplete="email" required>
        </div>

        <div class="field">
            <label for="password">Password</label>
            <input type="password" id="password" v-model="formData.password" autocomplete="new-password" required>
        </div>

        <footer>
            <AppButton :loading="loading">Create Account</AppButton>
            <p>
                Already have an account?
                <router-link :to="{name: 'login'}">Login</router-link>
            </p>
        </footer>
    </form>
</template>

<script>
    import {mapActions} from 'vuex';
    import to from 'await-to-js';
    import AppButton from 'source/components/AppButton.vue';

    export default {
        name: 'RegisterForm',

        components: {
            AppButton
        },

        data() {
            return {
                formData: {
                    fullname: '',
                    username: '',
                    email: '',
                    password: ''
                },
                usernameMaxLength: 30,
                loading: false,
                error: null
            };
        },

        computed: {
            usernameRemainingLength() {
                return this.usernameMaxLength - this.formData.username.length;
            },

            usernameRemainingLengthClass() {
                const length = this.usernameRemainingLength;
                if (length < 5) {
                    return 'danger';
                } else if (length < 15) {
                    return 'warning';
                }
                return null;
            }
        },

        methods: {
            ...mapActions('auth', ['performRegister']),

            async onSubmit() {
                this.loading = true;
                this.error = null;

                const [error] = await to(this.performRegister(this.formData));
                if (error) {
                    this.error = 'Something went wrong.';
                } else {
                    this.$emit('register');
                }

                this.loading = false;
            }
        }
    };
</script>

<style scoped src="../stylesheets/auth.css"></style>
<style scoped>
    .username-field {
        position: relative;
    }

    .username-field input {
        padding-right: calc(5ch + 1em);
    }

    .username-field span {
        position: absolute;
        right: 0.5em;
        bottom: 0;
        line-height: 3.5rem;
        color: var(--gray-3);
    }

    .username-field span.danger {
        color: var(--danger-color);
    }

    .username-field span.warning {
        color: var(--warning-color);
    }
</style>
