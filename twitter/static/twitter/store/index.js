import Vue from 'vue';
import Vuex from 'vuex';
import auth from 'source/modules/auth/store';
import profiles from 'source/modules/profiles/store';
import tweets from 'source/modules/tweets/store';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        auth,
        profiles,
        tweets
    }
});

export default store;
