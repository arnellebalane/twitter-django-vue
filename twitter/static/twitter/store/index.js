import Vue from 'vue';
import Vuex from 'vuex';
import auth from 'source/modules/auth/store';
import tweets from 'source/modules/tweets/store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        tweets
    }
});

export default store;
