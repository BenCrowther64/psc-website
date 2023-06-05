import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'

import createRouter from './pages/routes.js'
import App from './App.vue'

import './assets/main.css'

const router = createRouter(createWebHistory())
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
  });

const clickOutside = {
  beforeMount: (el, binding) => {
    el.clickOutsideEvent = event => {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value();
      }
    };
    document.addEventListener("mouseup", el.clickOutsideEvent);
  },
  unmounted: el => {
    document.removeEventListener("mouseup", el.clickOutsideEvent);
  },
};

const app = createApp(App).directive("click-outside", clickOutside)
app.use(router).mount('#app')