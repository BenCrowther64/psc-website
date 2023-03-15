<script>
import Footer from '../components/Footer.vue';
import LogoNavBar from '../components/LogoNavBar.vue';
import ProjectType from '../components/Projects/ProjectType.vue';

import PartyWallImage from '../assets/images/services/building-surveying/party-wall/banner.jpg';

export default {
  components: {
    Footer,
    ProjectType,
    LogoNavBar,
  },

  data() {
    return {
      PartyWallImage,
    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>CHECK OUT OUR RECENT PROJECTS ACROSS A VARIETY OF PRIVATE AND PUBLIC SECTORS, WHERE OUR EXPERT TEAM PROVIDED COMPREHENSIVE SERVICES INCLUDING BUILDING SURVEYING, PROJECT MANAGEMENT, 
      QUANTITY SURVEYING, AND PRINCIPAL DESIGNER SERVICES, ENSURING THE SUCCESSFUL DELIVERY OF EACH PROJECT TO THE HIGHEST STANDARDS.</h1>

    <div class="project-type-container">
      <ProjectType class = "project" projectType="PARTY WALL" :image="PartyWallImage"/>
      <ProjectType class = "project" projectType="DILAPIDATIONS" :image="PartyWallImage"/>
      <ProjectType class = "project" projectType="BUILDING SURVEYING" :image="PartyWallImage"/>
      <ProjectType class = "project" projectType="PRINCIPAL DESIGNER" :image="PartyWallImage"/>
      <ProjectType class = "project" projectType="PROJECT MANAGEMENT" :image="PartyWallImage"/>
      <ProjectType class = "project" projectType="QUANTITY SURVEYING" :image="PartyWallImage"/>
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
  flex-direction: row;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 1%;
  gap: 1%;
}

.project {
    flex: 0 0 24%;
    margin: 0% 0% 1% 0%;
}
</style>
