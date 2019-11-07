<template>
    <div class="myMatter-box">
        <a href="#" class="myMatter-box-a"><span class="myMatter-box-a-span1">全部订单</span><span class="myMatter-box-a-span2">></span></a>
        <div class="myMatter-box1">
            <a href="#"><span class="myMatter-box1-span1"></span><br><span class="myMatter-box1-fz">进行中</span></a>
            <a href="#"><span class="myMatter-box1-span2"></span><br><span class="myMatter-box1-fz">已完成</span></a>
            <a href="#"><span class="myMatter-box1-span3"></span><br><span class="myMatter-box1-fz">待评价</span></a>
            <a href="#"><span class="myMatter-box1-span4"></span><br><span class="myMatter-box1-fz">无效</span></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myMatter"
    }
</script>

<style scoped>
    .myMatter-box{
        width: 3.75rem;
        height: 1.05rem;
        background-color:white;
        margin-top: 0.1rem;
    }
    .myMatter-box-a{
        width: 3.75rem;
        height: 0.4rem;
        display: inline-block;
        line-height: 0.4rem;
        position: relative;
        color: #000;
    }
    .myMatter-box-a-span1{
        font-size: 0.12rem;
        position: absolute;
        left: 0.2rem;
    }
    .myMatter-box-a-span2{
        font-size: 0.2rem;
        position: absolute;
        right: 0.2rem;
        color: gray;
    }
    .myMatter-box1{
        width: 3.75rem;
        height: 0.64rem;
        border-top: 0.01rem solid gray;
        display: flex;
    }
    .myMatter-box1>a{
        width: 25%;
        height: 0.64rem;
        display: inline-block;
        text-align: center;
        padding-top: 0.1rem;
        box-sizing: border-box;

    }
    .myMatter-box1-span1{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-order-icon.png");
        background-size:100%;
        background-repeat: no-repeat;
        background-position: 0rem -0.23rem;
        margin-bottom: 0.05rem;
    }
    .myMatter-box1-span2{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-order-icon.png");
        background-size:100%;
        background-repeat: no-repeat;
        background-position: 0rem -0.45rem;
        margin-bottom: 0.05rem;
    }
    .myMatter-box1-span3{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-order-icon.png");
        background-size:100%;
        background-repeat: no-repeat;
        background-position: 0rem -0.67rem;
        margin-bottom: 0.05rem;
    }
    .myMatter-box1-span4{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-order-icon.png");
        background-size:100%;
        background-repeat: no-repeat;
        background-position: 0rem -0.9rem;
        margin-bottom: 0.05rem;
    }
    .myMatter-box1-fz{
        font-size: 0.12rem;
        color: #000;
    }
</style>