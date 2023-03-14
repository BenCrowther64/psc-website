<script>
import RecentProject from '../../components/Home/RecentProject.vue';
import OfferingImage1 from '../../assets/images/home/offering1.jpg';

export default {
    components: {
        RecentProject,
    },
    data() {
        return {
            OfferingImage1,
        }
    },
    props:{
        homePage: {
            type: Boolean,
            default: false,
        },
    }
}
</script>


<template>
    <section class="recent-projects">
        <h1 v-if="homePage">RECENT PROJECTS...</h1>
        <p v-if="homePage">Some recent projects worked on by <span id="name">PSC Surveying Ltd.</span></p>
        <div class = "projects-wrapper">
          <RecentProject
            :image="OfferingImage1"
            projectName="Project 1"
            :isLong="true"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="Project 2"
            :isLong="false"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="Project 3"
            :isLong="false"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="Project 4"
            :isLong="false"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="Project 5"
            :isLong="false"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="Project 6"
            :isLong="true"
          />
        </div>  
    </section>
</template>

<style>
  .recent-projects{
      margin: 1% 1% 0% 1%;
  }

  .projects-wrapper{
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      gap: 1%;
      justify-content: space-evenly;
  }

  .recent-projects p{
      color: var(--psc-medium-gray);
      margin: 5px 0px;
      font-size: 15px;
  }

  .recent-projects h1{
      color:var(--psc-dark-blue);
      font-size: 30px;
      margin-bottom: 0px;
  }

  @media (pointer:none), (pointer:coarse){
    .projects-wrapper{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1%;
    }
  }

  @media (max-width: 768px) {
    
  }
</style>