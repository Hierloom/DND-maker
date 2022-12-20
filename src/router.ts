import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/MainDashboard.vue')
    },
    {
        path: '/create-character',
        name: 'create-character',
        component: () => import('@/views/MainDashboard.vue')
    },
    {
        path: '/interactive-character-creator',
        name: 'interactive-character-creator',
        component: () => import('@/views/ClassOverview.vue')
    },
];

export default createRouter({
    history: createWebHashHistory('./'),
    routes,
});
