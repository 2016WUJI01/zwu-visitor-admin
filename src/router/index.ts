import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        meta: {
            title: '首页',
            keepAlive: true,
            requireAuto: true,
        },
        component: () => import('@/pages/index.vue'),
    },
    {
        path: '/vueUse',
        name: 'VueUse',
        meta: {
            title: 'vueUse使用',
            keepAlive: true,
            requireAuto: false,
        },
        component: () => import('@/pages/vueUse.vue'),
    },
    {
        path: '/test',
        name: 'Test',
        meta: {
            title: '测试',
            keepAlive: true,
            requireAuto: false,
        },
        component: () => import('@/pages/test.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
