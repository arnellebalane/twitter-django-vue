<template>
    <header class="the-navbar">
        <img src="~source/images/twitter.svg" alt="twitter logo" class="site-logo">

        <nav class="user-nav">
            <template v-if="user">
                <img :src="user.avatar_url" :alt="user.fullname" class="user-avatar" @click="onLogout">
            </template>
            <template v-else>
                <router-link :to="{name: 'login'}">Login</router-link>
                <router-link :to="{name: 'register'}">Register</router-link>
            </template>
        </nav>
    </header>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'TheNavbar',

        computed: mapState('auth', ['user']),

        methods: {
            ...mapActions('auth', ['performLogout']),

            onLogout() {
                this.performLogout();
                this.$router.replace({name: 'login'});
            }
        }
    };
</script>

<style scoped>
    .the-navbar {
        display: flex;
        align-items: center;
        height: 5rem;
        padding: 0 2.4rem;
        border-bottom: 1px solid var(--gray-3);
        background-color: #fff;
    }

    .user-nav {
        margin-left: auto;
        margin-right: -0.4rem;
    }

    .user-nav a {
        margin: 0 0.4rem;
        text-decoration: none;
        color: var(--secondary-text-color);
    }

    .user-nav a.router-link-exact-active {
        color: var(--primary-color);
    }

    .user-avatar {
        display: block;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
    }
</style>
