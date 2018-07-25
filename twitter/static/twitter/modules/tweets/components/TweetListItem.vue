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
                <span class="middot">&middot;</span>
                <time :datetime="tweet.created_at">{{timeago}}</time>
            </header>

            <main class="content-body">
                <p>{{ tweet.content }}</p>
            </main>
        </div>
    </div>
</template>

<script>
    import distanceInWords from 'date-fns/distance_in_words';

    let instances = [];

    setInterval(() => {
        instances.forEach(instance => instance.computeTimeago());
    }, 1000 * 10);

    export default {
        name: 'TweetListItem',

        props: {
            tweet: {
                type: Object,
                required: true
            }
        },

        data() {
            return {
                timeago: '1s'
            };
        },

        computed: {
            createdAt() {
                return new Date(this.tweet.created_at);
            }
        },

        created() {
            this.computeTimeago();
            instances.push(this);
        },

        destroyed() {
            instances = instances.filter(instance => instance !== this);
        },

        methods: {
            computeTimeago() {
                const now = new Date();
                this.timeago = distanceInWords(this.createdAt, now);
            }
        }
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
        display: inline-block;
        margin: 0 0.25ch;
        color: var(--secondary-text-color);
    }

    .content-header time {
        color: var(--secondary-text-color);
    }

    .content-body {
        margin-top: 0.4rem;
    }
</style>
