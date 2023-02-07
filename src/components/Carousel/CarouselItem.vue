<script>
export default {
    props: {
        image: {
            type: String,
            required: true
        },
        currentImage: {
            type: Number,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        direction: {
            type: String,
            required: true
        }
    },
    computed: {
        transitionEffect() {
            return this.direction === "right" ? "slide-out" : "slide-in";
        }
    },
    emits: ['mouseenter', 'mouseout']
}
</script>

<template>
    <transition name="transitionEffect">
        <div class= "carousel-item" v-show="currentImage === index">
            <img id="c-img" :src="image"/>
        </div>
    </transition>
</template>

<style scoped>

#c-img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}

</style>