import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/views/MainDashboard.vue')
    },
    /*    {
           path: '/characters',
           name: 'characters',
           component: () => import('@/views/character/CharactersView.vue')
       }, */
    {
        path: '/create-character',
        name: 'create-character',
        component: () => import('@/views/character/CharacterCreate.vue')
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
