<template>

    <div class="project-container" @click="expand">
        <img :src="image">
        <div class="text-container">
            <h1>{{ projectName }}</h1>
        </div>
    </div>

    <div v-if="expanded" class="full-project-container" @click="expand">
        <img :src="image">
        <div class="full-text-container">
            <h1>{{ projectName }}</h1>
        </div>
    </div>

</template>

<script>
    export default{
        props: {
            image: String,
            projectName: String,
        },

        data() {
            return {
                expanded: false,
            }
        },

        methods: {
            expand() {
                this.expanded = !this.expanded;
            }
        }
    }
</script>

<style scoped>
.project-container{
    position: relative;
    overflow: hidden;
    width: 23vw;
    height: 23vw;
    cursor: pointer;
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
}

.text-container h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    color: var(--psc-white);
    text-align: center;
}

.full-project-container{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    z-index: 1000;
}

.full-project-container img{
    width: 50%;
    height: 100%;
    object-fit: cover;
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