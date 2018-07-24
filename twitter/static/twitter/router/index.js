import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: () => import('source/pages/LoginPage.vue'),
    name: 'login'
}];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
