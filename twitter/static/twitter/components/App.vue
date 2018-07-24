<template>
    <div id="app" class="app">
        <AppNavbar />
        <router-view />
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
