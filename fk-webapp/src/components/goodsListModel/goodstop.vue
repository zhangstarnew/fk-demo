<template>
    <div class="goods-top-box">
        <ul class="goods-top-box-ul">
            <li><a href="#">新品</a></li>
            <li><a href="#">销量</a></li>
            <li><a href="#">评价</a></li>
            <li><a href="#">价格 <img src="../../assets/images/icon_order.jpg" ></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "goodstop"
    }
</script>

<style scoped>
    .goods-top-box{
        width: 3.75rem;
        height: 0.369rem;
        background-color: white;
    }
    .goods-top-box-ul{
        width: 3.75rem;
        height: 0.369rem;
        display: flex;
    }
    .goods-top-box-ul>li{
        width: 25%;
        height: 0.369rem;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.369rem;

    }
    .goods-top-box-ul>li>a{
        color: black;
    }
    .goods-top-box-ul>li>a>img{
        width: 0.12rem;
        height: 0.12rem;
        vertical-align: middle;
    }
</style>