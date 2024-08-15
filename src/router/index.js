import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobView from '@/views/JobView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: 'home',
            component:HomeView
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component:JobView
        },
        {
            path: '/jobs/add',
            name: 'Add Jobs',
            component:JobView
        }
    ]
})
export default router;