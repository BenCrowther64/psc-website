<script>
    export default{
        emits: ['toggle'],
    };
</script>

<template>
    <div class = full-screen>
        <button class="nav-screen-button close" @click="$emit('toggle')"></button>
        <div class="link-wrapper">
            <router-link to="/">HOME</router-link>
            <router-link to="/People">PEOPLE</router-link>
            <router-link to="/Quantity Surveying">QUANTITY SURVEYING</router-link>
            <router-link to="/Building Surveying">BUILDING SURVEYING</router-link>
            <router-link to="/Project Management">PROJECT MANAGEMENT</router-link>
            <router-link to="/Principal Designer">PRINCIPAL DESIGNER</router-link>
            <router-link to="/Projects">PROJECTS</router-link>
            <router-link to="/Contact">CONTACT</router-link>
        </div>
    </div>
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
    position: absolute;
    top: 2%;
    right: 1.5%;
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
}

</style>