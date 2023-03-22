<script>
import Footer from '../../../components/Footer.vue';
import TopBannerImage from '../../../components/TopBannerImage.vue';
import RecentProjectContainer from '../../../components/Home/RecentProjectContainer.vue';

import Banner from '../../../assets/images/services/building-surveying/banner.jpg';

export default {
  components: {
    Footer,
    TopBannerImage,
    RecentProjectContainer,
  },

  data() {
    return {
      Banner,
    }
  },
}
</script>

<template>
    <TopBannerImage text = "BUILDING SURVEYING" :image="Banner" :dark="true"></TopBannerImage>

    <div class = bs-heading>
      <h1>
        WITH EXTENSIVE EXPERIENCE ACROSS A WIDE RANGE OF PRIVATE AND PUBLIC SECTORS, OUR EXPERT BUILDING SURVEYING TEAM OFFERS DETAILED INSPECTIONS AND SURVEYS TO ASSESS 
        THE CONDITION OF A BUILDING'S STRUCTURE ENSURING THE SAFETY, INTEGRITY, AND VALUE OF YOUR PROPERTY.
      </h1>
    </div>

    <div class = "bs-offerings-wrapper">
      <div class = bs-wrapper>
        <router-link to='/Building-Surveying/Dilapidations/'>
          <div class = bs-offering>
            DILAPIDATIONS
          </div>
        </router-link>
      </div>
      <div class = bs-wrapper>
        <router-link to='/Building-Surveying/Party-Wall/'>
          <div class = bs-offering>
            PARTY WALL
          </div>
        </router-link>
      </div>
      <div class = bs-wrapper>
        <router-link to='/Building-Surveying/Surveying/'>
          <div class = bs-offering>
            SURVEYING
          </div>
        </router-link>
      </div>
    </div>

    <hr class="solid">

    <RecentProjectContainer :homePage="false" route="Building-Surveying/" />

    <Footer></Footer>
</template>


<style scoped>

.bs-offerings-wrapper {
    display: flex;
    flex-direction: row;
    max-width: 100%;
    margin: 0 1% 2% 1%;
    gap: 1%;
  }

.bs-wrapper {
    flex: 1;
}
.bs-offering {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    background-color: var(--psc-light-gray);
    color: var(--psc-dark-blue);
    font-size: 1.1em;
    font-weight: 500;
    text-align: center;
}

.bs-offering:hover {
    background-color: var(--psc-dark-blue);
    color: var(--psc-light-gray);
    transform: translate(0, -5px);
}

.bs-heading{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 1%;
    color: var(--psc-dark-blue);
    font-size:  1em;
    font-weight: 500;
}


@media (pointer:none), (pointer:coarse){
    .bs-offering {
        font-size: 0.8em;
        flex-direction: column;
        margin: 1%;
        gap: 4%;
    }

    .bs-heading{
        font-size:  0.6em;
    }
}

@media (max-width: 768px) {
    .bs-offering {
      font-size: 0.8em;
      flex-direction: column;
      margin: 1%;
      gap: 4%;
    }

    .bs-heading{
      font-size:  0.6em;
    }
}
</style>
