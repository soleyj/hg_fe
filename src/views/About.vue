<template>
  <div class="about">
    <BasicLayout>
      <v-row >
        <v-col>
          <Sensors/>
        </v-col>
        <v-col
        max-width="300">
          <ParameterConf/>
        </v-col>
      </v-row>
      
    </BasicLayout>
  </div>
</template>



<script>
  import BasicLayout from '../components/layout/BasicLayout'
  import Sensors from '../components/dashboard/Sensors'
  import ParameterConf from '../components/dashboard/ParameterConf'
  export default {
    props: {
      source: String,
    },
  components: {
    BasicLayout,
    Sensors,
    ParameterConf,
  },
    data: () => ({
      drawer: null,
    }),
  }
  </script>

  <style lang="stylus" scoped>
  .v-form{
    
  }
  </style>