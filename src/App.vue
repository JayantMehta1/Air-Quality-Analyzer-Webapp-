<template>
  <div id="whole">
    <intro>
    </intro>

    <div id='secondPage'>
    <city-form  
            v-scroll-reveal.reset 

      @cityAdded="cityInput = $event
      getData()">
    </city-form>
    <results 
      v-scroll-reveal.reset 
      :transferCityData="cityInput" 
      :transferAPIData="apiData">
    </results> 
    </div>
  </div>
</template>



<script>
import Intro from './components/Intro.vue'
import CityForm from './components/CityForm.vue'
import Results from './components/Results.vue'



export default {
  data() {
    return {
      options: {
        scrollOverflow:true,
        licenseKey: 'YOUR_KEY_HEERE',
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3'],
        sectionsColor: ['#41b883', '#ff5f45', '#0798ec']
      },
      cityInput: {
        
      },
      apiData: {
        dataOne: {
          data: {
          aqi: "",

          }
        },
        dataTwo: {
          data:{
          aqi: "",
          }
        }
      }
    }
  },

  components: {
    Intro,
    CityForm,
    Results
  },
  methods: {
    getData(){
  
    this.$http.get("https://api.waqi.info/feed/" + this.cityInput.cityOne + "/?token=dba0d412969dc21c0bcfa2291bbeb7e20bb41cb2")
      .then(response => {
        return response.json()
      })
      .then(data => this.apiData.dataOne = data)    

    this.$http.get("https://api.waqi.info/feed/" + this.cityInput.cityTwo + "/?token=dba0d412969dc21c0bcfa2291bbeb7e20bb41cb2")
      .then(response => {
        return response.json()
      })
      .then(data => this.apiData.dataTwo = data     
      )

 

    }
  },
  created(){
$("#whole").animate({ scrollTop: $('#whole').prop("1000px")}, 1000);

  }
}
</script>

<style scoped>

div[data-v-22b83c6c]{
  height: 70vh;


}

body {
  margin: 0;
  padding: 0;
  background-color: whitesmoke;
}

#whole {
  margin: 0 auto;
  width: 80%;
}
#secondPage{

  margin-left: -8%;
  width: 90vw;
  height: 90vh;





}

</style>
