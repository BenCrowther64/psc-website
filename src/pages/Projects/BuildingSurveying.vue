<script>
import Footer from '../../components/Footer.vue';
import LogoNavBar from '../../components/LogoNavBar.vue';
import ExpandableProject from '../../components/Projects/ExpandableProject.vue';

import Project1 from '../../assets/images/projects/building-surveying/image1.jpg';
import Project2 from '../../assets/images/projects/building-surveying/image2.jpg';
import Project3 from '../../assets/images/projects/building-surveying/image3.jpg';
import Project4 from '../../assets/images/projects/building-surveying/image4.jpg';
import Project5 from '../../assets/images/projects/building-surveying/image5.jpg';

export default {
  components: {
    Footer,
    ExpandableProject,
    LogoNavBar,
  },

  data() {
    return {

    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>
        DILAPIDATION PROJECTS
    </h1>

    <div class="project-type-container">

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
