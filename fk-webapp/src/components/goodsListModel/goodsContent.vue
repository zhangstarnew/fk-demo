<template>
    <div class="goods-content-box">
        <a href="#" v-for="(u,i) in data.goodsContent" :key="i" class="goods-content-box-a">
            <img :src="u.img" class="goods-content-box-a-img">
            <p class="goods-content-box-a-p">{{u.name}}</p>
            <span class="goods-content-box-a-span">{{u.price}}</span>
        </a>
    </div>
</template>

<script>
    export default {
        name: "goodsContent",
        props:["data"]

    }
</script>

<style scoped>
    .goods-content-box{
        width: 3.75rem;
        height: auto;
        background-color: white;
        margin-bottom: 0.3rem;
    }
    .goods-content-box-a{
        width: 50%;
        height: 2rem;
        display: inline-block;
        background-color:white;
        text-align: center;
        color: black;
        padding-top: 0.1rem;
        box-sizing: border-box;
    }
    .goods-content-box-a-img{
        width: 1.4rem;
        height: 1.4rem;
    }
    .goods-content-box-a-p{
        font-size: 0.12rem;
    }
    .goods-content-box-a-span{
        font-size: 0.12rem;
    }
</style>