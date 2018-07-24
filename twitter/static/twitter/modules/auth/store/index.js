import axios from 'source/lib/axios';

const state = {
    token: null
};

const getters = {};

const mutations = {
    setToken(state, token) {
        state.token = token;
    },

    clearToken(state) {
        state.token = null;
    }
};

const actions = {
    async performLogin({commit}, data) {
        const {token} = await axios.post('/api-token-auth/', data);
        commit('setToken', token);
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
