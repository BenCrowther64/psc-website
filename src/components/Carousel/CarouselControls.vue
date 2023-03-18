<script>
    export default {
        emits: ["prev", "next"], 
        data: () => ({
            buttonCooldown : false
        }),

        methods: {
            prev() {
                if (!this.buttonCooldown) {
                    this.$emit("prev");
                    this.buttonCooldown = true;
                    setTimeout(() => {
                        this.buttonCooldown = false;
                    }, 1000);
                }
            },
            next() {
                if (!this.buttonCooldown) {
                    this.$emit("next");
                    this.buttonCooldown = true;
                    setTimeout(() => {
                        this.buttonCooldown = false;
                    }, 1000);
                }
            }
        }
    };
</script>

<template>
    <button class="carousel-control left" @click="prev">
    </button> 
    <button class="carousel-control right" @click="next">
    </button>
</template>

<style scoped>
.carousel-control {
    background-size: cover;
    background-image: url(../../assets/images/home/arrow.svg);
    background-color: rgba(0, 0, 0, 0);
    border: none;
    display: inline-block;
    position: absolute;
    height: 80px;
    width: 50px;
    top: calc(45%);
    color: #f3f3f3;
    cursor: pointer;
}
.left {
    left: 0;
    transform: scaleX(-1);
}
.right {
    right: 0;
}

@media (pointer:none), (pointer:coarse){
   .carousel-control {
       height: 50px;
       width: 30px;
       top: calc(46%);
    }
}

@media (max-width: 768px) {
    .carousel-control {
       height: 50px;
       width: 30px;
       top: calc(46%);
    }
}
</style>