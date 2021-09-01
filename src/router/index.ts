import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home,
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/',
    alias: '/tutorials',
    name: 'tutorials',
    component: () => import('../views/Jobs.vue'),
  },
  // {
  //   path: '/tutorials/:id',
  //   name: 'tutorial-details',
  //   component: () => import('../components/Tutorials/Details.vue'),
  // },
  // {
  //   path: '/add',
  //   name: 'add',
  //   component: () => import('../components/Tutorials/Add.vue'),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
