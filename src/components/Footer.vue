<template>
  <div class="footer-wrapper">
    <router-link to="/">Home</router-link>
    <router-link to="/About">About</router-link>
    <router-link to="/Projects/">Projects</router-link>
  </div>
</template>

<style>
  .footer-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: #f5f5f5;
  }
</style>