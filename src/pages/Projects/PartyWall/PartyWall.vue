<script>
import Footer from '../../../components/Footer.vue';
import LogoNavBar from '../../../components/LogoNavBar.vue';
import ExpandableProject from '../../../components/Projects/ExpandableProject.vue';

import PartyWallImage from '../../../assets/images/services/building-surveying/party-wall/banner.jpg';

export default {
  components: {
    Footer,
    ExpandableProject,
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
    
    <h1>
        PARTY WALL PROJECTS
    </h1>

    <div class="project-type-container">
        <ExpandableProject class = "project" projectName="Example" :image="PartyWallImage"/>
        <ExpandableProject class = "project" projectName="Example" :image="PartyWallImage"/>
        <ExpandableProject class = "project" projectName="Example" :image="PartyWallImage"/>
        <ExpandableProject class = "project" projectName="Example" :image="PartyWallImage"/>
        <ExpandableProject class = "project" projectName="Example" :image="PartyWallImage"/>
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
    flex: 0 0 25%;
    margin: 0% 0% 1% 0%;
}
</style>
