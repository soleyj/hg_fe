<template>
 <div>
   <Login/>
 </div>
</template>


<script>
  import Login from '../components/account/login'
  export default {
    props: {
      source: String,
    },
  components: {
    Login,
  },
    data: () => ({
      drawer: null,
    }),
  }
  </script>