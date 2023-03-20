<script>
  import Loading from './components/Loading/Loading.vue'

  export default {
    data() {
      return {
        loading: true,
      }
    },
    components: {
      Loading,
    },
    mounted() {
      if (this.$route.path === "/") {
        setTimeout(() => {this.loading = false }, 2000)
      } else {
        this.loading = false
      }
    },
    watch: {
      '$route': function(to, from) {
        document.documentElement.style.overflow = 'auto'
      }
  }
}
</script>


<template>
  <Loading :isLoading="loading"/>

  <router-view></router-view>
</template>
