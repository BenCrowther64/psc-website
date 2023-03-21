<script>
    export default{
        props: {
            image: String,
            projectName: String,
            content: String,
            whiteCross : {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                expanded: false,
            }
        },

        methods: {
            expand() {
                this.expanded = !this.expanded;
            },
        },

        watch: {
            expanded: function() {
            if(this.expanded){
                document.documentElement.style.overflow = 'hidden'
                return
            }

            document.documentElement.style.overflow = 'auto'
            }
        }
    }
</script>

<template>

    <div class="project-container" @click="expand">
        <img :src="image">
        <div class="text-container">
            <h1>{{ projectName }}</h1>
        </div>
    </div>

    <Transition name="nested" :duration="550">
        <div v-if="expanded" class="full-project-container">
            <div class = "content-wrapper">
                <img :src="image">
                <div class="full-text-container">
                    <h1>{{ projectName }}</h1>
                    <p>{{ content }}</p>
                </div>
                <div class="close" :class="[whiteCross? 'white' : 'black']" @click="expand"></div>
            </div>
        </div>
    </Transition>

</template>

<style scoped>
.project-container{
    flex: 0 0 24.25%;
    height: 24.25vw;
    margin: 0 0 1% 0;
    overflow: hidden;
    cursor: pointer;
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
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.full-project-container{
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
}

.content-wrapper {
    border: solid 8px var(--psc-dark-blue);
    display: flex;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70vw;
    height: 70vh;
    overflow: hidden;
    border-radius: 20px;
}

.content-wrapper img{
    width: 35vw;
    height: 70vh;
    object-fit: cover;
}

.full-text-container {
    width: 35vw;
    background-color: var(--psc-light-gray);
    white-space: pre-line;
}

.full-text-container h1 {
    padding: 2%;
    color: var(--psc-dark-blue);
}

.full-text-container p{
    padding: 2%;
}

.close {
    width: 2.5vh;
    height: 2.5vh;
    margin: 0.5vw;
    border: none;
    position: absolute;
    right: 0%;
    top: 0%;
    cursor: pointer;
    background-size: 100%;
    background-image: url("../../assets/images/home/close.png")
}

.nested-enter-active .content-wrapper,
.nested-leave-active .content-wrapper{
  transition-delay: 0.25s;
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .content-wrapper,
.nested-leave-to .content-wrapper {
  transform: translateX(-50%);
  opacity: 0;
}

.nested-enter-active .full-project-container,
.nested-leave-active .full-project-container{
  transition: all 0.3s;
}

.nested-enter-from .full-project-container,
.nested-leave-to .full-project-container {
  opacity: 0;
}


@media (pointer:none), (pointer:coarse) {
    .project-container{
        flex: 0 0 100%;
        height: 40vh;
    }

    .text-container h1{
        font-size: 1.8em;
    }

    .content-wrapper{
        flex-direction: column;
    }

    .close{
        margin: 1.2vw
    }

    .content-wrapper img{
        width: 100%;
        height: 30vh;
    }

    .full-text-container {
        text-align: center;
        width: 100%;
        height: 100%;
    }

    .full-text-container h1 {
        margin: 0;
        font-size: 2.2vmax;
    }
    .full-text-container p {
        margin: 0;
        font-size: 1.7vmax;
    }

    .black {
        background-image: url("../../assets/images/home/close.png")
    }

    .white {
        background-image: url("../../assets/images/home/close-white.png")
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

    .content-wrapper{
        flex-direction: column;
    }

    .content-wrapper img{
        width: 100%;
        height: 30vh;
    }

    .close{
        margin: 1.2vw
    }

    .full-text-container {
        text-align: center;
        width: 100%;
        height: 100%;
    }

    .full-text-container h1 {
        margin: 0;
        font-size: 2.2vmax;
    }
    .full-text-container p {
        margin: 0;
        font-size: 1.7vmax;
    }

    .black {
    background-image: url("../../assets/images/home/close.png")
    }

    .white {
        background-image: url("../../assets/images/home/close-white.png")
    }
}

@media (min-width: 1024px)
{
    .full-text-container p {
        margin: 0;
        font-size: 1.2vmax;
    }
}

@media (min-width: 1280px)
{
    .full-text-container p {
        margin: 0;
        font-size: 1.2vmax;
    }
}
</style>