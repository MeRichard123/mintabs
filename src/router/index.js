import { createRouter, createWebHashHistory } from 'vue-router';
import UniversityView from '../views/UniversityView.vue';
import PersonalView from '../views/PersonalView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'university' },
  },
  {
    path: '/student',
    name: 'university',
    component: UniversityView,
    meta: {
      title: 'University | Home',
    },
  },
  {
    path: '/personal',
    name: 'personal',
    component: PersonalView,
    meta: {
      title: 'Personal | Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
