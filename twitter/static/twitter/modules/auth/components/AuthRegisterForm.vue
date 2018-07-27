<template>
    <form class="auth-register-form auth-form" @submit.prevent="onSubmit">
        <header>
            <h1>Create your account</h1>
        </header>

        <p v-if="error" class="error form-error">{{ error }}</p>

        <AuthFormField
            v-model="formData.fullname"
            :error="formErrors.fullname"
            label="Full name"
            type="text"
            autocomplete="name"
            required
        />
        <AuthFormField
            v-model="formData.username"
            :error="formErrors.username"
            :maxlength="usernameMaxLength"
            class="username-field"
            label="Username"
            type="text"
            autocomplete="username"
            required
        >
            <span :class="usernameRemainingLengthClass">{{usernameRemainingLength}}/{{usernameMaxLength}}</span>
        </AuthFormField>
        <AuthFormField
            v-model="formData.email"
            :error="formErrors.email"
            label="Email"
            type="email"
            autocomplete="email"
            required
        />
        <AuthFormField
            v-model="formData.password"
            :error="formErrors.password"
            label="Password"
            type="password"
            autocomplete="new-password"
            required
        />

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
    import AuthFormField from './AuthFormField.vue';
    import AuthFormMixin from '../mixins/AuthForm';

    export default {
        name: 'AuthRegisterForm',

        components: {
            AppButton,
            AuthFormField
        },

        mixins: [AuthFormMixin],

        data() {
            return {
                formData: {
                    fullname: '',
                    username: '',
                    email: '',
                    password: ''
                },
                usernameMaxLength: 30,
                loading: false
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
                this.resetFormErrors();

                const [error] = await to(this.performRegister(this.formData));
                if (error) {
                    this.handleFormError(error);
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
