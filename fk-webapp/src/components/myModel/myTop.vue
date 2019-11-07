<template>
    <div class="myTop-box">
        <a href="#" class="myTop-box-a"></a>
        <div class="myTop-box1">
            <img src="../../assets/images/H5-V0.jpg" class="myTop-box1-img">
            <p class="myTop-box1-p">13649208218</p>
            <a href="#"><img src="../../assets/images/H5-NewV0.png" class="myTop-box1-vip"></a>
        </div>
        <ul class="myTop-box-ul">
            <li>积分:<span class="myTop-box-ul-li-jf">0</span></li>
            <li>余额:<span class="myTop-box-ul-li-ye">0.00</span></li>
            <li>成长值:<span class="myTop-box-ul-li-czz">0</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "myTop"
    }
</script>

<style scoped>
    .myTop-box{
        width: 3.75rem;
        height: 2rem;
        background-image: url("../../assets/images/uc-topbgd.png");
        background-size: 100%;
        position: relative;
        text-align: center;
    }
    .myTop-box-a{
        width: 0.25rem;
        height: 0.25rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-order-icon.png");
        background-size: 0.2rem;
        background-repeat: no-repeat;
        background-position: 0.02rem 0.02rem;
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
    }
    .myTop-box1-img{
        border-radius: 50%;
        margin-top: 0.3rem;
    }
    .myTop-box1-p{
        font-size: 0.12rem;
        color: white;
        margin-top: 0.1rem;
    }
    .myTop-box1-vip{
        width: 0.56rem;
        height: 0.16rem;
        margin-top: 0.1rem;
    }
    .myTop-box-ul{
        width: 3.75rem;
        height: 0.2rem;
        display: flex;
        line-height: 0.2rem;
        margin-top: 0.1rem;
    }
    .myTop-box-ul>li{
        width: 33.3%;
        font-size: 0.12rem;
        color: white;
    }
</style>