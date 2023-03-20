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
    flex: 0 0 24.25%;
    height: 24.25vw;
    margin: 0 0 1% 0;
    overflow: hidden;
}

.project-container img{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
}

.project-container:hover img{
    transform: scale(1.08,1.08);
}

.text-container{
    position: relative;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
}

.text-container h1{
    color: var(--psc-white);
    margin: 0;
    font-size: 1.5vw;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


@media (pointer:none), (pointer:coarse) {
    .project-container:hover{
        transform: translate(0, -2px);
    }

    .project-container{
        width: 49%;
        height: 20vh;
    }
}

@media (max-width: 738px)
{
    .project-container:hover{
        transform: translate(0, -2px);
    }

    .project-container{
        width: 49%;
        height: 20vh;
    }
}
</style>