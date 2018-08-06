<template>
    <div class="profile-page">
        <div class="wrapper">
            <TweetList :tweets="tweets" />
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import TweetList from 'source/modules/tweets/components/TweetList.vue';

    export default {
        name: 'ProfilePage',

        components: {
            TweetList
        },

        props: {
            username: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                tweets: []
            };
        },

        eventBusCallbacks: {
            'tweets:actions:create': 'addTweet',
            'tweets:actions:delete': 'deleteTweet'
        },

        async created() {
            const tweets = await this.fetchUserTweets(this.username);
            tweets.forEach(this.addTweet);
        },

        methods: {
            ...mapActions('tweets', ['fetchUserTweets']),

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
