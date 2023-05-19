<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
import CarouselIndicators from "./CarouselIndicators.vue";
export default {
props: {
    slides: {
    type: Array,
    required: true,
    },
    controls: {
    type: Boolean,
    default: false,
    },
    indicators: {
    type: Boolean,
    default: false,
    },
    interval: {
    type: Number,
    default: 5000,
    },
},
components: { CarouselItem, CarouselControls, CarouselIndicators },
data: () => ({
    currentSlide: 0,
    slideInterval: null,
    direction: "right",
    tabFocus: false,
}),
methods: {
    setCurrentSlide(index) {
    this.currentSlide = index;
    },
    prev(step = -1) {
    const index =
        this.currentSlide > 0
        ? this.currentSlide + step
        : this.slides.length - 1;
    this.setCurrentSlide(index);
    this.direction = "left";
    this.startSlideTimer();
    },
    _next(step = 1) {
    const index =
        this.currentSlide < this.slides.length - 1
        ? this.currentSlide + step
        : 0;
    this.setCurrentSlide(index);
    this.direction = "right";
    },
    next(step = 1) {
    this._next(step);
    this.startSlideTimer();
    },
    startSlideTimer() {
    this.stopSlideTimer();
    this.slideInterval = setInterval(() => {
        this._next();
    }, this.interval);
    },
    stopSlideTimer() {
    clearInterval(this.slideInterval);
    },
    switchSlide(index) {
    const step = index - this.currentSlide;
    if (step > 0) {
        this.next(step);
    } else {
        this.prev(step);
    }
    },
    detectFocusOut() {
        let inView = false;

        const onWindowFocusChange = (e) => {
            if ({ focus: 1, pageshow: 1 }[e.type]) {
                if (inView) return;
                this.tabFocus = true;
                inView = true;
            } else if (inView) {
                this.tabFocus = !this.tabFocus;
                inView = false;
            }
        };

        window.addEventListener('focus', onWindowFocusChange);
        window.addEventListener('blur', onWindowFocusChange);
        window.addEventListener('pageshow', onWindowFocusChange);
        window.addEventListener('pagehide', onWindowFocusChange);
    }
},
mounted() {
    this.startSlideTimer();
},
beforeUnmount() {
    this.stopSlideTimer();
},
created() {
    this.detectFocusOut();
},
watch:{
    tabFocus(value) {
      if (value) {
        this.startSlideTimer();
      } else{
        this.stopSlideTimer();
      }
    },
},
};
</script>

<template>
    <div class="carousel">
        <div class="carousel-inner">
        <carousel-indicators
            :total="slides.length"
            :current-index="currentSlide"
            @switch="switchSlide($event)"
        />
        <carousel-item
            v-for="(slide, index) in slides"
            :slide="slide"
            :key="`item-${index}`"
            :current-slide="currentSlide"
            :index="index"
            :direction="direction"
        />
        <carousel-controls
            @prev="prev"
            @next="next"
        />
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

@media (max-width: 738px) {
    .carousel-inner {
        height: 50lvh;
    }
}
</style>
  