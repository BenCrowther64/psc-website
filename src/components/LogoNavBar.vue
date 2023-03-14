<script>
import HomeImageLink from '../components/HomeImage.vue';
import NavScreen from '../components/NavScreen.vue';

export default {
  components: {
    HomeImageLink,
    NavScreen,
  },
}
</script>

<template>
    <div class = "top-wrapper">
        <NavScreen darkMode="true"/>
        <HomeImageLink></HomeImageLink>
    </div>  
</template>

<style>
    .top-wrapper {
        width: 100%;
        height: 10vh;
    }
</style>