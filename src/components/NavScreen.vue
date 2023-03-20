<script>
export default{
    data() {
        return {
            show : false,
        }
    },
    methods: {
        toggleNavScreen() {
            this.show = !this.show
        }
    },
    props:{
        darkMode: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        show: function() {
        if(this.show){
            document.documentElement.style.overflow = 'hidden'
            return
        }

        document.documentElement.style.overflow = 'auto'
        }
    }
};
</script>

<template>

    <button class="nav-screen-button" :class="[darkMode? 'open-black' : 'open-white']" @click="toggleNavScreen()"></button>

    <Transition>    
        <div class = full-screen v-if="show" @toggle="toggleNavScreen">
            <button class="nav-screen-button close" @click="toggleNavScreen()"></button>
            <div class="link-wrapper">
                <router-link to="/" @click="toggleNavScreen">HOME</router-link>
                <router-link to="/People" @click="toggleNavScreen">PEOPLE</router-link>
                <router-link to="/Quantity-Surveying" @click="toggleNavScreen">QUANTITY SURVEYING</router-link>
                <router-link to="/Building-Surveying" @click="toggleNavScreen">BUILDING SURVEYING</router-link>
                <router-link to="/Project-Management" @click="toggleNavScreen">PROJECT MANAGEMENT</router-link>
                <router-link to="/Principal-Designer" @click="toggleNavScreen">PRINCIPAL DESIGNER</router-link>
                <router-link to="/Projects" @click="toggleNavScreen">PROJECTS</router-link>
                <router-link to="/Contact" @click="toggleNavScreen">CONTACT</router-link>
            </div>
        </div>
    </Transition>

</template>

<style scoped>
.full-screen{
    z-index: 1000;
    position: fixed;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    background-color: #ffffff;
}

.link-wrapper *{
    margin: 10px 0;

}

.link-wrapper{
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 30px 0;
    font-size: 30px;
    flex-direction: column;
    background: none;
    font-weight: bold;
}

.link-wrapper :hover{
    background: none;
    text-decoration-line: underline;
}

.nav-screen-button{
    z-index: 1000;
    position: absolute;
    top: 1%;
    right: 1%;
    width: 30px;
    height: 30px;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    color: #f3f3f3;
    cursor: pointer;
}

.router-link-active{
    background: white;
    color: rgb(37, 46, 95);
    text-decoration-line: underline;
}

.close{
    background-image: url(../assets/images/home/close.png);
    background-size: cover;
    width: 20px;
    height: 20px;
    right: 1.3%;
    top: 1.5%;
}

.open-white{
    background-image: url(../assets/images/home/hamburger-white.png);
    background-size: cover;
}

.open-black{
    background-image: url(../assets/images/home/hamburger-black.png);
    background-size: cover;
}

.v-enter-active, .v-leave-active {
    transition: opacity 0.3s;
}
.v-enter-from, .v-leave-to {
    opacity: 0;
}

@media (pointer:none), (pointer:coarse){
    .link-wrapper{
        font-size: 20px;
    }

    .close{
        right: 1.6%;
    }
}

@media (max-width: 768px) {
    .link-wrapper{
        font-size: 20px;
    }

    .close{
        right: 1.6%;
    }
}

</style>