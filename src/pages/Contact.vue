<script>
import Footer from '../components/Footer.vue';
import ContactDiv from '../components/Home/ContactDiv.vue';
import HomeImageLink from '../components/HomeImage.vue';
import NavScreen from '../components/NavScreen.vue';

export default {
  components: {
    HomeImageLink,
    Footer,
    NavScreen,
    ContactDiv,
  },
}
</script>

<template>
    <NavScreen darkMode="true"/>
    <HomeImageLink></HomeImageLink>

    <div class = "contact-container">
      <p>PSC Surveying Ltd. <br> Thomborough Hall <br> Leyburn <br> North Yorkshire <br> DL8 5AB</p>
      <ContactDiv class = "contact-box"/>
    </div>
    <Footer></Footer>
</template>


<style scoped>
.contact-container {
  max-width: 100%;
  height: 87vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  margin: 1%;
}

.contact-container p {
  width: 15%;
  font-size: 1.5em;
  font-weight: 300;
  color: var(--psc-dark-blue);
  margin: 1%;
}

.contact-container .contact-box {
  height: 45%;
  width: 100%;
  margin: 1%;
}

@media (pointer:none), (pointer:coarse){
  .contact-container {
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .contact-container p {
    width: 100%;
    font-size: 1.5em;
    font-weight: 300;
    color: var(--psc-dark-blue);
    margin: 1%;
  }

  .contact-container .contact-box {
    height: 45%;
    width: 100%;
    margin: 1%;
  }
}

</style>