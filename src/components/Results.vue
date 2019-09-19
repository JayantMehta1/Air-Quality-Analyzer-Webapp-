<template>
  <div>

  <div class="row">
    <div class="col float-left">
          <h2>{{transferCityData.cityOne.toUpperCase()}}</h2>
              <h2>{{transferAPIData.dataOne.data.aqi}}</h2>
      
    </div>
    <div class="col float-right">
          <h2>{{transferCityData.cityTwo.toUpperCase()}}</h2>
              <h2>{{transferAPIData.dataTwo.data.aqi}}</h2>
      
    </div>
    
  </div>
  
    <p>The air quality in {{transferCityData.cityOne}} is {{compareTotal}}x {{better}} than {{transferCityData.cityTwo}}</P>
  </div>


</template>

<script>
export default {

  props: ['transferCityData', 'transferAPIData'],
  watch: {

    'transferAPIData.dataOne.data.aqi': function (newVal, oldVal) { // watch it


      this.compareOne = newVal

        if (this.compareOne > this.compareTwo) {
        this.compareTotal = (this.compareOne / this.compareTwo).toFixed(2)
        this.better = "worse"
      } else {
        this.compareTotal = (this.compareTwo / this.compareOne).toFixed(2)
        this.better = "better"


      }

    },
    'transferAPIData.dataTwo.data.aqi': function (newVal, oldVal) { // watch it


      this.compareTwo = newVal

      if (this.compareOne > this.compareTwo) {
        this.compareTotal = Math.floor(this.compareOne / this.compareTwo).toFixed(2)
        this.better = "worse"
      } else {
        this.compareTotal = Math.floor(this.compareTwo / this.compareOne).toFixed(2 )
        this.better = "better"


      }
    }
  },
  data() {
    return {
      better: 'better',
      compareOne: this.transferAPIData.dataOne.data.aqi,
      compareTwo: this.transferAPIData.dataTwo.data.aqi,
      compareTotal: 0
    }
  },
  updated() {


  }
}
</script>

<style scoped>

.row {
  margin-top: 5vh;
    margin-bottom: 20vh;
}

p {
  margin-bottom: 8vh;
}

</style>