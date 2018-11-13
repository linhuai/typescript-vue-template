<template>
  <div>
    <div>My first CLI</div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        name: 'world'
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
