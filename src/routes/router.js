import { createWebHistory, createRouter } from "vue-router";

import Home from '@/pages/Home';
import Videos from '@/pages/Videos';

const routes = [
    { 
        path: '/',
        component: Home
    },
    { 
        path: '/videos',
        component: Videos
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;