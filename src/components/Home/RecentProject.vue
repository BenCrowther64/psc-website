<template>
    <div class="project-wrapper">
        <img :src="image">
        <div class="text-wrapper">
            <h1>{{ projectName }}</h1>
            <p>{{ projectDescription }}</p>
        </div>
    </div>
</template>

<script>
    export default{
        props: ["image", "projectName", "projectDescription"],
    }
</script>

<style scoped>
    .project-wrapper {
        display: flex;
        
    }

    .text-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: left;
        text-align: left;
        margin-left: 20px;
    }
    

    .text-wrapper h1 {
        color:var(--psc-dark-blue);
        margin: 0px;
    }
</style>