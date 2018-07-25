<template>
    <div class="feed-page">
        <div class="wrapper">
            <TweetForm />
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import TweetForm from 'source/modules/tweets/components/TweetForm.vue';

    export default {
        name: 'FeedPage',

        components: {
            TweetForm
        },

        created() {
            this.fetchTweets();
        },

        methods: mapActions('tweets', ['fetchTweets'])
    };
</script>

<style scoped>
    .wrapper {
        width: 90vw;
        max-width: 60rem;
        padding: 1.2rem 0;
        margin: 0 auto;
    }
</style>
