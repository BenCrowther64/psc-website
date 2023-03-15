<script>
import HomeImageLink from './HomeImage.vue';
import NavScreen from './NavScreen.vue';

import DefaultImage from '../assets/images/home/offering1.jpg'

export default {
  components: {
    HomeImageLink,
    NavScreen,
  },

  props: {
    text: {
      type: String,
    },
    image: {
      type: String,
      default: DefaultImage,
    },
    top: {
      type: Boolean,
      default: false,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    logoColour: {
      type: Number,
      default: 0,
    },
  },

  methods: {
    scrollDown() {
      window.scrollTo({
        top: 50 * window.innerHeight/100,
        behavior: 'smooth'
      });
    }
  },

  data() {
    return {
      DefaultImage,
    }
  },
}
</script>

<template>
    <div class="top-banner-wrapper">  
      <img :src='image' :class="[top ? 'top-image' : 'center-image']">
      <h1>{{ text }}</h1>
      <NavScreen :dark-mode='dark'/>
      <HomeImageLink :colour="logoColour"/>
      <button @click="scrollDown">SCROLL</button>
    </div>
</template>


<style scoped>
  .top-banner-wrapper {
    width: 100%;
    height: 50vh;
  }

  .top-banner-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .top-image{
    object-position: top;
  }

  .center-image{
    object-position: center;
  }

  .top-banner-wrapper h1 {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
  }

  .top-banner-wrapper button {
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: transparent;
    color: white;
    border: none;
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
  }

  .top-banner-wrapper button:hover {
    text-decoration: underline;
  }
</style>