<template>
    <the-header title="Learn App"></the-header>
    <the-resources></the-resources>
</template>

<script>
// import { mapActions } from 'vuex';
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';

export default {
  components: {
    'the-header' : TheHeader,
    'the-resources' : TheResources
  },
 /* methods: {
    ...mapActions(['setInitResources'])
  },
  /* beforeCreate()
  {
    this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
  },
  created()
  {
    this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
  },
  beforeMount()
  {
    this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
  },
  mounted()
  {
    
    this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
    
  },
  beforeUpdate()
  {
    this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
  },
  updated()
  {
    this.axios.get('http://localhost:8081/users/').then(response => ( this.setInitResources({value: response.data}) ));
  } */

};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>