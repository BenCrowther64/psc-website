<template>
    <div class="offering-header">
        <router-link :to="link">
            <div class="text-wrapper">
                <div class = "image-container">
                    <img :src="image">
                </div>
                <h1>{{ title }}</h1>
                <p>{{ text }}</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props: ["title", "text", "link", "image"],
};
</script>

<style scoped>
.offering-header {
    display: flex;
    flex-grow: 1;
    flex-basis: 0;
    flex-direction: column;
}

.offering-header:hover{
    cursor: pointer;
}

.text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
    transition: all .3s ease;
    vertical-align: middle;
}

.text-wrapper h1 {
    color:var(--psc-dark-blue);
    font-size: 30px;
    margin: 10px 0px;
}

.text-wrapper p {
    font-size: 15px;
    margin: 0px;;
}

.image-container{
  width: 100%;
  overflow: hidden;
}

.image-container img{
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
}

.text-wrapper:hover{
    transform: translate(0, -8px);
}

.text-wrapper:hover img{
    transform: scale(1.05,1.05);
}

</style>