<script>
import Carousel from '../components/Carousel/Carousel.vue';
import BottomFooter from '../components/Footer.vue';
import NavScreen from '../components/NavScreen.vue';
import Offering from '../components/Home/Offering.vue';
import ContactDiv from '../components/Home/ContactDiv.vue';
import RecentProjectContainer from '../components/Home/RecentProjectContainer.vue';

import SlideShow1 from '../assets/images/home/img1.jpg';
import SlideShow2 from '../assets/images/home/img2.jpg';
import SlideShow3 from '../assets/images/home/img3.png';

import OfferingImage1 from '../assets/images/home/offering1.jpg';
import QuantitySurveyImage from '../assets/images/home/offering1.jpg';
import ProjectManagerImage from '../assets/images/home/offering2.jpeg';
import BuildingSurveyingImage from '../assets/images/home/offering4.jpg';
import PrincipalDesignerImage from '../assets/images/home/offering3.jpg';

export default {
  data() {
    return {
      Slides: [SlideShow1, SlideShow2, SlideShow3],
      OfferingImage1,
      QuantitySurveyImage,
      ProjectManagerImage,
      BuildingSurveyingImage,
      PrincipalDesignerImage,
      offsetTop: 0,
      inView: false,
      offeringInView: false,
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
    ContactDiv,
    RecentProjectContainer,
  },

  created () {
    window.addEventListener('scroll', this.onScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
  },
  watch: {
    offsetTop (val) {
       this.callbackFunc()
    }
  },
  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
    },
    isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },
    callbackFunc() {
      let el = document.querySelector(".main-header");
      if (el) {
        if (this.isElementInViewport(el)) {
          this.inView = true;
          setTimeout(() => {this.offeringInView = true;}, 300);
        } 
      }
    }
  },
}
</script>

<template>
    <NavScreen/>

    <section class="carousel">
      <Carousel :slides="Slides" />
      <img id="main-branding" src = "../assets/images/branding/logo-base-ver-3-blue.png"/>
    </section>
    
    <Transition>
      <section class="main-header text" v-show="inView">
        <div class="text-wrapper">
          <h1>
            AN EXPERIENCED PRACTICE OF CHARTERED SURVEYORS, QUANTITY SURVEYORS, PROJECT MANAGERS,
            BUILDING SURVEYORS & PRINCIPLE DESIGNERS BASED IN LEEDS SINCE 2011.
          </h1>
        </div>
      </section>
    </Transition>

    <hr class="solid">

    <Transition name="slide">
      <section class="offerings" v-show="offeringInView">
        <div class="offerings-wrapper">
          <Offering
            title="QUANTITY SURVEYING"
            text="Projects range from the preperation of cost plans at the feasability stage for small house building to construction, new build and refurbishment of residential, commercial and industrial properties."
            link="/Quantity-Surveying"
            :image="QuantitySurveyImage"
          />
          <Offering
            title="PROJECT MANAGEMENT"
            text="We have a wealth of experience in the procurement and delivery of retail, leisure, commercial, office and residential schemes throughout the United Kingdom."
            link="/Project-Management"
            :image="ProjectManagerImage"
          />
          <Offering
            title="BUILDING SURVEYING"
            text="Our services include residential and commercial surveys for aquisition, occupation, disposal or development. We act for landlords & tenants in dilapidations and carry out work under the Party Wall etc Act 1996."
            link="/Building-Surveying"
            :image="BuildingSurveyingImage"
          />
          <Offering
            title="PRINCIPAL DESIGNER"
            text="We are a corporate member of the Association of Project Safety and work closely with multi-disciplinary design teams to ensure the design risk management process under the CDM 2015 Regulation."
            link="/Principal-Designer"
            :image="PrincipalDesignerImage"
          />
        </div>
      </section>
    </Transition>

    <RecentProjectContainer :homePage="true"/>

    <ContactDiv />

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
    color: var(--psc-dark-blue);
}

.carousel {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(255,255,255);
}
 
#main-branding{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vh;
    object-fit: cover;
}

.text{
  color: black;
}
.offerings-wrapper{
  max-width: 100%;
  display: flex;
  flex-direction: row;
  margin: 1%;
  gap: 1%;
}

#name {
  color: var(--psc-dark-blue);
  font-weight: 500;
}

.v-enter-active, .v-leave-active {
    transition: all 0.7s;
}

.v-enter-from, .v-leave-to {
    transform: scale(0.2);
}
.slide-enter-active, .slide-leave-active {
    transition: all 0.7s;
}

.slide-enter-from, .slide-leave-to {
    transform: translateX(100%);
}

@media (pointer:none), (pointer:coarse){
  #main-branding{
    width: 25vh;
  }
  .offerings-wrapper{
    flex-direction: column;
    gap: 2vh;
    margin: 1%;
  } 

  .text-wrapper{
    font-size: 1.3em;
  }
}

@media (max-width: 738px) {
  #main-branding{
    width: 25vh;
  }

  .offerings-wrapper{
    flex-direction: column;
    gap: 2vh;
    margin: 1%;
  }

  .text-wrapper{
    font-size: 1.3em;
  }

}
</style>