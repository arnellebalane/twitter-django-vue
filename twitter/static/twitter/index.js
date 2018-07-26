import Vue from 'vue';
import router from './router';
import store from './store';
import EventBusCallbacks from './plugins/event-bus-callbacks';
import AbilitiesPlugin from './plugins/abilities';

import eventBus from './lib/event-bus';
import abilities from './lib/abilities';
import App from './components/App.vue';
import './stylesheets/index.css';

router.beforeEach((to, from, next) => {
    const isLoggedIn = store.getters['auth/isLoggedIn'];
    if (to.meta.loginRequired && !isLoggedIn) {
        return next({replace: true, name: 'login'});
    } else if (to.meta.loginRequired === false && isLoggedIn) {
        return next({replace: true, name: 'feed'});
    }
    next();
});

if (store.getters['auth/isLoggedIn']) {
    store.dispatch('auth/getCurrentUser');
}

Vue.use(EventBusCallbacks, eventBus);
Vue.use(AbilitiesPlugin, abilities);

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
