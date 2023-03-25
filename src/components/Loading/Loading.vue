<template>
    <div class="loading">
        <img src="../../assets/images/home/loading-state.gif">
    </div>  
</template>

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
</style>