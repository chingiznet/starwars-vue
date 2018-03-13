<template>
  <div class="col-4">
    <div v-if="loading">
      loading...
    </div>
    <div class="card" :class="animated_class" v-else>
      <div class="card-body">
        <h4 class="card-title">{{item.name}}</h4>
        <div class="character-card" @click="switchItem">
          <div v-if="index < 5" v-for="(value,key, index) in item" :key="key">
            <p class="card-text"><strong>{{key}}</strong> {{value}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "items",
    data(){
      return{
        loading:false,
        item:{},
        animated_class: ''
      }
    },
    props: ['passedItem','type'],
    methods: {
      switchItem(){
        this.animated_class = 'animated rollOut';
        let random_id = Math.floor(Math.random() * 63) + 1;
        fetch(`https://swapi.co/api/${this.type}/${random_id}/`,{
          method: 'GET'
        })
          .then(response => response.json())
          .then(json => {
            let item = json;
            this.animated_class = 'animated rollIn';
            this.item = item;
            this.loading = false;
          });
      }
    },
    created(){
      this.item = this.passedItem;
    }
  }
</script>

<style scoped>

</style>