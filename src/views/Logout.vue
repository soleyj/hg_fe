<template>
 <div>
   <Logout/>
 </div>
</template>


<script>
  import Logout from '../components/account/logout'
  export default {
    props: {
      source: String,
    },
  components: {
    Logout,
  },
    data: () => ({
      drawer: null,
    }),
  }
  </script>