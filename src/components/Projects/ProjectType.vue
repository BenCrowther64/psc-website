<template>
    <div class="project-container">
        <router-link :to="'/Projects/' + projectUrl">
            <img :src="image">
            <div class="text-container">
                <h1>{{ projectType }}</h1>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default{
        props: {
            image: String,
            projectType: String,
            projectUrl : String,
        },
    }
</script>

<style scoped>
.project-container{
    position: relative;
    flex: 0 0 24.25%;
    height: 24.25vw;
    margin: 0 0 1% 0;
    overflow: hidden;
}

.project-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
}

.project-container:hover img{
    transform: scale(1.08,1.08);
}

.text-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.text-container h1{
    width: 50%;
    color: var(--psc-white);
    margin: 0;
    font-size: 1.5vw;
}


@media (pointer:none), (pointer:coarse) {
    .project-container{
        flex: 0 0 100%;
        height: 40vh;
    }

    .text-container h1{
        font-size: 1.8em;
    }
}

@media (max-width: 738px)
{
    .project-container{
        flex: 0 0 100%;
        height: 40vh;
    }

    .text-container h1{
        font-size: 1.8em;
    }
}
</style>