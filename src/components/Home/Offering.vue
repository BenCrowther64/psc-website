<template>

    <Transition name="slide">
        
        <div class="offering-header" v-show="visible">
            <router-link :to="link">
                <div class="img-container">
                    <img :src="image">
                </div>
                <h1>{{ title }}</h1>
                <p>{{ text }}</p>
            </router-link>
        </div>

    </Transition>

</template>

<script>
export default {
    props: ["title", "text", "link", "image", "visible"],
};
</script>

<style scoped>
.offering-header {
    display: flex;
    flex-direction: column;
    justify-content: top;
    align-items: left;
    text-align: left;
    transition: all .2s ease;
    flex: 0 0 23vw;
}

.offering-header:hover{
    cursor: pointer;
    transform: translate(0, -8px);
}

.offering-header:hover img {
    transform: scale(1.05,1.05);
}

.offering-header h1 {
    color:var(--psc-dark-blue);
    font-size: 30px;
    margin: 10px 0px;
}

.offering-header p {
    font-size: 15px;
    margin: 0px;;
}

.img-container {
    overflow: hidden;
}

.img-container img{
    width: 23.6vw;
    height: 23.6vw;
    object-fit: cover;
    transition: all 0.2s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: all .4s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-20%);
  opacity: 0;
}

@media (pointer:none), (pointer:coarse){
    .offering-header {
        flex: 0 0 100%;
    }
    .img-container img{
        vertical-align: top;
        width: 100%;
        height: 20vh;
    }
}

@media (max-width: 738px) {
    .offering-header {
        flex: 0 0 100%;
    }
    .img-container img{
        width: 100%;
        height: 40vh;
    }
}

</style>