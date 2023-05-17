<template>
    <div @mouseover="hover = true" @mouseleave="hover = false" :class="[isLong ? 'long-project-container' : 'project-container']">
        <router-link :to="'/' + extraRoute + name">
            <img :src="image">
            <Transition>
                <div v-if="hover || isMobile" class="text-container">
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
            isLong: Boolean,
            extraRoute: String,
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
            },
            isMobile() {
                if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    return true
                } else {
                    return false
                }
            },
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
    text-transform: uppercase;
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
        transform: translate(0, 0);
    }

    .long-project-container:hover{
        transform: translate(0, 0);
    }

    .project-container{
        width: 49%;
        height: 20vh;
    }

    .long-project-container{
        width: 49%;
        height: 20vh;
    }

    .text-container {
        background-color: rgba(0, 0, 0, 0);
    }

    .text-container h1{
        font-size: 1em;
    }
}

@media (max-width: 738px)
{
    .project-container:hover{
        transform: translate(0, 0);
    }

    .long-project-container:hover{
        transform: translate(0, 0);
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