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
        }
    },
}
</script>

<template>
    <transition name="fade">
        <div class= "carousel-item" v-show="currentImage === index">
            <img :src="image"/>
        </div>
    </transition>
</template>

<style>

.carousel-item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 3s ease;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>