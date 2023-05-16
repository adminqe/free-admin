import { RouteRecordRaw, RouterView, createRouter, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: RouterView,
    },
]

export const router = createRouter({
    routes,
    history: createWebHistory(),
})
