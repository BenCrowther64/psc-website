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
                    title: 'Project 1',
                    description: 'Lorem ipsum dolor sit amet, consectetur adi',
                    img: img1
                },

                {
                    title: 'Project 2',
                    description: 'Lorem ipsum dolor sit amet, consectetur adi',
                    img: img2
                },

                {
                    title: 'Project 3',
                    description: 'Lorem ipsum dolor sit amet, consectetur adi',
                    img: img3
                },

                {
                    title: 'Project 4',
                    description: 'Lorem ipsum dolor sit amet, consectetur adi',
                    img: img4
                },

                {
                    title: 'Project 5',
                    description: 'Lorem ipsum dolor sit amet, consectetur adi',
                    img: img5
                },

                {
                    title: 'Project 6',
                    description: 'Lorem ipsum dolor sit amet, consectetur adi',
                    img: img6
                }
            ]
        }
    },

    computed: {
        id () {
            return this.$route.params.id
        }
    },
}
</script>

<template>
    <LogoNavBar />

    <div class = "text-wrapper">
        <h1>{{ projects[id-1].title }}</h1>
        <p>{{ projects[id-1].description }}</p>
    </div>

    <div class = "img-wrapper">
        <img :src="projects[id-1].img">
    </div>

    <Footer />
</template>

<style>

    .text-wrapper {
        margin: 1%;
    }

    .img-wrapper {
        margin: 1%;
        width: 50vw;
        height: 50vh;
    }

    .img-wrapper img{
        object-fit: cover;
        max-width: 100%;
        max-height: 100%
    }

</style>
