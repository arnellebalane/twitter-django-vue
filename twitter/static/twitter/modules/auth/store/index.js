import pick from 'lodash/pick';
import axios from 'source/lib/axios';

const state = {
    token: localStorage.getItem('token')
};

const getters = {};

const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem('token', token);
        axios.defaults.headers['Authorization'] = `JWT ${token}`;
    },

    clearToken(state) {
        state.token = null;
        localStorage.clearItem('token');
        delete axios.defaults.headers['Authorization'];
    }
};

const actions = {
    async performRegister({dispatch}, data) {
        await axios.post('/api-auth/register/', data);
        await dispatch('performLogin', pick(data, ['username', 'password']));
    },

    async performLogin({commit}, data) {
        const {token} = await axios.post('/api-token-auth/', data);
        commit('setToken', token);
    }
};

if (state.token) {
    axios.defaults.headers['Authorization'] = state.token;
} else {
    delete axios.defaults.headers['Authorization'];
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
