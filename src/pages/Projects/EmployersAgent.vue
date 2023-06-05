<script>
import Footer from '../../components/Footer.vue';
import LogoNavBar from '../../components/LogoNavBar.vue';
import ExpandableProject from '../../components/Projects/ExpandableProject.vue';

import Project1 from '../../assets/images/projects/employers-agent/image1.jpg';
import Project2 from '../../assets/images/projects/employers-agent/image2.jpg';
import Project3 from '../../assets/images/projects/employers-agent/image3.jpg';
import Project4 from '../../assets/images/projects/employers-agent/image4.jpg';
import Project5 from '../../assets/images/projects/employers-agent/image5.jpg';
// Missing Project 6
import Project7 from '../../assets/images/projects/employers-agent/image7.jpg';

export default {
  components: {
    Footer,
    ExpandableProject,
    LogoNavBar,
  },

  data() {
    return {
      Industrial: {
        title: 'INDUSTRIAL UNIT',
        image: Project1,
        description: 'Conversion of former industrial unit into six high quality apartments for sale in the open market.\n\nEmployer’s Agent and quantity surveyor for repeat developer Client.\n\nProject Value £ 800,000.\nCompleted 2022.',
      },

      Store: {
        title: 'M&S STORE',
        image: Project2,
        description: 'Demolition and site clearance, formation of new build M&S Food Store, including car park and highway access.\n\nEmployer’s Agent and Quantity Surveyor.\n\nProject Value £ 2,300,000.\nCompleted.',
      },

      Premier: {
        title: 'PREMIER INN',
        image: Project3,
        description: 'Conversion of existing city centre department store into Premier Inn and retail units Project value £ 7.6 million. Chesterfield.\n\nEmployer’s Agent and Quantity Surveyor.\n\nProject Value £ 7,600,000.\nCompleted.',
      },
      
      Sainsburys: {
        title: 'SAINSBURYS LOCAL',
        image: Project4,
        description: 'Conversion of former pub to retail convenience store, including extension and car park alterations.\n\nEmployer’s Agent and Quantity Surveyor for Developer Client.\n\nProject Value £ 400,000.\nCompleted 2022.',
      },

      Middlesbrough: {
        title: 'MIDDLESBROUGH',
        image: Project5,
        description: 'Refurbishment of existing office to Grade A accommodation together with new multi storey car park. £ 18 million. Middlesborough.\n\nEmployer’s Agent and quantity surveyor for Jomast.\n\nProject Value £ 18 million.\nStart on site 2024.',
      },

      Hotel: {
        title: 'HOTEL',
        image: Project7,
        description: 'Rebuilding of former fire damaged church to create hotel and wedding venue.\n\nEmployer’s Agent and quantity surveyor.\n\nProject Value £ 4,000,000\nCompletion 2024',
      },
    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>
        EMPLOYERS AGENT PROJECTS
    </h1>

    <div class="project-type-container">
        <ExpandableProject  :projectName="Industrial.title" :image="Industrial.image" :content="Industrial.description"/>
        <ExpandableProject  :projectName="Store.title" :image="Store.image" :content="Store.description"/>
        <ExpandableProject  :projectName="Premier.title" :image="Premier.image" :content="Premier.description"/>
        <ExpandableProject  :projectName="Sainsburys.title" :image="Sainsburys.image" :content="Sainsburys.description"/>
        <ExpandableProject  :projectName="Middlesbrough.title" :image="Middlesbrough.image" :content="Middlesbrough.description"/>
        <ExpandableProject  :projectName="Hotel.title" :image="Hotel.image" :content="Hotel.description"/>
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
