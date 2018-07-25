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
    import eventBus from 'source/lib/event-bus';
    import TweetForm from 'source/modules/tweets/components/TweetForm.vue';
    import TweetList from 'source/modules/tweets/components/TweetList.vue';

    export default {
        name: 'FeedPage',

        components: {
            TweetForm,
            TweetList
        },

        data() {
            return {
                tweets: []
            };
        },

        async created() {
            eventBus.$on('tweets:create', this.addTweet);

            const tweets = await this.fetchTweets();
            tweets.forEach(this.addTweet);
        },

        destroyed() {
            eventBus.$off('tweets:create', this.addTweet);
        },

        methods: {
            ...mapActions('tweets', ['fetchTweets']),

            addTweet(tweet) {
                if (!tweet.user.avatar_url) {
                    tweet.user.avatar_url = require('source/images/default-avatar.png');
                }
                this.tweets = [tweet, ...this.tweets];
            }
        }
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
