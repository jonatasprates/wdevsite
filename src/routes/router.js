import { createWebHistory, createRouter } from "vue-router";

import Home from '@/pages/Home';
import Videos from '@/pages/Videos';
import Sobre from '@/pages/Sobre';
//import Contato from '@/pages/Contato';

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
    },
    { 
        path: '/contato',
        component: () => import('@/pages/Contato')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router;