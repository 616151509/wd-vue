<template>
    <div class="tab">
        <template  v-for="(item,index) in tabList">
            <router-link class="list" @click.native="selectIndex(index)" :to="item.routeTo" :key='item.id'>
                <span class="icon" :style="index==selectNum?`background-image: url(${item.selectIcon})`:`background-image: url(${item.icon})`"></span>
                <span class="text">{{item.name}}</span>
            </router-link>
        </template>
    </div>
</template>

<script>
export default {
    data(){
        return{
            tabList:[
                {name:'豌豆市集',icon:'https://s4.wandougongzhu.cn/s/ba/2x_ef4bbd.png',selectIcon:'https://s2.wandougongzhu.cn/s/92/2x_9f190f.png',id:'100',routeTo:'/home'},
                {name:'分类品牌',icon:'https://s1.wandougongzhu.cn/s/89/3x_ad19af.png',selectIcon:'https://s5.wandougongzhu.cn/s/44/2x_906f6d.png',id:'101',routeTo:'/brand'},
                {name:'购物袋',icon:'https://s2.wandougongzhu.cn/s/13/3x_73a5b4.png',selectIcon:'https://s2.wandougongzhu.cn/s/ca/2x_20b8eb.png',id:'103',routeTo:'/shop'},
                {name:'我',icon:'https://s2.wandougongzhu.cn/s/b0/2x_0a8445.png',selectIcon:'https://s1.wandougongzhu.cn/s/b1/2x_fc765f.png',id:'104',routeTo:'/mine'}
            ],
            selectNum:''
        }
    },
    methods:{
        selectIndex:function(ind){
            
            this.selectNum = ind
            console.log(this.selectNum)
        }
    }
}
</script>

<style lang ="scss" >
.tab{
    position: absolute;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 100%;
    display: flex;
    .list{
        flex:1;
        display:flex;
        flex-direction: column;
        align-items: center;
        justify-content: middle;
        .text{color: #aaa;} 
    &.router-link-active{
        .text{
            color: #000;
            } 
    }
    .icon{
        display: block;
        width: 24px;
        height: 24px;
        background-size:24px 24px; 
    }
    }
    
}
</style>
