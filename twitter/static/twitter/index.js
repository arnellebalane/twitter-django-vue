import Vue from 'vue';
import router from './router';
import store from './store';
import App from './components/App.vue';
import './stylesheets/index.css';

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

if (store.getters['auth/isLoggedIn']) {
    store.dispatch('auth/getCurrentUser');
}
