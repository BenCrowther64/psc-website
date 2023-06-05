<script>
import Footer from '../../components/Footer.vue';
import LogoNavBar from '../../components/LogoNavBar.vue';
import ExpandableProject from '../../components/Projects/ExpandableProject.vue';

import Project1 from '../../assets/images/projects/quantity-surveying/image1.jpg';
import Project2 from '../../assets/images/projects/quantity-surveying/image2.jpg';
import Project3 from '../../assets/images/projects/quantity-surveying/image3.jpg';
import Project4 from '../../assets/images/projects/quantity-surveying/image4.jpg';
import Project5 from '../../assets/images/projects/quantity-surveying/image5.jpg';
// Missing Project 6
// Missing Project 7
import Project8 from '../../assets/images/projects/quantity-surveying/image8.jpg';

export default {
  components: {
    Footer,
    ExpandableProject,
    LogoNavBar,
  },

  data() {
    return {
      Hotel: {
        title: 'BOUTIQUE HOTEL',
        image: Project1,
        description: 'Refurbishments of grade II Listed property to create boutique hotel.\n\nQuantity Surveyor.\n\nProject value £ 5 million. Private Client.\nCompletes June 23 2023.',
      },

      Burberry: {
        title: 'HIGH END RETAIL',
        image: Project2,
        description: 'Various retail fit outs for Burberry and Bottega Venetta in Harrods and Heathrow departure terminals.\n\nQuantity Surveyor.\n\nProject values £ 90,000 to £ 1 million.\nOngoing.',
      },
      
      Industrial: {
        title: 'INDUSTRIAL UNIT',
        image: Project3,
        description: 'Internal alteration and refurbishment to create cash and carry fit out of industrial unit.\n\nQuantity Surveyor.\n\nProject Value £ 3.9 million.\nCompleted March 23 2023.',
      },

      Pub: {
        title: 'PUBLIC HOUSE',
        image: Project4,
        description: 'Refurbishment of existing public house, including extensive rebuilding and extension.\n\nQuantity Surveyor.\n\nProject Value £ 1.3 million.\nOngoing.',
      },

      Residential: {
        title: 'RESIDENTIAL ACCOMMODATION',
        image: Project5,
        description: 'Extensive redevelopment of existing residential accommodation, including air sourced heating, PV, insulated render, polished concrete floors, resin bound gravel driveway.\n\nQuantity Surveyor.\n\nProject Value £ 800,000.\nCompletion May 23 2023.',
      },

      Farm: {
        title: 'FARM COMPLEX',
        image: Project8,
        description: 'Alteration and extension of Listed Building farm complex to create hotel, external works and restaurant.\n\nQuantity Surveyor.\n\nProject Value £ 14 million.\nOngoing.',
      }
    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>
        QUANTITY SURVEYING PROJECTS
    </h1>

    <div class="project-type-container">
        <ExpandableProject  :projectName="Hotel.title" :image="Hotel.image" :content="Hotel.description"/>
        <ExpandableProject  :projectName="Burberry.title" :image="Burberry.image" :content="Burberry.description"/>
        <ExpandableProject  :projectName="Industrial.title" :image="Industrial.image" :content="Industrial.description"/>
        <ExpandableProject  :projectName="Pub.title" :image="Pub.image" :content="Pub.description"/>
        <ExpandableProject  :projectName="Residential.title" :image="Residential.image" :content="Residential.description"/>
        <ExpandableProject  :projectName="Farm.title" :image="Farm.image" :content="Farm.description"/>
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
