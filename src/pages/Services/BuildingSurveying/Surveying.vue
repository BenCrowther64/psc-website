<script>
import Footer from '../../../components/Footer.vue';
import TopBannerImage from '../../../components/TopBannerImage.vue';

export default {
  components: {
    Footer,
    TopBannerImage,
  },
}
</script>

<template>
    <TopBannerImage text="BUILDING SURVEYING"></TopBannerImage>

    <div class = text-wrapper>
      <h1>BUILDING SURVEYING SERVICES</h1>
      <p>
        Our Building Surveying activities are led by Stephen Crowther MRICS, CMaPS, Tech IOSH, who is a Director of PSC Surveying Ltd and a Chartered Building Surveyor with over 30 years of experience in surveying commercial, industrial and residential property for a range of purposes.
      </p>
      <p>
        Our Building Surveying Services include:
      </p>
      <ul>
        <li>
          Identification of <strong>Building Defects & Contract Administration</strong> of building repairs
        </li>
        <li>
          <strong>Building & Condition Surveys</strong> of Commercial, Industrial and Residential property
        </li>
        <li>
          <strong>Quality Monitoring</strong> of new build or refurbishment construction projects
        </li>
        <li>
          <strong>Party Wall Surveying & Dilapidations</strong>
        </li>
      </ul>
      <p>
        <strong>Identification of new build or refurbishment construction projects</strong>
      </p>
      <p>
        Building Surveyors specialise in the identification and rectification of building defects. Building defects could range from leaking roofs to structural movement and everything in between. We undertake detailed inspections on commercial, industrial and residential property to identify the root causes of any problems preparing specifications as to how these can be put right. Our role can extend to obtaining competitive quotations from building contractors and overseeing the work on site as a contract administrator.
      </p>
      <p>
        <strong>Commercial, Industrial and Residential Surveys</strong>
      </p>
      <p>
        Our range of surveys are tailored to your specific needs. This would be dependant on whether the survey is needed prior to an acquisition (pre-purchase, building survey or schedule of condition) during occupation as a building owner or tenant (stock condition, planned maintenance, schedule of condition to restrict repairing obligations under a lease or insurance related), if the property is being disposed of (vendor survey or terminal schedule of dilapidations) or if the building is being considered for re-development.
      </p>
      <p>
        <strong>Quality Monitoring</strong>
      </p>
      <p>
        This service involves undertaking site visits to new build or refurbishment construction projects and reviewing the quality of construction and compliance with the project specification. We would normally provide a report following each site visit identifying any issues which require the contractor’s attention. On completion of the project, we would normally snag out the works and issue a list to the Contractor. We would then liaise with the Contractor on the timescales for remedial works and re-inspect the works in preparation for practical completion.
      </p>
      <p>
        <strong>Party Wall Surveying</strong>
      </p>
      <p>
        We carry out the role of party wall surveyor for Building Owners and Adjoining Owners throughout England and Wales.
      </p>
      <p>
        <strong>Dilapidations</strong>
      </p>
      <p>
        We act for Landlords and Tenants at the start, during and at the end of commercial leases. We also act for Landlords on liaising with Tenants in connection with a licence for alterations.
      </p>
    </div>

    <Footer></Footer>
</template>


<style scoped>
.text-wrapper{
    margin: 1%;
}

.text-wrapper h1{
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    background: var(--psc-light-gray);
    margin-top: 1%;
    padding: 1%;
}

.text-wrapper p{
    font-size: .9rem;
    font-weight: 400;
    margin: 1% 0%;
    color: var(--psc-medium-gray);
}

.text-wrapper ul{
    font-size: .9rem;
    font-weight: 400;
    margin: 1% 0%;
    color: var(--psc-medium-gray);
}


@media (pointer:none), (pointer:coarse){
    .text-wrapper {
        margin: 4%;
    }

    .text-wrapper p{
        margin: 4% 0%;
    }

    .text-wrapper ul{
        margin: 4% 0%;
    }
}

@media (max-width: 768px) {
  .text-wrapper {
        margin: 4%;
    }

    .text-wrapper p{
        margin: 4% 0%;
    }

    .text-wrapper ul{
        margin: 4% 0%;
    }
}


</style>
