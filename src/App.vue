<template>
<router-view></router-view>
</template>


<script>

  export default {
    name:"App",
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
  }
</script>
