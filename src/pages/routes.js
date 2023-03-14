import {createRouter} from 'vue-router'
import Homepage from './Home.vue';
import Projects from './Projects.vue';
import BuildingSurveying from './BuildingSurveying.vue';
import Contact from './Contact.vue';
import People from './People.vue';
import PrincipalDesigner from './PrincipalDesigner.vue';
import ProjectManagement from './ProjectManagement.vue';
import QuantitySurveying from './QuantitySurveying.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },

  {
    path: '/Projects/',
    component: Projects
  },

  {
    path: '/Building-Surveying/',
    component: BuildingSurveying
  },

  {
    path: '/Contact/',
    component: Contact
  },

  {
    path: '/People/',
    component: People
  },

  {
    path: '/Principal-Designer/',
    component: PrincipalDesigner
  },

  {
    path: '/Project-Management/',
    component: ProjectManagement
  },

  {
    path: '/Quantity-Surveying/',
    component: QuantitySurveying
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}