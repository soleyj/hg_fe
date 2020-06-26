<template>
  <div>
    <Sensors/>

  </div>

</template>


<script>
  import Sensors from '../components/dashboard/Sensors';
  export default {
    props: {
      source: String,
    },
  components: {
    Sensors,
  },
    data: () => ({
      drawer: null,
    }),
  }
  </script>