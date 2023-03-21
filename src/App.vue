<script>
  import Loading from './components/Loading/Loading.vue'

  export default {
    data() {
      return {
        loading: false,
      }
    },
    components: {
      Loading,
    },
    watch: {
      '$route': function(to, from) {
        if (to.fullPath === "/") {
          this.loading = true
          setTimeout(() => {this.loading = false }, 1500)
        } else {
          this.loading = false
        }
        document.documentElement.style.overflow = 'auto'
      }
    },
  }
</script>


<template>
  <Loading :isLoading="loading"/>

  <router-view></router-view>
</template>

