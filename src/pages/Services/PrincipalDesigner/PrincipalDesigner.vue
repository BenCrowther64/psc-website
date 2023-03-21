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
    <TopBannerImage text="PRINCIPAL DESIGNER"></TopBannerImage>

    <div class = text-wrapper>
      <h1>THE CONSTRUCTION (DESIGN & MANAGEMENT) REGULATIONS 2015 (CDM 2015) - PRINCIPAL DESIGNER SERVICES</h1>
      <p>
        Our Principal Designer activities are aimed at being able to evidence the design risk management process. This is led by Stephen Crowther MRICS, CMaPS, Tech IOSH, 
        who is a Director of PSC Surveying Ltd, a Chartered Building Surveyor. Having a single point of contact in terms of service delivery allows a high level of control 
        in terms of the quality and accuracy of the documents produced.
      </p>
      <p>
        The activities we monitor include the following:
      </p>
      <ul>
        <li>
          Compilation and issue of the Pre Construction Information Pack (PCIP)
        </li>
        <li>
          Evidencing Design Risk Management
        </li>
        <li>
          Compilation of the Health & Safety File
        </li>
      </ul>
      <p>
        A Project Directory with full contact details for the Client and all CDM 2015 Duty Holders is provided in our PCIP including a summary of the designers risk assessments 
        and any other relevant pre construction information such as a copy of the latest asbestos survey on buildings constructed before the year 2000.
      </p>
      <p>
        The PCIP is produced for every project which falls under the scope of the CDM 2015 Regulations where we are engaged as Principal Designer. The format will differ 
        depending on whether the project is considered to be low, medium or high risk.
      </p>
      <p>
        When undertaking the role of Principal Designer a site visit would be made as part of the role. Inclusion of a site survey checklist or schedule of photographs is used 
        to evidence the visit has been made along with identifying any site specific health and safety issues. 
      </p>
      <p>
        Design risk management is usually evidenced on simpler projects by completing a Design Risk Management & Significant Risk Register. On more complex projects this could include 
        the preparation of a Design Options Matrix. On appointment of a Principal Contractor we would usually include a review and comment on the Construction Phase Plan and submission 
        of the F10 notification for relevant projects to assist the Client.
      </p>
      <p>
        The compilation of the Health & Safety File starts at the beginning of each project where the relevant information in relation to residual risks can be collated from an early stage. 
        On completion of a project we ensure that the Health & Safety File is delivered by hand and signatures obtained so we can evidence that this has been delivered. 
      </p>
      <p>
        The processes for the delivery of our Principal Designer services are reviewed annually, along with the Health & Safety Policy, for their suitability and any 
        updated guidance from industry bodies. We have recently provided updated documents to reflect the APS Guidance on Design Risk Management with the introduction 
        of a ‘Project Timeline’ and ‘Site Surveys and Investigation Tracker’ for more complex projects.
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
