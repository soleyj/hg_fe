<template>
<div>  
   <v-form
      ref="form"
      class ="input"
      v-model="valid"
      :lazy-validation="lazy"
       @submit.prevent="onSubmit" id="check-login-form"
    >
    <div v-for="conf in data_config" :key="conf">
            <InputNumber v-bind:input="conf"/>

      </div>

      
      <v-btn
        class="mr-4"
        type="submit" color="success" form="check-login-form"
        
      >
        Validate
      </v-btn>
      <v-alert type="success"
      class ="alerts"
      dismissible
      @input="closeAlert"
      value="true" v-if="type"
        >
      Configuracion Cargada
    </v-alert>
    </v-form>
    
    
</div>
 
</template>

<script>

  import axios from 'axios'
  import InputNumber from './InputNumber'

  
export default {
    components: {
      InputNumber,
    },  
    name:"ParameterConf",
    data:  () => ({
      
      data_config:[
        {title: "Light_time", value: 0},
        {title: "Light_on", value: 0},
        {title: "H20_duty", value: 0},
        {title: "Max_temp", value: 0},
        {title: "Fan_Duty",value: 0},
        
      ]
    }),  
    mounted: function ()
    {
      axios.defaults.headers.common['Authorization'] = "Token " + ( (this.$store.state.auth.token))
      axios({url: process.env.VUE_APP_BASE_URL+'/api/data_input/newest/', method:'GET'})
      .then(resp => {
        console.log(resp)
        this.data_config[0].value = resp.data.Light_time
        this.data_config[1].value  = resp.data.Light_on
        this.data_config[2].value  = resp.data.H20_duty
        this.data_config[3].value  = resp.data.Max_temp
        this.data_config[4].value  = resp.data.Fan_Duty

        
        })
        .catch(err => {
          console.log(err)
        })
    },
    methods: {
        onSubmit() {
            this.type = 'true'
            let data ={"Light_time":this.data_config[0].value,"Light_on":this.data_config[1].value,"H20_duty": this.data_config[2].value,"Fan_Duty":this.data_config[4].value,"Max_temp":this.data_config[3].value,"machine":1}

            axios.defaults.headers.common['Authorization'] = "Token " + ( (this.$store.state.auth.token))

            axios({url: process.env.VUE_APP_BASE_URL+ '/api/data_input/', method:'POST',data:data})
            console.log()
            this.type = 'true'
            
            let timer = this.onSubmit.timer
            if (timer) {
              clearTimeout(timer)
            }
            this.onSubmit.timer = setTimeout(() => {
                this.type = null
            }, 3000)
        }
    },
}
</script>


<style scoped>
    .input{
        max-width: 350px;
    }
    .alerts{
       max-width: 350px;
       margin-top: 10px;
    }
</style>