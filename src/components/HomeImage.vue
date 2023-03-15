<script>
    import Image1 from "../assets/images/branding/logo-base-ver-3-blue.png"
    import Image2 from "../assets/images/branding/logo-base-ver-3-light-grey.png"
    import Image3 from "../assets/images/branding/logo-base-ver-3-grey.png"

    export default {
        data() {
            return {
                UsedImage: null,
                Image1,
                Image2,
                Image3,
            }
        },

        props: {
            colour: {
                type: Number,
                default: 0,
            }
        },

        mounted(){
            if (this.colour == 0) {
                this.UsedImage = this.Image1
            } else if (this.colour == 1) {
                this.UsedImage = this.Image2
            } else if (this.colour == 2) {
                this.UsedImage = this.Image3
            }
        }
    }

</script>


<template>
    <div class = "router-wrapper">
        <router-link to="/">
            <img :src="UsedImage">
        </router-link>
    </div>
</template>

<style>
    .router-wrapper {
        position: absolute;
        top: 1%;
        left: 1%;
        width: 15vh;
    }
    
    .router-wrapper img {
        width: 100%;
        object-fit: contain;
    }

</style>
