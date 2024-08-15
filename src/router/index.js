import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import JobsView from '@/views/JobsView.vue';
import NotFoundView from '@/views/NotFound.vue';
import JobDetail from '@/views/JobDetail.vue';
import AddJobView from '@/views/AddJobView.vue';
import JobEditView from '@/views/JobEditView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/jobs',
            name: 'Jobs',
            component: JobsView
        },

        {
            path: "/jobs/:id",
            name: "job",
            component: JobDetail
        },
        {
            path: "/jobs/add",
            name: "add-job",
            component: AddJobView
        },
        {
            path: "/jobs/edit/:id",
            name: "edit-job",
            component: JobEditView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
        }
    ]
})
export default router;