import axios from 'source/lib/axios';
import eventBus from 'source/lib/event-bus';

const state = {};

const getters = {};

const mutations = {};

const actions = {
    fetchTweets(context) {
        return axios.get('/api/tweets/');
    },

    async createTweet(context, data) {
        const tweet = await axios.post('/api/tweets/', data);
        eventBus.$emit('tweets:create', tweet);
        return tweet;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
