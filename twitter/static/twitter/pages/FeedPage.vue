<template>
    <div class="feed-page">
        <div class="wrapper">
            <TweetForm />
            <TweetList :tweets="tweets" />
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import TweetForm from 'source/modules/tweets/components/TweetForm.vue';
    import TweetList from 'source/modules/tweets/components/TweetList.vue';
    import TweetFeedMixin from 'source/mixins/TweetFeedMixin';

    export default {
        name: 'FeedPage',

        components: {
            TweetForm,
            TweetList
        },

        mixins: [TweetFeedMixin],

        async created() {
            const tweets = await this.fetchTweets();
            tweets.forEach(this.addTweet);
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
