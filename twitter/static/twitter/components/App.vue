<template>
    <div id="app" class="app">
        <AppNavbar />
        <router-view class="app-page" />
    </div>
</template>

<script>
    import AppNavbar from './AppNavbar.vue';

    export default {
        name: 'App',

        components:{
            AppNavbar
        }
    };
</script>

<style scoped>
    .app-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    .app-page {
        padding-top: 5rem;
    }
</style>
