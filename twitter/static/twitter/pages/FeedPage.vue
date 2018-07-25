<template>
    <div class="feed-page">
        <div class="wrapper">
            <TweetForm />
            <TweetList :tweets="tweets" />
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import TweetForm from 'source/modules/tweets/components/TweetForm.vue';
    import TweetList from 'source/modules/tweets/components/TweetList.vue';

    export default {
        name: 'FeedPage',

        components: {
            TweetForm,
            TweetList
        },

        computed: mapState('tweets', ['tweets']),

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
