<template>
  <div>
    <div>Hello {{name}}!</div>
    Name: <input v-model="name" type="text">
    <hello-component :name="name" :initialEnthusiasm="5" />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="scss" scoped>

</style>
