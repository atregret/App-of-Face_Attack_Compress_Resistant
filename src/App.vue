<template>
  <div id="app">
      <MuBan/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MuBan from './components/MuBan.vue'
export default {
  name: 'App',
  components: {
    MuBan
  },
  data() {
    return {
      imgurl: '',
      file: '',
      path:''
    }
  },
  methods: {
  
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
  background-color: gray;
  width: 80%;
  height: 80%;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
</style>
