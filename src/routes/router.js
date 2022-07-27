import { createWebHistory, createRouter } from "vue-router";

import Home from '@/pages/Home';
import Videos from '@/pages/Videos';
import Sobre from '@/pages/Sobre';

const routes = [
    { 
        path: '/',
        component: Home
    },
    { 
        path: '/videos',
        component: Videos
    },
    { 
        path: '/sobre',
        component: Sobre
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;