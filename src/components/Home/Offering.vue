<template>
    <div class="offering-header">
        <div class="text-wrapper">
            <img :src="image">
            <h1>{{ title }}</h1>
            <p>{{ text }}</p>
        </div>
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

.text-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: left;
    text-align: left;
}

.text-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.text-wrapper h1 {
    color:var(--psc-dark-blue);
    font-size: 30px;
    margin: 10px 0px;
}

.text-wrapper p {
    margin: 0px;;
}

</style>