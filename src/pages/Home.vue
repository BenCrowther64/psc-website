<script>
import Carousel from '../components/Carousel/Carousel.vue';
import BottomFooter from '../components/Footer.vue';
import NavScreen from '../components/NavScreen.vue';
import Offering from '../components/Home/Offering.vue';
import RecentProject from '../components/Home/RecentProject.vue';
import WideRecentProject from '../components/Home/WideRecentProject.vue';

import SlideShow1 from '../assets/images/home/img1.jpg';
import SlideShow2 from '../assets/images/home/img2.jpg';
import SlideShow3 from '../assets/images/home/img3.png';

import OfferingImage1 from '../assets/images/home/PLACEHOLDER.jpg';

export default {
  data() {
    return {
      show : false,
      Slides: [SlideShow1, SlideShow2, SlideShow3],
      OfferingImage1,
    }
  },
  methods: {
    toggleNavScreen() {
      this.show = !this.show
    }
  },
  setup() {
    return {
      SlideShow1,
      SlideShow2,
      SlideShow3,
    }
  },
  components: {
    Offering,
    Carousel,
    BottomFooter,
    NavScreen,
    RecentProject,
    WideRecentProject,
  },
}
</script>

<template>
    <Transition>
      <NavScreen v-if="show" @toggle="toggleNavScreen"/>
    </Transition>

    <section class="carousel">
      <Carousel :slides="Slides" />
      <img id="main-branding" src = "../assets/images/branding/logo-base-ver-3-blue.png"/>
      <button class="nav-screen-button open" @click="toggleNavScreen()"></button>
    </section>
    
    <section class="main-header text">
      <div class="text-wrapper">
        <h1>
          AN EXPERIENCED PRACTICE OF CHARTERED SURVEYORS, QUANTITY SURVEYORS, PROJECT MANAGERS,
          BUILDING SURVEYORS & PRINCIPLE DESIGNERS BASED IN LEEDS SINCE 2011.
        </h1>
      </div>
    </section>

    <hr class="solid">

    <section class="offerings">
      <div class="offerings-wrapper">
        <Offering
          title="QUANTITY SURVEYING"
          text="Projects range from the preperation of cost plans at the feasability stage for small house building to construction, new build and refurbishment of residential, commercial and industrial properties."
          link="/Quantity-Surveying"
          :image="OfferingImage1"
        />
        <Offering
          title="PROJECT MANAGEMENT"
          text="We have a wealth of experience in the procurement and delivery of retail, leisure, commercial, office and residential schemes throughout the United Kingdom."
          link="/Project-Management"
          :image="OfferingImage1"
        />
        <Offering
          title="BUILDING SURVEYING"
          text="Our services include residential and commercial surveys for aquisition, occupation, disposal or development. We act for landlords & tenants in dilapidations and carry out work under the Party Wall etc Act 1996."
          link="/Building-Surveying"
          :image="OfferingImage1"
        />
        <Offering
          title="PRINCIPAL DESIGNER"
          text="We are a corporate member of the Association of Project Safety and work closey with multi-disciplinary design teams to ensure the design risk management process under the CDM 2015 Regulation."
          link="/Principal-Designer"
          :image="OfferingImage1"
        />
      </div>
    </section>
    
    <section class="recent-projects">
        <h1>RECENT PROJECTS...</h1>
        <p>Some recent projects worked on by PSC Surveying Ltd.</p>
        <div class = "projects-wrapper">
          <WideRecentProject
            :image="OfferingImage1"
            projectName="EXAMPLE PROJECT NAME"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="EXAMPLE PROJECT NAME"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="EXAMPLE PROJECT NAME"
            long="false"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="EXAMPLE PROJECT NAME"
          />
          <RecentProject
            :image="OfferingImage1"
            projectName="EXAMPLE PROJECT NAME"
          />
          <WideRecentProject
            :image="OfferingImage1"
            projectName="EXAMPLE PROJECT NAME"
          />
        </div>  
    </section>

    <section class="contact">
      <div class = contact-wrapper>
        <div class = contact-text>
          <h1>PLEASE GET IN TOUCH</h1>
          <p>Paul Smith (Quantity Surveying & Project Management) T: 07713 167555</p>
          <a href="mailto: pauls@psc-surveying-ltd.com">pauls@psc-surveying-ltd.com</a>
          <p>Stephen Crowther (Building Surveying & Principal Designer) T: 07912 392045</p>
          <a href="mailto: stephenc@psc-surveying-ltd.com">stephenc@psc-surveying-ltd.com</a>
        </div>
      </div>
    </section>

    <BottomFooter />

</template>

<style scoped>
.main-header {
    margin: 40px 0px;
    position: relative;
    display: flex;
    width: 100%;
    color: #f3f3f3;
}

.text-wrapper {
    font-size: large;
    padding: 0 8%;
    width: 100%;
    justify-content: center;
    text-align: center;
}

.carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(100,100,100);
}
 
#main-branding{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 20%;
    max-height: 20%;
    object-fit: cover;
}

.nav-screen-button{
    position: absolute;
    top: 1%;
    right: 1%;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #f3f3f3;
    cursor: pointer;
}

.open{
    background-image: url(../assets/images/home/hamburger.png);
    background-size: cover;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.5s;
}
.v-enter-from, .v-leave-to {
    opacity: 0;
}

.text{
  color: black;
}

.contact{
  display: flex;
  justify-content: center;
}
.contact-wrapper{
  margin: 0% 1% 1% 1%;
  background-color: #f1f1f1;
  display: flex;
  width: 100%;
  justify-content: center;
}

.contact-text{
  padding: 3%;
  width: 100%;
  text-align: center;
}

.contact-text h1{
  font-size: 30px;
  margin: 0;
  color: var(--psc-dark-blue);
}

.contact-text a{
  font-weight: bolder;
  color: var(--psc-dark-blue);
  background: none;
}

.contact-text a:hover{
  text-decoration: underline;
}

.offerings-wrapper{
  max-width: 100%;
  display: flex;
  flex-direction: row;
  margin: 1%;
  gap: 1%;
}

.recent-projects{
  margin: 2% 1% 0% 1%;
}

.recent-projects p{
  margin: 5px 0px;
  font-size: 15px;
}

.recent-projects h1{
  color:var(--psc-dark-blue);
  font-size: 30px;
  margin-bottom: 0px;
}

.projects-wrapper{
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
  justify-content: space-evenly;
}
</style>