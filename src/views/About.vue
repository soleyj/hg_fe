<template>
  <div class="about">
    <BasicLayout>
      <v-row >
        <v-col 
        cols="12"
        sm="6"
        >
          <Sensors/>
        </v-col>
        <v-col 
        cols="12"
        sm="6"
        >
          <ParameterConf/>
          <InputNumber/>
        </v-col>
      </v-row>
      
    </BasicLayout>
  </div>
</template>



<script>
  import BasicLayout from '../components/layout/BasicLayout'
  import Sensors from '../components/dashboard/Sensors'
  import ParameterConf from '../components/dashboard/ParameterConf'
  import InputNumber from '../components/dashboard/InputNumber'
  export default {
    props: {
      source: String,
    },
  components: {
    BasicLayout,
    Sensors,
    InputNumber,
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