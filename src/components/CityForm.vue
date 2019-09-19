<template>
  <div id="top">
   

    <form>
  <div class="row">
    <div class="col">
      <input type="text"  v-model.lazy="cityAdd.cityOne" class="form-control" placeholder="Type in City One">
    </div>
    <div class="col">
      <input type="text" v-model.lazy="cityAdd.cityTwo" class="form-control" placeholder="Type in City Two">
    </div>
    
  </div>
  
          <button class="btn btn-primary" @click.prevent="createNew">Add Cities</button>
  

</form>

  </div>

</template>

<script>


export default {
    data() {
        return {
            cityAdd: {cityOne: '', cityTwo: ''}
        }
    },
    methods: {
        createNew() {
            this.$emit('cityAdded', this.cityAdd)
        }
    }
    
}
</script>



<style scoped>

#top{
  margin-top: 10vh;
}


button{

  margin-top: 2em;
  width: 200px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}


</style>
