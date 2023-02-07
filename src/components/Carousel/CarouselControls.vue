<script>
    export default {
        emits: ["prev", "next"], 
    };
</script>

<template>
    <button class="carousel-control left" @click="$emit('prev')">
    </button> 
    <button class="carousel-control right" @click="$emit('next')">
    </button>
</template>

<style scoped>
.carousel-control {
    background-size: cover;
    background-image: url(../../assets/images/home/arrow.svg);
    background-color: rgba(0, 0, 0, 0);
    border: none;
    display: inline-block;
    position: absolute;
    height: 80px;
    width: 50px;
    top: calc(45%);
    color: #f3f3f3;
    cursor: pointer;
}
.left {
    left: 0;
    transform: scaleX(-1);
}
.right {
    right: 0;
}
</style>