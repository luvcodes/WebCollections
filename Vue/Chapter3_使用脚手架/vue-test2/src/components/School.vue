<script>
  export default {
    name: 'SchoolComponent',
    data() {
      return {
        schoolName: 'uni sydney',
        schoolAddress: 'sydney',
      }
    },
    methods: {
      showName() {
        alert(this.schoolName);
      }
    }
  };
</script>

<template>
  <div class="demo">
    <h2>Uni name: {{ schoolName }}</h2>
    <h2>Uni Adderss: {{ schoolAddress }}</h2>
    <button @click="showName">Click to prompt school name</button>
  </div>
</template>

<style>
  .demo {
    background-color: orange;
  }
</style>