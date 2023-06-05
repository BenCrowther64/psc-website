<script>
import Footer from '../components/Footer.vue';
import LogoNavBar from '../components/LogoNavBar.vue';
import ProjectType from '../components/Projects/ProjectType.vue';

import PartyWallImage from '../assets/images/services/building-surveying/party-wall/banner.jpg';
import DilapidationsImage from '../assets/images/projects/dilapidations/image2.jpg';
import BuildingSurveyingImage from '../assets/images/projects/building-surveying/image5.jpg'
import EmployersAgentImage from '../assets/images/projects/employers-agent/image5.jpg';
import QuantitySurveyingImage from '../assets/images/projects/quantity-surveying/image5.jpg';
import ReinValImage from '../assets/images/projects/rein-val/image5.jpg';


export default {
  components: {
    Footer,
    ProjectType,
    LogoNavBar,
  },

  data() {
    return {
      PartyWallImage,
      DilapidationsImage,
      BuildingSurveyingImage,
      EmployersAgentImage,
      QuantitySurveyingImage,
      ReinValImage,
    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>CHECK OUT OUR RECENT PROJECTS ACROSS A VARIETY OF PRIVATE AND PUBLIC SECTORS, WHERE OUR EXPERT TEAM PROVIDED COMPREHENSIVE SERVICES INCLUDING BUILDING SURVEYING, PROJECT MANAGEMENT, 
      QUANTITY SURVEYING, AND PRINCIPAL DESIGNER SERVICES, ENSURING THE SUCCESSFUL DELIVERY OF EACH PROJECT TO THE HIGHEST STANDARDS.</h1>

    <div class="project-type-container">
      <ProjectType projectType="PARTY WALL" :image="PartyWallImage" projectUrl = "Party-Wall"/>
      <ProjectType projectType="DILAPIDATIONS" :image="DilapidationsImage" projectUrl = "Dilapidations"/>
      <ProjectType projectType="BUILDING SURVEYING" :image="BuildingSurveyingImage" projectUrl = "Building-Surveying"/>
      <ProjectType projectType="QUANTITY SURVEYING" :image="QuantitySurveyingImage" projectUrl = "Quantity-Surveying"/>
      <ProjectType projectType="EMPLOYERS AGENT" :image="EmployersAgentImage" projectUrl = "Employers-Agent"/>
      <ProjectType projectType="REINSTATEMENT VALUATIONS" :image="ReinValImage" projectUrl = "Reinstatement-Valuation"/>

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


@media (pointer:none), (pointer:coarse) {
    h1 {
        font-size: 1.2em;
    }

    .project-type-container {
        flex-flow: column wrap;
    }
}

@media (max-width: 738px){
    h1 {
        font-size: 1.2em;
    }

    .project-type-container {
        flex-flow: column wrap;
    }
}
</style>
