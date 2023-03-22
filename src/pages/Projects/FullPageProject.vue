<script>
import LogoNavBar from '../../components/LogoNavBar.vue';
import Footer from '../../components/Footer.vue';

import img1 from '../../assets/images/projects/full-page-images/image1.jpg';
import img2 from '../../assets/images/projects/full-page-images/image2.jpg';
import img3 from '../../assets/images/projects/full-page-images/image3.png';
import img4 from '../../assets/images/projects/full-page-images/image4.jpg';
import img5 from '../../assets/images/projects/full-page-images/image5.jpg';
import img6 from '../../assets/images/projects/full-page-images/image6.jpg';

export default {
    components: {
        LogoNavBar,
        Footer
    },

    data () 
    {
    return {
        projects: [
                {
                    title: 'Woolston Manor',
                    category: 'Quantity Surveying',
                    description: 'example description 1',
                    location: 'Woolston, Southampton',
                    caseStudy: "This property is a 3 storey building with a basement. The property is a Grade II listed building and is currently being converted into 3 flats. The project is currently in the design stage and is due to start on site in the next few months.",
                    img: img1
                },

                {
                    title: 'Aldershot Garrison',
                    category: 'Party Wall',
                    description: 'example description 2',
                    location: 'Aldershot, Hampshire',
                    caseStudy: "This property is a 3 storey building with a basement. The property is a Grade II listed building and is currently being converted into 3 flats. The project is currently in the design stage and is due to start on site in the next few months.",
                    img: img2
                },

                {
                    title: 'Basingstoke Hospital',
                    category: 'Dilapidations',
                    description: 'example description 3',
                    location: 'Basingstoke, Hampshire',
                    caseStudy: "This property is a 3 storey building with a basement. The property is a Grade II listed building and is currently being converted into 3 flats. The project is currently in the design stage and is due to start on site in the next few months.",
                    img: img3
                },

                {
                    title: 'Riverside House',
                    category: 'Project Management',
                    description: 'example description 4',
                    location: 'Riverside, Hampshire',
                    caseStudy: "This property is a 3 storey building with a basement. The property is a Grade II listed building and is currently being converted into 3 flats. The project is currently in the design stage and is due to start on site in the next few months.",
                    img: img4
                },

                {
                    title: 'St. Marys Church',
                    category: 'Surveying',
                    description: 'example description 5',
                    location: 'St Marys, Hampshire',
                    caseStudy: "This property is a 3 storey building with a basement. The property is a Grade II listed building and is currently being converted into 3 flats. The project is currently in the design stage and is due to start on site in the next few months.",
                    img: img5
                },

                {
                    title: 'Village Hall',
                    category: 'Principal Designer',
                    description: 'example description 6',
                    location: 'Village, Hampshire',
                    caseStudy: "This property is a 3 storey building with a basement. The property is a Grade II listed building and is currently being converted into 3 flats. The project is currently in the design stage and is due to start on site in the next few months.",
                    img: img6
                }
            ],

            title: '',
            category: '',
            description: '',
            location: '',
            caseStudy: '',
            img: '',
        }
    },

    computed: {
        name () {
            return this.$route.params.name
        }
    },

    mounted () {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].title.replace(/ /g, '-') === this.name) {
                this.title = this.projects[i].title
                this.category = this.projects[i].category
                this.description = this.projects[i].description
                this.location = this.projects[i].location
                this.caseStudy = this.projects[i].caseStudy
                this.img = this.projects[i].img
            }
        }
    },
}
</script>

<template>
    <LogoNavBar />

    <div class = "text-wrapper">
        <p> Project Title: {{ title }}</p>
        <hr class = "vert">
        <p> Work Category: {{ category }}</p>
        <hr class = "vert">
        <p> Description: {{ description }}</p>
        <hr class = "vert">
        <p> Location: {{ location }}</p>
    </div>

    <div class = "img-wrapper">
        <div class="case-study-wrapper">
            <h1> CASE STUDY </h1>
            <p> {{ caseStudy }} </p>
        </div>
        <img :src="img" alt="project image">
    </div>

    <Footer />
</template>

<style scoped>

    .text-wrapper {
        display: flex;
        margin: 0 1%;
        max-width: 100%;
        flex-direction: row;
        justify-content: center;
        align-items: space-evenly;
        gap: 1%;
        background-color: var(--psc-light-gray);
        text-align: center;
    }

    .text-wrapper p {
        margin: 0;
        padding: 1%;
        text-transform: uppercase;
        width: 100%;
        height: 100%;
        font-size: 2vmin;
        font-weight: 500;
        color: var(--psc-dark-gray);
    }

    .vert {
        width: 1px; 
        display: inline-block;
        flex: 0 0 0;
    }

    .img-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: top;
        gap: 1%;
        margin: 1%;
        max-width: 100%;
    }

    .img-wrapper img{
        object-fit: cover;
        max-width: 50%;
        max-height: 50%
    }

    .case-study-wrapper h1 {
        color: var(--psc-dark-blue);
        margin: 0%;
    }

    @media (pointer:none), (pointer:coarse){
        .img-wrapper {
            flex-direction: column;
        }

        .img-wrapper img{
            max-width: 100%;
            max-height: 60%;
        }

        .text-wrapper {
            padding: 1vw 0;
            flex-direction: column;
        }

        .text-wrapper p{
            font-size: 4vmin;
        }
        .vert {
            width: 97%;
            margin: 1%;
        }

        .case-study-wrapper h1 {
            margin: 1vh;
        }
    }

    @media (max-width: 768px) {
        .img-wrapper {
            flex-direction: column;
        }

        .img-wrapper img{
            max-width: 100%;
            max-height: 60%;
        }

        .text-wrapper {
            padding: 1vw 0;
            flex-direction: column;
        }

        .text-wrapper p{
            font-size: 4vmin;
        }

        .vert {
            width: 97%;
            margin: 1%;
        }

        .case-study-wrapper h1 {
            margin: 1vh 0 0 0;
        }
    }

</style>
