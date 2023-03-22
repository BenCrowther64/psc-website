<script>
import RecentProject from '../../components/Home/RecentProject.vue';
import img1 from '../../assets/images/projects/full-page-images/image1.jpg';
import img2 from '../../assets/images/projects/full-page-images/image2.jpg';
import img3 from '../../assets/images/projects/full-page-images/image3.png';
import img4 from '../../assets/images/projects/full-page-images/image4.jpg';
import img5 from '../../assets/images/projects/full-page-images/image5.jpg';
import img6 from '../../assets/images/projects/full-page-images/image6.jpg';

export default {
    components: {
        RecentProject,
    },
    data() {
        return {
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
        }
    },
    props:{
        homePage: {
            type: Boolean,
            default: false,
        },
        route: {
            type: String,
            default: "",
        }
    }
}
</script>

<template>
    <section class="recent-projects">
        <h1 v-if="homePage">RECENT PROJECTS...</h1>
        <p v-if="homePage">Some recent projects worked on by <span id="name">PSC Surveying Ltd.</span></p>
        <div class = "projects-wrapper">
          <RecentProject
            :image="img1"
            projectName="Woolston Manor"
            :isLong="true"
            :extraRoute="route"
          />
          <RecentProject
            :image="img2"
            projectName="Aldershot Garrison"
            :isLong="false"
            :extraRoute="route"
          />
          <RecentProject
            :image="img3"
            projectName="Basingstoke Hospital"
            :isLong="false"
            :extraRoute="route"
          />
          <RecentProject
            :image="img4"
            projectName="Riverside House"
            :isLong="false"
            :extraRoute="route"
          />
          <RecentProject
            :image="img5"
            projectName="St. Marys Church"
            :isLong="false"
            :extraRoute="route"
          />
          <RecentProject
            :image="img6"
            projectName="Village Hall"
            :isLong="true"
            :extraRoute="route"
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
    .projects-wrapper{
        flex-direction: row;
        flex-wrap: wrap;
        gap: 1%;
    }
  }
</style>