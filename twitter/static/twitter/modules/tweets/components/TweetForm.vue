<template>
    <form class="tweet-form" @submit.prevent="onSubmit">
        <img v-if="user" :src="user.avatar_url" :alt="user.fullname" class="user-avatar">

        <div class="tweet-fields">
            <textarea v-model="formData.content" :maxlength="contentMaxLength" placeholder="What's happening?"></textarea>

            <footer>
                <p :class="contentRemainingLengthClass">{{contentRemainingLength}}/{{contentMaxLength}}</p>
                <AppButton :loading="loading">Tweet</AppButton>
            </footer>
        </div>
    </form>
</template>

<script>
    import {mapState, mapActions} from 'vuex';
    import AppButton from 'source/components/AppButton.vue';

    export default {
        name: 'TweetForm',

        components: {
            AppButton
        },

        data() {
            return {
                formData: {
                    content: ''
                },
                contentMaxLength: 240,
                loading: false
            };
        },

        computed: {
            ...mapState('auth', ['user']),

            contentRemainingLength() {
                return this.contentMaxLength - this.formData.content.length;
            },

            contentRemainingLengthClass() {
                const length = this.contentRemainingLength;
                if (length < 15) {
                    return 'danger';
                } else if (length < 30) {
                    return 'warning';
                }
                return null;
            }
        },

        methods: {
            ...mapActions('tweets', ['createTweet']),

            async onSubmit() {
                this.loading = true;

                await this.createTweet(this.formData);
                this.loading = false;
            }
        }
    };
</script>

<style scoped>
    .tweet-form {
        display: flex;
        padding: 1.2rem;
        background-color: var(--gray-2);
    }

    .user-avatar {
        flex-shrink: 0;
        display: block;
        width: 2.8rem;
        height: 2.8rem;
        border-radius: 50%;
        margin-top: 0.3rem;
        margin-right: 1.2rem;
    }

    .tweet-fields {
        flex-grow: 1;
    }

    textarea {
        display: block;
        width: 100%;
        height: 2.5em;
        padding: 0.5em;
        border: 1px solid var(--gray-3);
        border-radius: 3px;
        resize: none;
    }

    textarea:not(:placeholder-shown),
    textarea:focus {
        height: 5.25em;
    }

    footer {
        display: none;
        margin-top: 1.2rem;
    }

    textarea:not(:placeholder-shown) + footer,
    textarea:focus + footer {
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    footer p {
        margin-right: 1.2rem;
        color: var(--gray-4);
    }

    footer p.warning {
        color: var(--warning-color);
    }

    footer p.danger {
        color: var(--danger-color);
    }
</style>
