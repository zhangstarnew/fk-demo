<template>
    <div class="cartsContent-box">
        <div class="cartsContent-box1">
            <div class="cartsContent-box1-1"><img src="../../assets/images/null-car.png" alt=""></div>
            <span class="cartsContent-box1-span1"><a>我的收藏</a></span><span class="cartsContent-box1-span2"><a>去逛逛</a></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartsContent"
    }
</script>

<style scoped>
    .cartsContent-box{
        width: 3.75rem;
        height: 3.19rem;
        background-color:white;

    }
    .cartsContent-box1{
        width: 3.34rem;
        height: 3.19rem;
        margin:0 auto;
        padding-top: 0.24rem;
        box-sizing: border-box;
    }
    .cartsContent-box1-1{
        width: 3.32rem;
        height: 2.3rem;
        border: 0.016rem solid rgb(217,217,217);
        margin-bottom: 0.1rem;
        text-align: center;
    }
    .cartsContent-box1-1 img{
        width: 1.4rem;
        height: 0.5rem;
        margin-top: 0.9rem;
    }
    .cartsContent-box1-span1 a{
        font-size: 0.12rem;
        width: 1.57rem;
        height: 0.34rem;
        display: inline-block;
        background-color: rgb(245,245,245);
        text-align: center;
        line-height: 0.34rem;
        margin-right: 0.2rem;
        border-radius: 0.06rem;
    }
    .cartsContent-box1-span2 a{
        font-size: 0.12rem;
        width: 1.57rem;
        height: 0.34rem;
        display: inline-block;
        background-color: rgb(245,245,245);
        text-align: center;
        line-height: 0.34rem;
        border-radius: 0.06rem;
    }
</style>