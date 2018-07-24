<template>
    <FeedPage v-if="isLoggedIn" />
    <LoginPage v-else />
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'LandingPage',

        components: {
            FeedPage: () => import('./FeedPage.vue'),
            LoginPage: () => import('./LoginPage.vue')
        },

        computed: mapGetters('auth', ['isLoggedIn'])
    };
</script>
