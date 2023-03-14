<script>
import HomeImageLink from './HomeImage.vue';
import NavScreen from './NavScreen.vue';

export default {
  components: {
    HomeImageLink,
    NavScreen,
  },

  props: {
    text: {
      type: String,
    }
  },

  methods: {
    scrollDown() {
      window.scrollTo({
        top: 50 * window.innerHeight/100,
        behavior: 'smooth'
      });
    }
  }
}
</script>

<template>
    <div class="top-banner-wrapper">  
      <img src="../assets/images/home/offering1.jpg">
      <h1>{{ text }}</h1>
      <NavScreen/>
      <HomeImageLink/>
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
    object-position: center;
  }

  .top-banner-wrapper h1 {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--psc-light-gray);
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