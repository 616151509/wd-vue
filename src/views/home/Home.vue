<template>
  <div class="home">
     <hea-der @childByValue="childByValue"></hea-der>
     <card-list class="card-list">
       <right-list v-if="show" class=""></right-list>
       <van-popup v-model="show" position="top" :overlay="true"></van-popup>
     </card-list>
     
  </div>
</template>

<script>
import Header from './chidren/header' ;
import CardList from './chidren/cardlist' ;
import RightList from './chidren/rightlist';
import { Popup } from 'vant';
console.log(Header.name) 
export default {
    components:{
      'hea-der':Header,
      'card-list':CardList,
      'right-list':RightList,
      [Popup.name]:Popup
    },
    data() {
      return {
        show: false
      }
    },
    methods:{
      childByValue(){
        this.show = !this.show
      }
    }
}
</script>

<style>
.card-list{
  position: absolute;
  
}
</style>

