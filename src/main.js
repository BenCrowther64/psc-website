import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'

import createRouter from './pages/routes.js'
import App from './App.vue'

import './assets/main.css'

const router = createRouter(createWebHistory())
router.beforeEach((to, from, next) => {
    console.log(to);
    document.title = to.meta.title;
    next();
  });

const app = createApp(App)
app.use(router).mount('#app')