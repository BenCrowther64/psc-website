<script>
import Carousel from '../components/Carousel/Carousel.vue';
import BottomFooter from '../components/Footer.vue';
import NavScreen from '../components/NavScreen.vue';

import SlideShow1 from '../assets/images/home/img1.jpg';
import SlideShow2 from '../assets/images/home/img2.jpg';
import SlideShow3 from '../assets/images/home/img3.png';

export default {
  data() {
    return {
      show : false,
      Slides: [SlideShow1, SlideShow2, SlideShow3]
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
      SlideShow3
    }
  },
  components: {
    Carousel,
    BottomFooter,
    NavScreen
  },
}
</script>

<template>
    <Transition>
      <NavScreen v-if="show" @toggle="toggleNavScreen"/>
    </Transition>
    <section class="carousel">
      <Carousel :slides="Slides" />
      <img id = "main-branding" src = "../assets/images/branding/logo-base-ver-3-blue.png"/>
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
    <BottomFooter />
</template>

<style scoped>
.main-header {
    margin: 50px 0px;
    position: relative;
    display: flex;
    width: 100%;
    height: 10vh;
    color: #f3f3f3;
}

.text-wrapper {
    height: 100%;
    position: absolute;
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

</style>