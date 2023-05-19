<script>
import Carousel from '../components/Carousel/Carousel.vue';
import BottomFooter from '../components/Footer.vue';
import NavScreen from '../components/NavScreen.vue';
import Offering from '../components/Home/Offering.vue';
import ContactDiv from '../components/Home/ContactDiv.vue';
import RecentProjectContainer from '../components/Home/RecentProjectContainer.vue';

import SlideShow1 from '../assets/images/home/img1.jpg';
import SlideShow2 from '../assets/images/home/img2.jpg';
import SlideShow3 from '../assets/images/home/img3.jpg';

import OfferingImage1 from '../assets/images/home/offering1.jpg';
import QuantitySurveyImage from '../assets/images/home/offering1.jpg';
import ProjectManagerImage from '../assets/images/home/offering2.jpg';
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
      offeringShow: [false, false, false, false]
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
    window.addEventListener('touchmove', this.onScroll);
    if (this.isMobile()) {
      this.inView = true;
      for (let i = 0; i < 4; i++) {
        this.offeringShow[i] = true;
      }
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('touchmove', this.onScroll);
  },
  watch: {
    offsetTop (val) {
       this.callbackFunc()
    },
  },
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
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
          for (let i = 0; i < 4; i++) {
            setTimeout(() => {this.offeringShow[i] = true;}, i * 400);
          }
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
            BUILDING SURVEYORS & PRINCIPAL DESIGNERS BASED IN LEEDS SINCE 2011.
          </h1>
        </div>
      </section>
    </Transition>

    <hr class="solid">

    <section class="offerings">
      <div class="offerings-wrapper">
        <Offering 
          title="QUANTITY SURVEYING"
          text="Projects range from the preperation of cost plans at the feasability stage for small house building to construction, new build and refurbishment of residential, commercial and industrial properties."
          link="/Quantity-Surveying"
          :image="QuantitySurveyImage"
          :visible="offeringShow[0]"
        />
        <Offering 
          title="PROJECT MANAGEMENT"
          text="We have a wealth of experience in the procurement and delivery of retail, leisure, commercial, office and residential schemes throughout the United Kingdom."
          link="/Project-Management"
          :image="ProjectManagerImage"
          :visible="offeringShow[1]"
        />
        <Offering 
          title="BUILDING SURVEYING"
          text="Our services include residential and commercial surveys for aquisition, occupation, disposal or development. We act for landlords & tenants in dilapidations and carry out work under the Party Wall etc Act 1996."
          link="/Building-Surveying"
          :image="BuildingSurveyingImage"
          :visible="offeringShow[2]"
        />
        <Offering 
          title="PRINCIPAL DESIGNER"
          text="We are a corporate member of the Association of Project Safety and work closely with multi-disciplinary design teams to ensure the design risk management process under the CDM 2015 Regulation."
          link="/Principal-Designer"
          :image="PrincipalDesignerImage"
          :visible="offeringShow[3]"
        />
      </div>
    </section>

    <RecentProjectContainer/>

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
    font-size: 0.7em;
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
  justify-content: left;
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

@media (pointer:none), (pointer:coarse){
  #main-branding{
    width: 30vh;
  }
  .offerings-wrapper{
    flex-direction: column;
    gap: 3vh;
    margin: 1%;
  } 

  .text-wrapper{
    font-size: 1.3em;
  }
}

@media (max-width: 738px) {
  #main-branding{
    width: 30vh;
  }

  .offerings-wrapper{
    flex-direction: column;
    gap: 3vh;
    margin: 1%;
  }

  .text-wrapper{
    font-size: 1.3em;
  }

}
</style>