import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

import routes from '@/router/routes.js';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {auth: true}
        },
        {
            path: '/auth',
            name: 'auth',
            component: () => import('../views/LoginView.vue'),
        },
        {
            path: '/note',
            name: 'note',
            component: () => import('../views/HomeView.vue'),
            meta: {auth: true}
        },
    ]
});

router.beforeEach(routes);

export default router
