<script>
import CarouselItem from './CarouselItem.vue';
import CarouselControls from './CarouselControls.vue';

export default {
    data() {
        return {
            currentSlide: 0,
            slideInterval: null,
            direction: "right"
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
        },
        prev (){
            const index = this.currentSlide < this.images.length - 1 ? this.currentSlide + 1 : 0;
            this.setCurrentSlide(index);
            this.direction = "left";
            this.startSlideTimer();
        },
        _next () {
            const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.images.length - 1;
            this.setCurrentSlide(index);
            this.direction = "right";
            this.startSlideTimer();
        },
        next() {
            this._next();
            this.startSlideTimer();
        },
        startSlideTimer() {
            this.stopSlideTimer();
            this.slideInterval = setInterval(() => {
                this._next();
            }, 5000);
        },
        stopSlideTimer() {
            clearInterval(this.slideInterval);
        },
    },
    mounted() {
        this.startSlideTimer();
    },
    beforeUnmount() {
        this.stopSlideTimer();
    },
    components: {
        CarouselItem,
        CarouselControls
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
                :direction="direction"
            />
            <carousel-controls @prev='prev' @next='next'/>
        </div>
    </div>
</template>


<style scoped>
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
    }
</style>
