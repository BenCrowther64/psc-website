<template>
    <div id="loading-screen">
        <img src="../../assets/images/home/loading-state.gif">
        <h3>LOADING</h3>
    </div>  
</template>

<style scoped>
    #loading-screen{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 2000;
    }

    #loading-screen img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80px;
        height: 80px;
    }

    #loading-screen h3{
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 1rem;
        color: var(--psc-dark-blue);
    }

</style>