<script>
import Footer from '../components/Footer.vue';
import HomeImageLink from '../components/HomeImage.vue';
import NavScreen from '../components/NavScreen.vue';

export default {
  components: {
    HomeImageLink,
    Footer,
    NavScreen,
  },
}
</script>

<template>
    <NavScreen darkMode="true"/>
    <HomeImageLink></HomeImageLink>
    <h3>Quantity Surveying</h3>
    <Footer></Footer>
</template>


<style scoped>
h3 {
    text-align: center;
    margin-top: 5%;
}
</style>
