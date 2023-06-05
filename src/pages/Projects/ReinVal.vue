<script>
import Footer from '../../components/Footer.vue';
import LogoNavBar from '../../components/LogoNavBar.vue';
import ExpandableProject from '../../components/Projects/ExpandableProject.vue';

import Project1 from '../../assets/images/projects/rein-val/image1.jpg';
import Project2 from '../../assets/images/projects/rein-val/image2.jpg';
import Project3 from '../../assets/images/projects/rein-val/image3.jpg';
import Project4 from '../../assets/images/projects/rein-val/image4.jpg';
import Project5 from '../../assets/images/projects/rein-val/image5.jpg';
import Project6 from '../../assets/images/projects/rein-val/image6.jpg';

export default {
  components: {
    Footer,
    ExpandableProject,
    LogoNavBar,
  },

  data() {
    return {
      Greggs: {
        title: 'GREGGS SHOP',
        image: Project1,
        description: 'Reinstatement valuation for insurance purposes of new build drive thru Greggs, Bradford.\n\nEstimated value £ 900,000.',
      },

      Wedding: {
        title: 'WEDDING VENUE',
        image: Project2,
        description: 'Reinstatement Valuation for insurance purposes of Listed Buildings complex and external site operating as a wedding venue, South Yorkshire.',
      },

      Residential: {
        title: 'RESIDENTIAL APPARTMENTS',
        image: Project3,
        description: 'Reinstatement for insurance valuation of residential apartment development and external works.\n\nEstimated value £ 4.500,000.',
      },
      
      Listed: {
        title: 'LISTED BUILDING',
        image: Project4,
        description: 'Reinstatement valuation for insurance purposes of Listed Building.\n\nEstimated value £ 8,000,000.',
      },

      Sports: {
        title: 'VILLAGE HALL',
        image: Project5,
        description: 'Reinstatement valuation for insurance purposes of village sports hall and bar.\n\nEstimated value £ 2,500,000.',
      },

      Industrial: {
        title: 'INDUSTRIAL PARK',
        image: Project6,
        description: 'Reinstatement valuation for insurance purposes of industrial park, external areas and access road.\n\nEstimated value £ 25,000,000.',
      },
    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>
        REINSTATEMENT VALUATION PROJECTS
    </h1>

    <div class="project-type-container">
        <ExpandableProject  :projectName="Greggs.title" :image="Greggs.image" :content="Greggs.description"/>
        <ExpandableProject  :projectName="Wedding.title" :image="Wedding.image" :content="Wedding.description"/>
        <ExpandableProject  :projectName="Residential.title" :image="Residential.image" :content="Residential.description"/>
        <ExpandableProject  :projectName="Listed.title" :image="Listed.image" :content="Listed.description"/>
        <ExpandableProject  :projectName="Sports.title" :image="Sports.image" :content="Sports.description"/>
        <ExpandableProject  :projectName="Industrial.title" :image="Industrial.image" :content="Industrial.description"/>
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
