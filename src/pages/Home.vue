<script>
import Carousel from '../components/Carousel/Carousel.vue';
import TopNavbar from '../components/TopNavbar.vue';
import BottomFooter from '../components/Footer.vue';

import SlideShow1 from '../assets/images/home/img1.jpg';
import SlideShow2 from '../assets/images/home/img2.jpg';
import SlideShow3 from '../assets/images/home/img3.png';

export default {
  data() {
    return {
      Slides: [SlideShow1, SlideShow2, SlideShow3]
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
    TopNavbar,
    Carousel,
    BottomFooter
  }
}
</script>

<template>
    <section class="carousel">
      <Carousel :images="Slides" />
      <img id = "main-branding" src = "../assets/images/branding/logo-base-ver-3.png"/>
    </section>
    <h3> Home </h3>
    <TopNavbar />
    <BottomFooter />
</template>


<style>

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
</style>