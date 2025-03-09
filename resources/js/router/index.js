import {createRouter, createWebHistory} from 'vue-router'
import Index from "../views/Index.vue";
import Page from "../views/Page.vue";

const routes = [
    { path: '/', component: Index},
    { path: '/index', component: Index },
    { path: '/page', component: Page },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
