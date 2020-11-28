<template>
  <div id="app">
    <router-view v-if='show'></router-view>
  </div>
</template>
<script>


export default {
  name: 'App',
  data(){
    return{
      show:true
    }
  },
  methods:{
    reload(){
      this.show = false;
      this.$nextTick(function(){
        this.show = true
      })
    }
  },
  provide(){
    return {
      reload:this.relaod
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
