<template>
    <div class="tweet-list-item">
        <img :src="tweet.user.avatar_url" :alt="tweet.user.fullname" class="user-avatar">

        <div class="content">
            <header class="content-header">
                <router-link :to="{name: 'feed'}">
                    <h2>
                        <span class="fullname">{{ tweet.user.fullname }}</span>
                        <span class="username">@{{ tweet.user.username }}</span>
                    </h2>
                </router-link>
                <span class="middot">&nbsp;&middot;&nbsp;</span>
                <AppTimeago :date="tweet.created_at" />

                <button v-if="$can('delete', tweet)" class="delete-btn" @click="deleteTweet(tweet.id)">&times;</button>
            </header>

            <main class="content-body">
                <p>{{ tweet.content }}</p>
            </main>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import AppTimeago from 'source/components/AppTimeago.vue';

    export default {
        name: 'TweetListItem',

        components: {
            AppTimeago
        },

        props: {
            tweet: {
                type: Object,
                required: true
            }
        },

        methods: mapActions('tweets', ['deleteTweet'])
    };
</script>

<style scoped>
    .tweet-list-item {
        display: flex;
        align-items: flex-start;
        padding: 1.2rem;
        background-color: #fff;
    }

    .tweet-list-item:not(:last-child) {
        border-bottom: 1px solid var(--gray-2);
    }

    .user-avatar {
        width: 4.8rem;
        height: 4.8rem;
        object-fit: cover;
        object-position: center center;
        border-radius: 50%;
        margin-right: 1.2rem;
    }

    .content {
        flex-grow: 1;
    }

    .content-header {
        display: flex;
        align-items: baseline;
    }

    .content-header a {
        --fullname-text-decoration: none;
        --fullname-color: inherit;
        text-decoration: none;
    }

    .content-header a:hover,
    .content-header a:focus {
        --fullname-text-decoration: underline;
        --fullname-color: var(--primary-color);
    }

    .content-header h2 {
        display: inline;
        font-size: 1.4rem;
    }

    .content-header .fullname {
        text-decoration: var(--fullname-text-decoration);
        color: var(--fullname-color);
    }

    .content-header .username {
        font-weight: 400;
        text-decoration: none;
        color: var(--secondary-text-color);
    }

    .content-header .middot {
        padding: 0 0.25ch;
        color: var(--secondary-text-color);
    }

    .content-header time {
        color: var(--secondary-text-color);
    }

    .content-header .delete-btn {
        width: 1.9rem;
        height: 1.9rem;
        border: none;
        border-radius: 50%;
        margin-left: auto;
        line-height: 1.5rem;
        text-align: center;
        color: var(--gray-4);
        background: none;
        cursor: pointer;
    }

    .content-header .delete-btn:hover,
    .content-header .delete-btn:focus {
        background-color: var(--gray-1);
    }

    .content-body {
        margin-top: 0.4rem;
    }
</style>
