<script>
    export default {
        emits: ['prev', 'next']
    }
</script>

<template>
    <button class="carousel-control left" @click="$emit('prev')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ejL9tp71Kgf1" viewBox="0 0 200 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <line x1="38.207809" y1="75" x2="-38.207808" y2="-75" transform="translate(111.792192 75)" fill="none" stroke="#ffffff" stroke-width="10"/>
            <line x1="-38.207808" y1="75.641683" x2="38.207808" y2="-75.641682" transform="translate(111.792192 224.358318)" fill="none" stroke="#ffffff" stroke-width="10"/>
        </svg>
    </button> 
    <button class="carousel-control right" @click="$emit('next')">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="ejL9tp71Kgf1" viewBox="0 0 200 300" shape-rendering="geometricPrecision" text-rendering="geometricPrecision">
            <line x1="38.207809" y1="75" x2="-38.207808" y2="-75" transform="translate(111.792192 75)" fill="none" stroke="#ffffff" stroke-width="10"/>
            <line x1="-38.207808" y1="75.641683" x2="38.207808" y2="-75.641682" transform="translate(111.792192 224.358318)" fill="none" stroke="#ffffff" stroke-width="10"/>
        </svg>
    </button>
</template>

<style scoped>
.carousel-control {
    background-color: rgba(0, 0, 0, 0);
    border: none;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 70px;
    top: calc(45%);
    color: #f3f3f3;
    cursor: pointer;
}

.left {
    transform: scaleX(-1);
    left: 0;
}

.right {
    right: 0;
}
</style>