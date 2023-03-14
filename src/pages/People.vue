<script>
import Footer from '../components/Footer.vue';
import LogoNavBar from '../components/LogoNavBar.vue';

export default {
  components: {
    LogoNavBar,
    Footer,
  },
}
</script>

<template>
    <LogoNavBar></LogoNavBar>

    <div class = "top-banner">
      <h1>Meet the Team</h1>
      <h1 id = "explanation">AN EXPERIENCED PRACTICE OF CHARTERED SURVEYORS, QUANTITY SURVEYORS, PROJECT MANAGERS, BUILDING SURVEYORS & PRINCIPLE DESIGNERS BASED IN LEEDS SINCE 2011.</h1>
    </div>

    <div class = directors-wrapper>
      <h1>DIRECTORS</h1>
      <div>
        <div class = directors-container>
          <div class = director>  
            <img src="../assets/images/people/paul.jpg">
              <div class = "text-wrapper">
                <h3 id = "name">Paul Smith</h3> 
                <p id = "role">Cost Consultancy and Project Management Director</p> 
                <p id = "qualifications">MRICS MAPM</p> 
                <div id ="description"> 
                  <p>
                    Paul is a founding director of PSC Surveying Ltd and set up the business in 2011. Paul is an experienced Project Manager and Quantity Surveyor, 
                    with over 30 years working in the Construction Industry. Paul’s experience includes both new build and refurbishment, from country houses, 
                    to city centre apartments, retail, commercial, industrial, hospitality and leisure, and sport/leisure, historic and listed buildings.
                  </p>
                  <p>
                    Paul has previously worked for a number of blue chip companies, including International Cost Consultants, International Property Development Companies
                    and leading leisure and hospitality operators. Paul has a wide ranging knowledge of the development process and specialises in assisting the client development 
                    manager through the project plan, from feasibility through commercial negotiation through to project delivery and handover.
                  </p>
                  <p>
                    When time allows Paul enjoys spending time with his family, or watching Rugby and Motor sport.
                  </p>
                </div>
              </div>
          </div>
          <div class = director>  
            <img src="../assets/images/people/stephen.jpg">  
            <div class = "text-wrapper">
                <h3 id = "name">Stephen Crowther</h3> 
                <p id = "role">Building Surveying and Principal Designer</p> 
                <p id = "qualifications">MRICS CMaPS Tech IOSH</p> 
                <div id = "description"> 
                  <p>
                    Stephen is a director of PSC Surveying Ltd, a Chartered Building Surveyor and Certified Member of
                    the Association of Project Safety with over 30 years experience of surveying commercial, industrial
                    and residential buildings for a range of purposes from acquisition, disposal, defect diagonis and
                    dilapidations.
                  </p>
                  <p>
                    Stephen also has a wide range of experience in undertaking the role of Principal Designer and Client
                    (CDM 2015) Adviser under the Construction (Design and Management) Regulations 2015 (CDM
                    2015) and is accoustomed to working with multidisciplinary design teams to evidence the design risk
                    management process. 
                  </p>
                  <p> 
                    Before joining PSC Surveying Ltd, Stephen was the managing director of a firm of building surveyors,
                    principal designers, client (CDM 2015) advisers and asbestos surveyors working throughout the
                    united kingdom for national clients on large scale new build commecial, industrial and residential
                    developments as well as refurbishment projects.
                  </p>
                  <p> 
                    Stephen is a keen supporter of Leeds Rhinos, Yorkshire County Cricket Club and Otley Beer Festival.
                  </p>
                </div>
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

#description {
  margin: 0;
  max-width: 25vw;
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
  .directors-wrapper {
    text-align: center;
  }
  .directors-container {
    flex-direction: column;
    align-items: center;
  }
  .directors-container img {
    width: 80vw;
    height: 50vh;
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
    max-width: 80vw;
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

  #description{
    max-width: 80vw;
  }
  }

  @media (max-width: 768px) {
  .directors-wrapper {
    text-align: center;
  }
  .directors-container {
    flex-direction: column;
    align-items: center;
  }
  .directors-container img {
    width: 80vw;
    height: 50vh;
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
    max-width: 80vw;
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

  #description{
    max-width: 80vw;
  }
</style>
