import axios from 'source/lib/axios';

const state = {
    token: localStorage.getItem('token')
};

const getters = {};

const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
    },

    clearToken(state) {
        state.token = null;
        localStorage.clearItem('token');
    }
};

const actions = {
    async performRegister({commit}, data) {
        const response = await axios.post('/api-auth/register/', data);
    },

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
