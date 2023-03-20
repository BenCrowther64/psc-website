<script>
import Footer from '../../../components/Footer.vue';
import LogoNavBar from '../../../components/LogoNavBar.vue';
import ExpandableProject from '../../../components/Projects/ExpandableProject.vue';

import Project1 from '../../../assets/images/projects/party-wall/image1.jpg';
import Project2 from '../../../assets/images/projects/party-wall/image2.jpg';
import Project3 from '../../../assets/images/projects/party-wall/image3.png';
import Project4 from '../../../assets/images/projects/party-wall/image4.jpg';
import Project5 from '../../../assets/images/projects/party-wall/image5.jpg';

export default {
  components: {
    Footer,
    ExpandableProject,
    LogoNavBar,
  },

  data() {
    return {
      Millbank: {
        title: 'MILLBANK',
        image: Project3,
        description: 'Demolition and construction of a new building including the installation of acoustic protection, isolation and piling under Sections 2 & 6.4 Millbank, London.\n\nPSC acting for the Adjoining Owner - Tenant of Basement - On Site.\n\nIssues for Resolition - Nopise and disturbance during installation of acoustic protection prior to isolation, demolition and construction.',
      },

      Dormer: {
        title: 'DORMER ROOF',
        image: Project2,
        description: 'Construction of a dormer roof involving cutting a padstone into the party wall under Section (2) (f) and exposing the party wall under (2) (n).\n\nPSC acting for the Building Owner - Consent recieved from Adjoining Owner - 2023.\n\nIssue for Resolution - Late notice issued by Building Owner. Schedule of condition undertaken to protect the interests of the Building Owners and the Adjoining Owener.',
      },

      Excavation: {
        title: 'EXCAVATION',
        image: Project5,
        description: 'Adjacent excavation under section 6 (1) already completed. Underpinning to be planned under section 2 (2) (a).\n\nPSC Acting for five Adjoining Owners - Awards concluded in December 2022.\n\nIssues for Resolution - Notice served. No awards or schedules of condition in place before commerncement of works. Awards agreed for underpinning with monitoring surveyor. Claim(s) for damage outside act.',
      },
      
      York: {
        title: 'YORK EXCAVATION',
        image: Project4,
        description: 'Adjacent excavation under section 6 (1) and various works under 2 (2). Ten Adjoining Owners in the centre of York.\n\nPSC Acting for Building Owner (Private Developer). Works currently on site.\n\nIssues for Resolution - Multiple adjoining owners of residential and commerical property employing national party wall surveyors. Fire escape to maintain during the works.',
      },

      Merrion: {
        title: 'MERRION STREET',
        image: Project1,
        description: 'Demolition and Construction under Sections 2 (2) (g), Adjacent Excavation & Construction Section 6 (1) - Merrion Street, Leeds - On Site.\n\nPSC Acting for Adjoining Owner(s) - Landlord and Tenant of the Wrens Hotel.\n\nIssues for Resolution - Stability of the adjoining owners building during demolition, weather protection and carrying up flues after construction.',
      },
    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>
        PARTY WALL PROJECTS
    </h1>

    <div class="project-type-container">
        <ExpandableProject  :projectName="Merrion.title" :image="Merrion.image" :content="Merrion.description"/>
        <ExpandableProject  :projectName="Millbank.title" :image="Millbank.image" :content="Millbank.description"/>
        <ExpandableProject  :projectName="Dormer.title" :image="Dormer.image" :content="Dormer.description"/>
        <ExpandableProject  :projectName="Excavation.title" :image="Excavation.image" :content="Excavation.description"/>
        <ExpandableProject  :projectName="York.title" :image="York.image" :content="York.description"/>
    </div>

    <Footer></Footer>
</template>


<style scoped>
h1 {
  color: var(--psc-dark-blue);
  font-size: 1.5em;
  font-weight: 500;
  text-align: left;
  margin: 0% 1% 1% 1%;
}

.project-type-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: space-around;
  gap: 1%;
  margin: 1% 1% 0 1%;
}
</style>
