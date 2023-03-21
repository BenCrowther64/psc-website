import {createRouter} from 'vue-router'
import Homepage from './Home.vue';
import Projects from './Projects.vue';
import BuildingSurveying from './Services/BuildingSurveying/BuildingSurveying.vue';
import Contact from './Contact.vue';
import People from './People.vue';
import PrincipalDesigner from './Services/PrincipalDesigner/PrincipalDesigner.vue';
import ProjectManagement from './Services/ProjectManagement/ProjectManagement.vue';
import QuantitySurveying from './Services/QuantitySurveying/QuantitySurveying.vue';

import Dilapidations from './Services/BuildingSurveying/Dilapidations.vue';
import PartyWall from './Services/BuildingSurveying/PartyWallService.vue';
import Surveying from './Services/BuildingSurveying/Surveying.vue'

import PartyWallProjects from './Projects/PartyWall.vue';

import FrontPageProject1 from './Projects/FrontPageProjects/Project1.vue';
import FrontPageProject2 from './Projects/FrontPageProjects/Project2.vue';
import FrontPageProject3 from './Projects/FrontPageProjects/Project3.vue';
import FrontPageProject4 from './Projects/FrontPageProjects/Project4.vue';
import FrontPageProject5 from './Projects/FrontPageProjects/Project5.vue';
import FrontPageProject6 from './Projects/FrontPageProjects/Project6.vue';

const routes = [
  {
    path: '/',
    component: Homepage,
    meta: { title: 'PSC Surveying Ltd.' },
  },

  {
    path: '/Projects/',
    component: Projects,
    meta: { title: 'Projects - PSC Surveying Ltd.' },
  },

  {
    path: '/Building-Surveying/',
    component: BuildingSurveying,
    meta: { title: 'Building Surveying - PSC Surveying Ltd.' },
  },

  {
    path: '/Contact/',
    component: Contact,
    meta: { title: 'Contact - PSC Surveying Ltd.' },
  },

  {
    path: '/People/',
    component: People,
    meta: { title: 'People - PSC Surveying Ltd.' },
  },

  {
    path: '/Principal-Designer/',
    component: PrincipalDesigner,
    meta: { title: 'Principal Designer - PSC Surveying Ltd.' },
  },

  {
    path: '/Project-Management/',
    component: ProjectManagement,
    meta: { title: 'Project Management - PSC Surveying Ltd.' },
  },

  {
    path: '/Quantity-Surveying/',
    component: QuantitySurveying,
    meta: { title: 'Quantity Surveying - PSC Surveying Ltd.' },
  },

  {
    path: '/Building-Surveying/Dilapidations/',
    component: Dilapidations,
    meta: { title: 'Dilapidations - PSC Surveying Ltd.' },
  },

  {
    path: '/Building-Surveying/Party-Wall/',
    component: PartyWall,
    meta: { title: 'Party Wall - PSC Surveying Ltd.' },
  },

  {
    path: '/Building-Surveying/Surveying/',
    component: Surveying,
    meta: { title: 'Surveying - PSC Surveying Ltd.' },
  },

  {
    path: '/Projects/Party-Wall/',
    component: PartyWallProjects,
    meta: { title: 'Party Wall Projects - PSC Surveying Ltd.' },
  },


  {
    path: '/Project-1/',
    component: FrontPageProject1,
    meta: { title: 'Project 1 - PSC Surveying Ltd.' },
  },

  {
    path: '/Project-2/',
    component: FrontPageProject2,
    meta: { title: 'Project 2 - PSC Surveying Ltd.' },
  },

  {
    path: '/Project-3/',
    component: FrontPageProject3,
    meta: { title: 'Project 3 - PSC Surveying Ltd.' },
  },

  {
    path: '/Project-4/',
    component: FrontPageProject4,
    meta: { title: 'Project 4 - PSC Surveying Ltd.' },
  },

  {
    path: '/Project-5/',
    component: FrontPageProject5,
    meta: { title: 'Project 5 - PSC Surveying Ltd.' },
  },

  {
    path: '/Project-6/',
    component: FrontPageProject6,
    meta: { title: 'Project 6 - PSC Surveying Ltd.' },
  },
]

export default function (history) {
  return createRouter({
    history,
    routes,
    scrollBehavior (to, from, savedPosition) {
      return { top: 0 }
    }
  })
}