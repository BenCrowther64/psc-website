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
      setTimeout(() => {this.loading = false }, 2000)
    },
}
</script>


<template>
  <Loading :isLoading="loading"/>

  <router-view></router-view>
</template>
