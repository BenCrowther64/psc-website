import {createRouter} from 'vue-router'
import Homepage from './Home.vue';
import Projects from './Projects.vue';
import BuildingSurveying from './BuildingSurveying.vue';
import Contact from './Contact.vue';
import People from './People.vue';
import PrincipalDesigner from './PrincipalDesigner.vue';
import ProjectManagement from './ProjectManagement.vue';
import QuantitySurveying from './QuantitySurveying.vue';

import Dilapidations from './BuildingSurveying/Dilapidations.vue';
import PartyWall from './BuildingSurveying/PartyWallService.vue';
import Surveying from './BuildingSurveying/Surveying.vue';

import PartyWallProjects from './Projects/PartyWall/PartyWall.vue';

const routes = [
  {
    path: '/',
    component: Homepage,
    name: "Home",
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
  }
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