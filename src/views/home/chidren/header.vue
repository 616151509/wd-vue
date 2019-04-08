<template>
    <div class="home-deader">
        <div class="left-input" type="text">
            <i class="iconfont iconfont-xiazai17"></i>
            请输入商品和品牌名称
        </div>
        <div class="right" @click="childClick">
            <i class="iconfont iconfont-menu left"></i>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        childClick(){
            this.$emit('childByValue')
        }
    }
}
</script>

<style lang="scss">
.home-deader{
    height: 44px;
    width: 100%;
    padding:8.5px 30px 8.5px 13.5px;
    box-sizing: border-box;
    display: flex;
    opacity: .9;
    display: fixed;
    left:0;
    top:0;
    .right{
        margin:4px 0 0 17px;
        width: 15px;
        .left{
            font-size: 36px;
            font-weight:bold;
            line-height: 20px;
        }
    }
    .left-input{
        display: block;
        flex:1;
        border-radius: 27px;
        position: relative;
        background: #e6e6e6;
        line-height: 27px;
        text-align: left;
        font-size: 14px;
        color: #9e9e9e;
        padding-left:14px;
        border:none;
        outline:none;
    }
}
</style>
