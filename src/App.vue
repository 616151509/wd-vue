<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import TabBar from './components/tabbar'
export default {
  components:{
      'tab-bar':TabBar
  }
}
</script>

<style lang="scss">

</style>
