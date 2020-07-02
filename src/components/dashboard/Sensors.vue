<template>
<div>
   <v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list disabled>
      <v-subheader>Sensors</v-subheader>
      <v-list-item-group v-model="items" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text + item.text_2"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
    <v-card
    class="mx-auto"
    max-width="300"

    tile
  >
    <v-list disabled>
      <v-subheader>Outputs</v-subheader>
      <v-list-item-group v-model="outputs" color="primary">
        <v-list-item v-for="(item, i) in outputs"
          :key="i"
        >
          <v-list-item-icon
         >
          
            <v-icon 
             v-bind:class="{ active: item.data , errorClass: !item.data}"
              >mdi-album</v-icon>
          </v-list-item-icon>
            <v-list-item v-text="item.text"></v-list-item>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</div>


  
</template>

<script>
  import axios from 'axios'
  export default {
    name:"senosrs",
    data: () => ({

      items: [
        { text_2: ' C', text: '--', icon: 'mdi-thermometer-high' },
        { text_2: ' %', text: '--', icon: 'mdi-water-percent' },
        { text_2: '', text: '--', icon: 'mdi-cup-water' },

      ],
      outputs: [
        { text: 'Bomba Aigua'  ,data:false},
        { text: 'Bomba Nutrients1', data:false},
        { text: 'Bomba Nutrients2',  data:false},
        { text: 'Llum',  data:false},
        { text: 'Bomba H20',  data:false},
        { text: 'Ventiladors',  data:false},

      ],

    }),
    mounted: function ()
    {
      axios.defaults.headers.common['Authorization'] = "Token " + ( (this.$store.state.auth.token))
      axios({url: 'http://127.0.0.1:8000/api/data_hg/newest/', method:'GET'})
      .then(resp => {
        console.log(resp)
        this.$set(this.items[0],"text",resp.data.temp_1)
        this.$set(this.items[1],"text",resp.data.humid_1)
        this.$set(this.items[2],"text",resp.data.sw_1)
        })
        .catch(err => {
          console.log(err)
        })
      axios({url: 'http://127.0.0.1:8000/api/data_output/newest/', method:'GET'})
      .then(resp => {
        console.log(resp)
        this.$set(this.outputs[0],"data",resp.data.Bomba_1)
        this.$set(this.outputs[1],"data",resp.data.Bomba_2)
        this.$set(this.outputs[2],"data",resp.data.Bomba_3)
        this.$set(this.outputs[2],"data",resp.data.Llum)
        this.$set(this.outputs[2],"data",resp.data.Bomba_h20)
        this.$set(this.outputs[2],"data",resp.data.Ventilador)
        })
        .catch(err => {
          console.log(err)
        })
  }
  }
</script>


<style scoped>

.mx-auto{
      margin-top: 25px;
}

.active{
  color:green;

}
.errorClass{
  color:red;
}


</style>