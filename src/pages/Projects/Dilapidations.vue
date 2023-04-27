<script>
import Footer from '../../components/Footer.vue';
import LogoNavBar from '../../components/LogoNavBar.vue';
import ExpandableProject from '../../components/Projects/ExpandableProject.vue';

import Project1 from '../../assets/images/projects/dilapidations/image1.jpg';
import Project2 from '../../assets/images/projects/dilapidations/image3.jpg';
import Project3 from '../../assets/images/projects/dilapidations/image2.jpg';
import Project4 from '../../assets/images/projects/dilapidations/image5.jpg';
import Project5 from '../../assets/images/projects/dilapidations/image4.jpg';

export default {
  components: {
    Footer,
    ExpandableProject,
    LogoNavBar,
  },

  data() {
    return {
      Brackenbeck: {
        title: 'BRACKENBECK ROAD',
        image: Project1,
        description: 'Industrial Unit & Offices - Brackenbeck Road, Bradford - Acting on behalf of a Tenant in defending a dilapidation claim from the Landlord.\n\nIssues - A deed of surrender was signed at twenty percent less than the Landlords original claim. In this instance the Tenant undertook the majority of the works. The discussions on settlement centered on the extent of Tenants liability to "repair" cut edge corrosion on a relitively short lease.',
      },

      SilverStreet: {
        title: 'SILVER STREET',
        image: Project2,
        description: 'First Floor Offices - Silver Street, Doncaster. Acting on behalf of the Landlord in preparing a terminal schedule of dilapidations.\n\nIssues - The tenant had been "holding over" on a long lease. The Tenant completed the majority of works but the condition of the windows in terms of "repair" or "replacement" could not be agreeed. Costs for repairing the windows were set against the Landlord cost of replacement.'
      },

      StationRoad: {
        title: 'STATION ROAD',
        image: Project3,
        description: 'Retail Unit - Station Road, Otley, Leeds. Acting on behalf of the Tenant in advising on the extent of the dilapidation liability during the lease.\n\nIssues - The purpose of the inspection was to advise the Tenant on the extent of their repairing, re-decoration and reinstatement obligations during the term of lease so they could plan ahead and make suitable allowances for the extent of these liabilities when the lease came to an end.'
      },

      JayesPark: {
        title: 'JAYES PARK',
        image: Project4,
        description: 'Office and Retail Unit - Jayes Park, Ockley. Acting on behalf of a Tenant in defending a dilapidation claim from the Landlord.\n\nIssues - A short term lease extention was granted to allow the Tenant to complete the "agreed" works. PSC administered the contract but the Landlord was not satisfied. The Landlord submitted a further claim for damages on completion of the Tenant works that was higher than the original claim. No claim to answer for Tenant.'
      },

      Sherburn: {
        title: 'SHERBURN',
        image: Project5,
        description: 'Retail Unit - Sherburn in Elmet, Leeds. Acting on behalf of a Landlord in preparing a terminal shedule of dilapidations.\n\nIssues - The Tenant had vacated the property with twelve months left on the term. A schedule was prepared and a scope of works agreed with the Tenants surveyor. This scope of works was competetively tendered and an amount for early surrender of the lease was agreed.'
      }

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
        <ExpandableProject :projectName="Brackenbeck.title" :image="Brackenbeck.image" :content="Brackenbeck.description"/>
        <ExpandableProject :projectName="SilverStreet.title" :image="SilverStreet.image" :content="SilverStreet.description"/>
        <ExpandableProject :projectName="StationRoad.title" :image="StationRoad.image" :content="StationRoad.description"/>
        <ExpandableProject :projectName="JayesPark.title" :image="JayesPark.image" :content="JayesPark.description"/>
        <ExpandableProject :projectName="Sherburn.title" :image="Sherburn.image" :content="Sherburn.description"/>
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
