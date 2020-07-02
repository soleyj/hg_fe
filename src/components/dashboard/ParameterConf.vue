<template>
  <v-form
      ref="form"
      class ="input"
      v-model="valid"
      :lazy-validation="lazy"
       @submit.prevent="onSubmit" id="check-login-form"
    >
       <v-text-field  
        name = "light_time"
        type="number" label="Light Time" 
        v-bind:value="Light_time"
        v-model = "Light_time"
        >
        </v-text-field>

        <v-text-field  
        name = "light_on"
        type="number" label="Light Hours" 
        v-bind:value="Light_on"
        v-model = "Light_on"
    
        >
        </v-text-field>

        <v-text-field  
        name = "H20_duty"
        type="number" label="H20_duty" 
        v-bind:value="H20_duty"
        v-model = "H20_duty"
        >
        </v-text-field>

        <v-text-field 
        name = "Max_temp"
        type="number" label="Max_temp" 
        v-bind:value="Max_temp"
        v-model = "Max_temp"
        >
        </v-text-field>

        <v-text-field  
        name = "Fan_Duty"
        type="number" label="Fan_Duty" 
        v-bind:value="Fan_Duty"
        v-model = "Fan_Duty"
        >
        </v-text-field>



      <v-btn
        class="mr-4"
        type="submit" color="success" form="check-login-form"
      >
        Validate
      </v-btn>
    </v-form>
</template>

<script>
  import axios from 'axios'

export default {
    
    name:"ParameterConf",
    data:  () => ({
        Light_time: "",
        Light_on: "",
        H20_duty:"",
        Max_temp:"",
        Fan_Duty:"",
    }),  
    mounted: function ()
    {
      axios.defaults.headers.common['Authorization'] = "Token " + ( (this.$store.state.auth.token))
      axios({url: 'http://127.0.0.1:8000/api/data_input/newest/', method:'GET'})
      .then(resp => {
        console.log(resp)
        this.Light_time = resp.data.Light_time
        this.Light_on = resp.data.Light_on
        this.H20_duty = resp.data.H20_duty
        this.Max_temp = resp.data.Max_temp
        this.Fan_Duty = resp.data.Fan_Duty

        
        })
        .catch(err => {
          console.log(err)
        })
    },
    methods: {
        onSubmit() {
            let data ={"Light_time":this.Light_time,"Light_on":this.Light_on,"H20_duty":this.H20_duty,"Fan_Duty":this.Fan_Duty,"Max_temp":this.Max_temp,"machine":1}

            axios.defaults.headers.common['Authorization'] = "Token " + ( (this.$store.state.auth.token))

            axios({url: 'http://127.0.0.1:8000/api/data_input/', method:'POST',data:data})
            console.log()
        }
    },
}
</script>


<style scoped>
    .input{
        max-width: 400px;
    }
</style>