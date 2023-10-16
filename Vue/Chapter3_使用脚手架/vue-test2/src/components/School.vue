<script>
  export default {
    name: "SchoolComponent",
    data() {
      return {
        name: 'uni sydney',
        address: 'sydney',
      }
    },
  }
</script>

<template>
  <div class="demo">
    <h2>{{name}}</h2>
    <h2>{{address}}</h2>
  </div>
</template>

<style>
  .demo {
    background-color: grey;
  }
</style>