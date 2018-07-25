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

    export default {
        name: 'FeedPage',

        components: {
            TweetForm,
            TweetList
        },

        data() {
            return {
                tweets: [],
                eventBusCallbacks: {
                    'tweets:create': this.addTweet,
                    'tweets:delete': this.deleteTweet
                }
            };
        },

        async created() {
            const tweets = await this.fetchTweets();
            tweets.forEach(this.addTweet);
        },

        methods: {
            ...mapActions('tweets', ['fetchTweets']),

            addTweet(tweet) {
                if (!tweet.user.avatar_url) {
                    tweet.user.avatar_url = require('source/images/default-avatar.png');
                }
                this.tweets = [tweet, ...this.tweets];
            },

            deleteTweet(id) {
                this.tweets = this.tweets.filter(tweet => tweet.id !== id);
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
