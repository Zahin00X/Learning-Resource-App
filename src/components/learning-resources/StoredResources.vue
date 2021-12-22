<template>
  <ul>
    <learning-resource
      v-for="res in storedResources"
      :id="res._id"
      :key="res._id"
      :title="res.title"
      :url="res.url"
      :description="res.description"
    ></learning-resource>
  </ul>    
</template>

<script>
import LearningResource from './LearningResource.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default{
    
    components: {
    'learning-resource': LearningResource,
  },
  methods: {
    ...mapActions(['setInitResources'])
  },
  computed:{
    ...mapGetters(['storedResources'])
  },
  //inject : ['resources'],
  async beforeCreate()
  {
    await this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
    console.log(this.storedResources);
    
  }  
}
</script>

<style>

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}

</style>
