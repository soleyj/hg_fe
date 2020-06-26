<template>
<v-row>
<v-col>
  <Sensors/>
</v-col>
<v-col>
  <Sensors/>
</v-col>
</v-row>

    


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