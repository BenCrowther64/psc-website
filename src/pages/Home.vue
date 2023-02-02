<script>
import Carousel from '../components/Carousel/Carousel.vue';
import TopNavbar from '../components/TopNavbar.vue';
import BottomFooter from '../components/Footer.vue';

import SlideShow1 from '../assets/images/home/img1.jpg';
import SlideShow2 from '../assets/images/home/img2.jpg';
import SlideShow3 from '../assets/images/home/img3.jpg';

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
    <Carousel :images="Slides" />
    <h3> Home </h3>
    <TopNavbar />
    <BottomFooter />
</template>


<style></style>