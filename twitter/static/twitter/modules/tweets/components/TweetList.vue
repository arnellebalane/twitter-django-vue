<template>
    <div class="tweet-list">
        <h1>Tweet List</h1>
    </div>
</template>

<script>
    export default {
        name: 'TweetList',

        props: {
            tweets: {
                type: Array,
                required: true
            }
        }
    };
</script>
