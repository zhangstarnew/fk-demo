<template>
    <div class="homenav-box">
        <img src="../../assets/images/homeNav6.jpg" alt="" class="homenav-box-img1">
        <div class="homenav-box1">
            <a href="#/goods" v-for="(u,index) in data.homenav" :key="index" class="homenav-box1-a"><img :src="u.list" class="homenav-box1-img"><br><span class="homenav-box1-span">{{u.word}}</span></a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "homeNav",
        props:["data"]

    }
</script>

<style scoped>
    .homenav-box{
        width: 3.75rem;
        height: 1.24rem;
        text-align: center;
        background-color: white;
    }
    .homenav-box-img1{
        width: 3.4rem;
        height: 0.3125rem;
        margin-top: 0.12rem;

    }
    .homenav-box1{
        width: 3.75rem;
        height: 0.8rem;
        display: flex;
        padding-top: 0.14rem;
        box-sizing: border-box;
    }
    .homenav-box1-a{
        width: 20%;
        text-align: center;

    }
    .homenav-box1-img{
        width: 31.5px;
        height: 31.5px;
        margin-bottom: 0.06rem;
    }
    .homenav-box1-span{
        font-size: 0.12rem;

    }
</style>