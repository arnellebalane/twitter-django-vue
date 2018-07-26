<template>
    <div id="app" class="app">
        <TheNavbar />
        <router-view class="app-page" />
    </div>
</template>

<script>
    import TheNavbar from './TheNavbar.vue';

    export default {
        name: 'App',

        components:{
            TheNavbar
        }
    };
</script>

<style scoped>
    .the-navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
    }

    .app-page {
        padding-top: 5rem;
    }
</style>
