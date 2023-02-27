<template>
    <div @mouseover="hover = true" @mouseleave="hover = false"  class="project-container">
        <img :src="image">
        <Transition>
            <div v-if="hover" class="text-container">
                <h1>{{ projectName }}</h1>
            </div>
        </Transition>
    </div>
</template>

<script>
    export default{
        props: ["image", "projectName"],
        data() {
            return {
                hover: false
            }
        }
    }
</script>

<style scoped>
.project-container{
    position: relative;
    width: 45%;
    height: 500px;
    margin-bottom: 1%;
}

.project-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.text-container{
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    text-align: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(37, 46, 95, 0.5);
}

.text-container h1{
    vertical-align: middle;
    color: white;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.2s ;
}

.v-enter-from, .v-leave-to {
    opacity: 0;
}
</style>