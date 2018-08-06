import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: () => import('source/pages/FeedPage.vue'),
    name: 'feed',
    meta: {
        loginRequired: true
    }
}, {
    path: '/login',
    component: () => import('source/pages/LoginPage.vue'),
    name: 'login',
    meta: {
        loginRequired: false
    }
}, {
    path: '/register',
    component: () => import('source/pages/RegisterPage.vue'),
    name: 'register',
    meta: {
        loginRequired: false
    }
}, {
    path: '/:username',
    component: () => import('source/pages/ProfilePage.vue'),
    name: 'profile',
    props: true,
    meta: {
        loginRequired: true
    }
}];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
