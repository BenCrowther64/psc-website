<script>
  import Loading from './components/Loading/Loading.vue'

  export default {
    data() {
      return {
        loading: true,
        newLoad: true,
      }
    },
    components: {
      Loading,
    },
    watch: {
      '$route': function(to, from) {
        if (this.$route.fullPath === "/" && this.newLoad) {
          this.newLoad = false
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
  <Transition>
    <Loading v-show="loading"/>
  </Transition>

  <router-view></router-view>
</template>

<style>

.v-enter-active, .v-leave-active {
  transition: opacity 1s;
}

.v-enter, .v-leave-to {
  opacity: 0;
}

</style>

