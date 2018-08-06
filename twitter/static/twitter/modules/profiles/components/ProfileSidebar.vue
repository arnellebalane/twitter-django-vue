<template>
    <aside v-if="profile" class="profile-sidebar">
        <img :src="profile.avatar_url" :alt="profile.fullname">
        <h1>{{profile.fullname}}</h1>
        <p>@{{profile.username}}</p>
    </aside>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: 'ProfileSidebar',

        props: {
            username: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                profile: null
            };
        },

        async mounted() {
            this.profile = await this.fetchProfile(this.username);
        },

        methods: mapActions('profiles', ['fetchProfile'])
    };
</script>

<style scoped>
    img {
        display: block;
        width: 18rem;
        height: 18rem;
        border-radius: 50%;
        margin-bottom: 1.8rem;
    }

    h1 {
        font-size: 2rem;
    }

    p {
        color: var(--secondary-text-color);
    }
</style>
