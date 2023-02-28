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

    <div class = "top-banner">
      <h1>Meet the Team</h1>
      <h1 id = "explanation">AN EXPERIENCED PRACTICE OF CHARTERED SURVEYORS, QUANTITY SURVEYORS, PROJECT MANAGERS, BUILDING SURVEYORS & PRINCIPLE DESIGNERS BASED IN LEEDS SINCE 2011.</h1>
    </div>

    <div class = directors-wrapper>
      <h1>DIRECTORS</h1>
      <div>
        <div class = directors-container>
          <div class = director>  
            <img src="../assets/images/people/stock.jpg">
              <div class = "text-wrapper">
                <h3 id = "name">Paul Smith</h3> 
                <p id = "role">Director of Building Surveying</p> 
                <p id = "qualifications">RICS Certified Historic Building Professional MRIC</p> 
                <p>Ian is a Chartered Building Surveyor, Certified Historic Building Professional and Director of Building Surveying at wrdunn. Previously Associate and Senior Building Surveyor, Ian has held a leading role in the repair and restoration of numerous buildings of historic importance and Listed structures together with alterations, extensions and refurbishments to residential, commercial and institutional properties. Ian is one of a small number of professionals nationally to be Accredited in Building Conservation by RICS, and one of only 10 in Yorkshire.</p>
              </div>
          </div>
          <div class = director>  
            <img src="../assets/images/people/stock.jpg">  
            <div class = "text-wrapper">
                <h3 id = "name">Stephen Crowther</h3> 
                <p id = "role">Director of Building Surveying</p> 
                <p id = "qualifications">RICS Certified Historic Building Professional MRIC</p> 
                <p>Ian is a Chartered Building Surveyor, Certified Historic Building Professional and Director of Building Surveying at wrdunn. Previously Associate and Senior Building Surveyor, Ian has held a leading role in the repair and restoration of numerous buildings of historic importance and Listed structures together with alterations, extensions and refurbishments to residential, commercial and institutional properties. Ian is one of a small number of professionals nationally to be Accredited in Building Conservation by RICS, and one of only 10 in Yorkshire.</p>
              </div>
            </div>
        </div>
      </div>

    </div>
    <Footer></Footer>
</template>


<style scoped>
.directors-wrapper {
  max-width: 100%;
  margin: 1%;
}

.directors-wrapper h1 {
  font-size: 1.8em;
  font-weight: 600;
  color: var(--psc-dark-blue);
  margin: 10px 0px;
}

.directors-container {
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  gap: 30px;
}

.directors-container img {
  width: 23vw;
  height: 80vh;
  object-fit: cover;
}
.director {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: left;
  text-align: left;
}

#name {
  font-weight: 600;
  color: var(--psc-dark-blue);
  margin: 0;
}

#role {
  margin-bottom: 0;
}

#qualifications {
  font-style: italic;
  margin: 0;
}

.text-wrapper {
  display: flex;
  flex-direction: column;
  margin-left: 1%;
}

.text-wrapper p {
  font-size: 15px;
}

.top-banner {
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--psc-light-gray);
  padding: 2%;
  margin: 0 1%;
}

#explanation {
  font-weight: 400;
  margin-top: 0;
}

@media (pointer:none), (pointer:coarse){
  .directors-container {
    flex-direction: column;
    align-items: center;
  }
  .directors-container img {
    width: 80vw;
    height: 40vh;
    object-fit: cover;
  }
  .director {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
  }
  .text-wrapper p {
    font-size: 15px;
  }

  .top-banner h1 {
    font-size: 1.5em;
  }

  #name {
    margin-top: 2vh;
    }
  }

  @media (max-width: 1080px) {
    .directors-container {
    flex-direction: column;
    align-items: center;
  }
  .directors-container img {
    width: 80vw;
    height: 40vh;
    object-fit: cover;
  }
  .director {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
  }
  .text-wrapper {
    display: flex;
    flex-direction: column;
    margin-left: 0%;
  }
  .text-wrapper p {
    font-size: 15px;
  }

  .top-banner h1 {
    font-size: 1.5em;
  }

  #name {
    margin-top: 2vh;
    }
  }
</style>
