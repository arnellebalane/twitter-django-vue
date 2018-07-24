import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: () => import('../pages/LoginPage.vue'),
    name: 'login'
}];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;
