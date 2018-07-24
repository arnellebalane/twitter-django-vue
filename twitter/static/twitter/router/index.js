import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: () => import('source/pages/LandingPage.vue'),
    name: 'landing'
}, {
    path: '/login',
    component: () => import('source/pages/LoginPage.vue'),
    name: 'login'
}, {
    path: '/register',
    component: () => import('source/pages/RegisterPage.vue'),
    name: 'register'
}];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
