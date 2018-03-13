<template>
  <div>
    <div v-if="!items.length && loading">
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <content-placeholders>
                  <content-placeholders-heading />
                  <content-placeholders-text :lines="5" />
                </content-placeholders>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <content-placeholders>
                  <content-placeholders-heading />
                  <content-placeholders-text :lines="5" />
                </content-placeholders>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div class="card">
              <div class="card-body">
                <content-placeholders>
                  <content-placeholders-heading />
                  <content-placeholders-text :lines="5" />
                </content-placeholders>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="container-fluid">
        <div class="row">
            <Item :type="type" :passed-item="item" v-for="item in items" :key="item.id" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Item from './Item'
  export default {
    data () {
      return {
        type: this.$route.params.type,
        items: [],
        loading:true
      }
    },
    methods:{
      fetchItems(){
        let type = this.type = this.$route.params.type;
        let initial_ids = [1,13,14];
        this.items = [];
        this.loading = true;

        let promises = [];
        for(let i in initial_ids) {
          let id = initial_ids[i];
          const promise = fetch(`https://swapi.co/api/${type}/${id}/`,{
            method: 'GET'
          }).then(response => response.json());
          promises.push(promise);
        }
        Promise.all(promises).then((resolve)=>{
          resolve.map(pro => {
            this.items.push(pro);
          });
          this.loading = false;
        });
      }
    },
    watch:{
      '$route':'fetchItems'
    },
    created(){
      this.fetchItems();
    },
    components: {
      Item
    }
  }
</script>
<style>

</style>