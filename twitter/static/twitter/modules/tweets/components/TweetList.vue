<template>
    <div class="tweet-list">
        <TweetListItem v-for="tweet in tweets" :key="tweet.id" :tweet="tweet"/>
    </div>
</template>

<script>
    import TweetListItem from './TweetListItem.vue';

    export default {
        name: 'TweetList',

        components: {
            TweetListItem
        },

        props: {
            tweets: {
                type: Array,
                required: true
            }
        }
    };
</script>
