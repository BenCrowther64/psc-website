<script>
  import Loading from './components/Loading/Loading.vue'

  export default {
    data() {
      return {
        isLoading: true,
      }
    },
    components: {
      Loading,
    },
    mounted () {
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  }
</script>


<template>
  <Loading v-if="isLoading" />

  <router-view></router-view>
</template>
