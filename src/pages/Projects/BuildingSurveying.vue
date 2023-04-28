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
        CuckneyHouse: {
            title: "CUCKNEY HOUSE",
            image: Project1,
            description: "Condition Survey - Cuckney House, Langwith Road, Norton involving the conversion of the existing Grade II listed property into a luxury holiday let.\n\nSurvey - A photographic and written survey was required to identify on annotated drawings the condition of the internal and external components of the building for the Architect's to prepare an application for listed building consent and identify detailed costs for the project."
        },

        ResidentialLeeds: {
            title: "RESIDENTIAL PROPERTY LEEDS",
            image: Project2,
            description: "Building Survey - Survey of residential property in Leeds in connection with a private purchase.\n\nSurvey - A photographic and written survey was required in order to identify any significant defects which might affect purchase of the property. Typical defects include failed seals to double glazed window, cracking to ceiling due to overloaded storage in the attic and high ground levels. No significant defects.",
        },

        DenholmeChurch: {
            title: "DENHOLME SHARED CHURCH",
            image: Project3,
            description: "Building Survey - Quinquennial inspection of Denholme Shared Church.\n\nSurvey - The objective of the survey was to ensure the early detection of decoration and defects so that prompt action could be taken and any unnecessary expenses avoided. The property is an asset to the Church and it is important that all property is maintained in a good state of repair even if disposal may need to be contemplated in the long term.",
        },

        Eureka: {
            title: "EUREKA!",
            image: Project4,
            description: "Planned preventative maintenance of museum, commercial and industrial property at Eureka! Halifax.\n\nSurvey - Various condition surveys have been undertaken on the Childrens Museum, 1855 Office Building, Car Parking areas, Great Northern Shed, Footbridge and Working Horse Museum in order to understand and plan for essential maintenance and repair costs for the successful operation of the museum and its assets."
        },

        AngelInn: {
            title: "ANGEL INN",
            image: Project5,
            description: "Condition Survey in connection with the acquisition of the Angel Inn, York where the purchaser was planning a scheme for major refurbishment.\n\nSurvey - The property inspection raised issues associated with the condition and completeness of the services, how it has been extended and altered and a lack of maintenance, repair and decoration to the structure and fabric of the building over the last few years."
        }

    }
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>
    
    <h1>
        BUILDING SURVEYING PROJECTS
    </h1>

    <div class="project-type-container">
        <ExpandableProject :project-name="CuckneyHouse.title" :image="CuckneyHouse.image" :content="CuckneyHouse.description"/>
        <ExpandableProject :project-name="ResidentialLeeds.title" :image="ResidentialLeeds.image" :content="ResidentialLeeds.description"/>
        <ExpandableProject :project-name="DenholmeChurch.title" :image="DenholmeChurch.image" :content="DenholmeChurch.description"/>
        <ExpandableProject :project-name="Eureka.title" :image="Eureka.image" :content="Eureka.description"/>
        <ExpandableProject :project-name="AngelInn.title" :image="AngelInn.image" :content="AngelInn.description"/>
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
