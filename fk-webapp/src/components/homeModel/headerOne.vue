<template>
    <div class="v-header-box">
        <input type="text" class="v-header-box-t1" placeholder="熊本熊">
        <span class="v-header-box-span"></span>
        <a href="" class="v-header-box-a"><span class="v-header-box-a-span">...</span></a>
    </div>
</template>

<script>
    export default {
        name: "headerOne"
    }
</script>

<style scoped>
    .v-header-box{
        width: 3.75rem;
        height: 0.45rem;
        background-color:rgba(208,206,205,0.4);
        padding-left: 0.1rem;
        padding-top: 0.1rem;
        box-sizing: border-box;
        position: relative;
        position: fixed;
        top: 0rem;
        z-index:10
    }
    .v-header-box-t1{
        width: 2.8rem;
        height: 0.24rem;
        border-radius: 0.25rem;
        padding-left: 0.4rem;
        outline: none;
        border: none;
        border: 0.01rem solid gray;
    }
    .v-header-box-span{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        position: absolute;
        left: 0.2rem;
        top: 0.13rem;
        background-image: url("../../assets/images/search2.png");
        background-size: 0.16rem 0.16rem;
        background-repeat: no-repeat;
        background-position: 0.02rem 0.01rem;
    }
    .v-header-box-a{
        width: 0.2rem;
        height: 0.15rem;
        display: inline-block;
        border: 0.01rem solid gray;
        position: absolute;
        top: 0.14rem;
        right: 0.1rem;
        text-align: center;
        border-radius: 0.06rem;

    }
    .v-header-box-a-span{
        width: 0.18rem;
        height: 0.15rem;
        display: inline-block;
        font-size: 0.15rem;
        line-height: 0.08rem;

    }
</style>