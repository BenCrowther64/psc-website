<script>
import CarouselItem from './CarouselItem.vue';

export default {
    data() {
        return {
            currentSlide: 0,
            slideInterval: null
        }
    },
    props:{
        images: {
            type: Array,
            required: true
        }
    },
    methods: {
        setCurrentSlide(index) {
            this.currentSlide = index;
        }
    },
    mounted() {
        this.slideInterval = setInterval(() => {
            const index = this.currentSlide < this.images.length -1 ? this.currentSlide + 1 : 0;
            this.setCurrentSlide(index);
        }, 3000);
    },
    beforeUnmount() {
        clearInterval(this.slideInterval);
    },
    components: {
        CarouselItem
    }
};
</script>


<template>
    <div class = "carousel">
        <div class = "carousel-inner">
            <carousel-item 
                v-for="(image, index) in images"
                :image="image" 
                :key="'item-${index}'"
                :currentImage="currentSlide"
                :index="index"
            />
        </div>
    </div>
</template>


<style>
    @keyframes zoominoutsinglefeatured {
        0% {
            transform: scale(1,1);
        }
        50% {
            transform: scale(1.1,1.1);
        }
    }   

    .carousel {
        display: flex;
        justify-content: center;
    }

    .carousel-inner {
        position: relative;
        width: 100vw;
        height: 100vh;
        max-width: 100%;
        overflow: hidden;
        animation: zoominoutsinglefeatured 6s infinite;
    }
</style>
