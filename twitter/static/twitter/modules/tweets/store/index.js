import axios from 'source/lib/axios';

const state = {};

const getters = {};

const mutations = {};

const actions = {
    fetchTweets(context) {
        return axios.get('/api/tweets/');
    },

    createTweet(context, data) {
        return axios.post('/api/tweets/', data);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
