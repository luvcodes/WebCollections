<script>
  export default {
    name: 'StudentComponent',
    data() {
      return {
        studentName: 'zhangsan',
        age: 22,
      }
    },
  };
</script>

<template>
  <div>
    <h2>Student name: {{ studentName }}</h2>
    <h2>Student Age: {{ age }}</h2>
  </div>
</template>