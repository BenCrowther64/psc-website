<template>
    <div :class="{ loading: true, fadeout: !isLoading}">
        <img src="../../assets/images/home/loading-state.gif">
    </div>  
</template>

<script>
    export default {
    props: ["isLoading"]
    };
</script>

<style scoped>
    .loading{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 2000;
    }

    .loading img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
    }

    .fadeout {
        animation: fadeout 1.2s forwards;
    }

    @keyframes fadeout {
    to {
        opacity: 0;
        visibility: hidden;
    }
    }
</style>