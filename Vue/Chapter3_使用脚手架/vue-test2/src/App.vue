<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SchoolComponent></SchoolComponent>
    <StudentComponent></StudentComponent>
  </div>
</template>

<script>
import SchoolComponent from "@/components/School.vue";
import StudentComponent from "@/components/Student.vue";

export default {
  name: 'App',
  components: {
    StudentComponent,
    SchoolComponent,

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
