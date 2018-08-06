export default {
    data() {
        return {
            tweets: []
        };
    },

    eventBusCallbacks: {
        'tweets:actions:create': 'addTweet',
        'tweets:actions:delete': 'deleteTweet'
    },

    methods: {
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
