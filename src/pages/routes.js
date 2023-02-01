import {createRouter} from 'vue-router'
import Homepage from './Home.vue';
import About from './About.vue';
import Projects from './Projects.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/About/',
    component: About
  },

  {
    path: '/Projects/',
    component: Projects
  },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}