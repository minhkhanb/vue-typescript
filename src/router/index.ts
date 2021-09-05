import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
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
    path: '/jobs',
    alias: '/jobs',
    name: 'jobs',
    component: () => import('../views/jobs/Jobs.vue'),
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: () => import('../views/jobs/JobDetails.vue'),
    props: true,
  },
  // redirect
  {
    path: '/all-jobs',
    redirect: '/jobs',
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
  },

  {
    path: '/reaction-time',
    alias: '/reaction-time',
    name: 'Reaction Time',
    component: () => import('../views/ReactionTime.vue'),
  },
  {
    path: '/sign-up',
    alias: '/sign-up',
    name: 'Sign Up',
    component: () => import('../views/Signup.vue'),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/Blog.vue'),
  },
  {
    path: '/post',
    name: 'Post',
    component: () => import('../views/Post.vue'),
  },
  {
    path: '/posts/:id',
    name: 'PostDetails',
    component: () => import('../views/PostDetails.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
