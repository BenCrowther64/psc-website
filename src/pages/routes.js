import {createRouter} from 'vue-router'

//Main Pages
const Homepage = () => import('./Home.vue');
const Projects = () => import('./Projects.vue');
const Contact = () => import('./Contact.vue');
const People = () => import('./People.vue');

//Services
const BuildingSurveying = () => import('./Services/BuildingSurveying/BuildingSurveying.vue');
const PrincipalDesigner = () => import('./Services/PrincipalDesigner/PrincipalDesigner.vue');
const ProjectManagement = () => import('./Services/ProjectManagement/ProjectManagement.vue');
const QuantitySurveying = () => import('./Services/QuantitySurveying/QuantitySurveying.vue');

//Building Surveying
const Dilapidations = () => import('./Services/BuildingSurveying/Dilapidations.vue');
const PartyWall = () => import('./Services/BuildingSurveying/PartyWallService.vue');
const Surveying = () => import('./Services/BuildingSurveying/Surveying.vue');

//Building Surveying Projects
const PartyWallProjects = () => import('./Projects/PartyWall.vue');
const DilapidationProjects = () => import('./Projects/Dilapidations.vue')
const BuildingSurveyingProjects = () => import('./Projects/BuildingSurveying.vue')

//Front Page Full Page Project
const FullPageProject = () => import('./Projects/FullPageProject.vue');

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
      // checks if the user is on the homepage and if they are, it scrolls to the top of the page
      if (to.path === "/") {
        return
      }
      // checks if the user going to a previously navigated page and if they are, it scrolls to the position they were at
      if (savedPosition) {
        return savedPosition
      }
      if (to.hash) {
        return { el: to.hash }
      }
      // if new page, scroll to top of page
      else {
        return { top: 0 }
      }
    }
  })
}