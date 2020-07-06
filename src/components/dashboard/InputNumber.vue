<template>
  <div>
    <p>{{input.title}}</p>
    <number-input v-model="input.value" inline center controls></number-input>
  </div>
</template>

<script>
  
  export default {
    name:'InputNumber',
    props: ["input"],
    watch: { 
      input: function(newVal, oldVal) 
      {
        console.log('Prop changed: ', newVal, ' | was: ', oldVal) 
        }
      }
  };
</script>

<style scoped>

</style>