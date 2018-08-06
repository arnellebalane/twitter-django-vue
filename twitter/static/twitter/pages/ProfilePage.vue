<template>
    <div class="profile-page">
        <div class="wrapper">
            <ProfileSidebar :username="username" />
            <TweetList :tweets="tweets" />
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import ProfileSidebar from 'source/modules/profiles/components/ProfileSidebar.vue';
    import TweetList from 'source/modules/tweets/components/TweetList.vue';
    import TweetFeedMixin from 'source/mixins/TweetFeedMixin';

    export default {
        name: 'ProfilePage',

        components: {
            ProfileSidebar,
            TweetList
        },

        mixins: [TweetFeedMixin],

        props: {
            username: {
                type: String,
                required: true
            }
        },

        async created() {
            const tweets = await this.fetchUserTweets(this.username);
            tweets.forEach(this.addTweet);
        },

        methods: mapActions('tweets', ['fetchUserTweets'])
    };
</script>

<style scoped>
    .wrapper {
        width: 90vw;
        max-width: 60rem;
        padding: 1.2rem 0;
        margin: 0 auto;
        position: relative;
    }

    .profile-sidebar {
        width: 18rem;
        position: absolute;
        left: -24rem;
    }
</style>
