<script>
import Footer from '../../components/Footer.vue';
import TopBannerImage from '../../components/TopBannerImage.vue';

export default {
  components: {
    Footer,
    TopBannerImage,
  },
}
</script>

<template>
    <TopBannerImage text="SURVEYING"></TopBannerImage>

    <div class = text-wrapper>
      <h1>BUILDING SURVEYING SERVICES</h1>
      <p>
        Our party wall services are delivered by Stephen Crowther MRICS, CMaPS, Tech IOSH, who is a Director of PSC Surveying Ltd, a Chartered Building Surveyor and a member of The Pyramus & Thisbe Society. 
      </p>
      <p>
        The Pyramus & Thisbe Society is a learned society for professionals with a particular interest in matters relating to The Party Wall etc. Act 1996 and in the solving of all other similar neighbour issues. 
        The Society seeks to advance knowledge of party wall legislation and procedure and to promote best professional practice in its application. All members are bound to conform the Societies Protocols.
      </p>
      <p>
        We aim to give some simple guidance as what action a Building Owner planning to undertake work on their residential or commercial property, which falls under the jurisdiction of The Party Wall etc. Act 1996 
        (the ‘Act’) might want to take. Also, we can advise Adjoining Owners who might have been served with a Notice(s) by a Building Owner or their Surveyor.
      </p>
      <p>
        The ‘Act’ grants rights to Building Owners to carry out specific building work. At the same time the ‘Act’ protects the rights of Adjoining Owners, or neighbours, from being ‘unreasonably, inconvenienced as a 
        result of the right to carry out this specific building work. 
      </p>
      <p>
        The specific building work includes:
      </p>
      <ul>
        <li>
            New building on or adjacent to the boundary line.
        </li>
        <li>
            Digging within 3.0 m or 6.0 m of an Adjoining Owners building or structure to a level lower than the bottom of the Adjoining Owners foundations.
        </li>
        <li>
            Carrying out specific work to a shared structure on the boundary line which could include a wall between two different owners or the floor/ceiling between flats.
        </li>
      </ul>
      <p>
        By following the procedural requirements of the ‘Act’ Building Owners protect themselves from any delays to a project once work starts on site which might arise as a result of not properly notifying their 
        neighbour. 
      </p>
      <p>
        A photographic and written schedule of condition, undertaken on the Adjoining Owners property before the commencement of any works forms an important part of the process. The schedule of condition protects the 
        Building Owner from being liable for any pre-existing damage. Also, it protects the Adjoining Owner by proving any damage, in the unlikely event this occurs, was not pre-existing.
      </p>
      <p>
        PSC Surveying Ltd are able to assist Building Owners and Adjoining Owners in ensuring the procedural requirements of the ‘Act’ are followed and have been carrying out this role throughout England and Wales for many years. 
      </p>
      <p>
        We do this by undertaking title deed searches on adjoining properties, serving letters/ notices, undertaking photographic and written schedules of condition and agreeing ‘Party Wall Awards’ before the commencement of any 
        building works which fall under the jurisdiction of the Party Wall etc Act 1996.
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
