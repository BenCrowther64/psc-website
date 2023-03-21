<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" :class="[isLong ? 'long-project-container' : 'project-container']">
        <router-link :to="'/' + name">
            <img :src="image">
            <Transition>
                <div v-if="hover" class="text-container">
                    <h1>{{ projectName }}</h1>
                </div>
            </Transition>
        </router-link>
    </div>
</template>

<script>
    export default{
        props: {
            image: String,
            projectName: String,
            isLong: Boolean
        },
        data() {
            return {
                hover: false,
                name: this.join(this.projectName)
            }
        },
        methods: {
            join(str) {
                str = str.replace(/\s/g, '-')
                return str
            }
        },
    }
</script>

<style scoped>
.project-container{
    position: relative;
    width: 26.5%;
    height: 500px;
    margin-bottom: 1%;
    object-fit: cover;
}
.project-container:hover{
    transform: translate(0, -5px);
    cursor: pointer;
}
.project-container img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.long-project-container{
    position: relative;
    width: 45%;
    height: 500px;
    margin-bottom: 1%;
    object-fit: cover;
}
.long-project-container:hover{
    cursor: pointer;
    transform: translate(0, -8px);
}
.long-project-container img{
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

@media (pointer:none), (pointer:coarse) {
    .project-container:hover{
        transform: translate(0, -2px);
    }

    .long-project-container:hover{
        transform: translate(0, -2px);
    }

    .project-container{
        width: 49%;
        height: 20vh;
    }

    .long-project-container{
        width: 49%;
        height: 20vh;
    }
}

@media (max-width: 738px)
{
    .project-container:hover{
        transform: translate(0, -2px);
    }

    .long-project-container:hover{
        transform: translate(0, -2px);
    }

    .project-container{
        width: 49%;
        height: 20vh;
    }

    .long-project-container{
        width: 49%;
        height: 20vh;
    }
}
</style>