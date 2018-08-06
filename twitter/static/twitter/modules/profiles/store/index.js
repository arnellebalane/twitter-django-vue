import axios from 'source/lib/axios';

const state = {};

const getters = {};

const mutations = {};

const actions = {
    fetchProfile(context, username) {
        return axios.get(`/api/users/${username}`);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
