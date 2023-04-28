import {createRouter} from 'vue-router'

//Main Pages
import Homepage from './Home.vue';
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import People from './People.vue';

//Services
import BuildingSurveying from './Services/BuildingSurveying/BuildingSurveying.vue';
import PrincipalDesigner from './Services/PrincipalDesigner/PrincipalDesigner.vue';
import ProjectManagement from './Services/ProjectManagement/ProjectManagement.vue';
import QuantitySurveying from './Services/QuantitySurveying/QuantitySurveying.vue';

//Building Surveying
import Dilapidations from './Services/BuildingSurveying/Dilapidations.vue';
import PartyWall from './Services/BuildingSurveying/PartyWallService.vue';
import Surveying from './Services/BuildingSurveying/Surveying.vue'

//Building Surveying Projects
import PartyWallProjects from './Projects/PartyWall.vue';
import DilapidationProjects from './Projects/Dilapidations.vue'
import BuildingSurveyingProjects from './Projects/BuildingSurveying.vue'

//Front Page Full Page Project
import FullPageProject from './Projects/FullPageProject.vue';

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
    path: '/Projects/Dilapidations/',
    component: DilapidationProjects,
    meta: { title: 'Dilapidation Projects - PSC Surveying Ltd.' },
  },

  {
    path: '/Projects/Building-Surveying/',
    component: BuildingSurveyingProjects,
    meta: { title: 'Building Surveying Projects - PSC Surveying Ltd.' },
  },

  {
    path: '/:name/',
    component: FullPageProject,
    meta: { title: 'Case Study - PSC Surveying Ltd.' },
  },

  {
    path: '/Building-Surveying/:name/',
    component: FullPageProject,
    meta: { title: 'Case Study - PSC Surveying Ltd.' },
  },

  {
    path: '/Project-Management/:name/',
    component: FullPageProject,
    meta: { title: 'Case Study - PSC Surveying Ltd.' },
  },

  {
    path: '/Quantity-Surveying/:name/',
    component: FullPageProject,
    meta: { title: 'Case Study - PSC Surveying Ltd.' },
  },

  {
    path: '/Principal-Designer/:name/',
    component: FullPageProject,
    meta: { title: 'Case Study - PSC Surveying Ltd.' },
  },
]

export default function (history) {
  return createRouter({
    history,
    routes,
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      }
      if (to.hash) {
        return { el: to.hash }
      }
      else {
        return { top: 0 }
      }
    }
  })
}