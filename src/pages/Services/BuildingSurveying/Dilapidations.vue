<script>
import Footer from '../../../components/Footer.vue';
import TopBannerImage from '../../../components/TopBannerImage.vue';

import Banner from '../../../assets/images/services/building-surveying/dilapidations/banner.jpg'

export default {
  components: {
    Footer,
    TopBannerImage,
  },
  data() {
    return {
      Banner,
    }
  }
}
</script>

<template>
    <TopBannerImage text="DILAPIDATIONS" :image="Banner"></TopBannerImage>

    <div class = text-wrapper>
      <h1>OUR DILAPIDATION ACTIVITIES ARE AIMED AT PROVIDING ADVICE TO LANDLORDS AND TENANTS OF COMMERCIAL AND INDUSTRIAL PROPERTY AT THE START, DURING OR AT THE END OF A LEASE.</h1>
      <p>
        Our Dilapidation services are delivered by Stephen Crowther MRICS, CMaPS, Tech IOSH, who is a Director of PSC Surveying Ltd, a Chartered Building Surveyor.
      </p>
      <p>
        <strong>
          Acting for a Landlord 
        </strong>
      </p>
      <p>
        When Acting for Landlord we would review the provisions of the relevant Lease and any Licence documentation obtaining clarification where necessary from the Landlord or their solicitor
         as to specific provisions including their intentions for the property. One of our Chartered Surveyors would carry out an inspection of the Property in order to prepare a Schedule of Dilapidations 
         to comply with the RICS Dilapidations Protocol and The Civil Procedure Rules. Where required this would include the engagement of specialist consultants to provide reports for incorporation 
         into a Schedule Of Dilapidations. 
      </p>
      <p>
        PSC Surveying Ltd would prepare a Schedule of Dilapidations providing pricing information for reinstatement, repair and redecoration works including obtaining competitive quotations where necessary. 
        When instructed by the Landlord we would provide the Schedule of Dilapidations to the Landlord’s solicitor for service upon the Tenant.  Upon the written instruction of the Landlord to do so, we would 
        carry out any further inspections of the Property as required. Upon the written instruction of the Landlord to do so, we would negotiate the settlement of the dilapidations claim and provide any 
        necessary assistance to the Landlord’s solicitor should legal proceedings be required to be taken against the Tenant. 
      </p>
      <p>
        Throughout this process we would continue to advise the Landlord generally as to the progress of the dilapidation claim and any settlement proposals. 
      </p>
      <p>
        <strong>
          Acting for a Tenant
        </strong>
      </p>
      <p>
        When acting for a Tenant we would review the provisions of the relevant Lease and any Licence documentation obtaining clarification where necessary from the Tenant or the Tenant’s solicitor as to any specific 
        provisions. This would include trying to establish the Landlord’s intentions for the property.  One of our Chartered Building Surveyors would carry out an inspection of the property and review/comment on the 
        Schedule of Dilapidations if one has been prepared by Landlord’s Surveyor. If no Schedule of Dilapidations has been prepared by the Landlord’s Surveyor, we would advise the Tenant on the likely scope and extent 
        of reinstatement, redecoration and repair works required to be undertaken by the Tenant prior to the lease end. Upon the written instruction of the Tenant to do so, we could either negotiate the settlement of
        any dilapidations claim with the Landlord, or their Surveyor, or arrange for the procurement of the reinstatement, repair and re-decoration work prior to the lease end. If the lease has come to an end and upon
         the written instruction of the Tenant to do so we could provide assistance to the Tenant’s solicitor should legal proceedings be commenced by the Landlord. 
      </p>
      <p>
        Throughout this process we would continue to advise the Tenant generally as to the progress of the dilapidation claim and any settlement proposals.
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

@media (pointer:none), (pointer:coarse){
    .text-wrapper {
        margin: 4%;
    }

    .text-wrapper p{
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
}

</style>
