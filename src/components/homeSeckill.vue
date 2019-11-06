<template>
    <div class="homeseckill-box">
        <h3 class="homeseckill-box-h3"><span class="homeseckill-box-span1"></span><span class="homeseckill-box-span2">每日秒杀</span><span class="homeseckill-box-span3">|</span><span class="homeseckill-box-span4">15点场</span></h3>

        <div class="swiper-container swiper-seckill">
            <div class="swiper-wrapper ">
                <div class="swiper-slide" v-for="(u,index) in homeSeckill" :key="index"><a href="#"><img :src="u.list"><br><span class="swiper-slide-span1">{{u.afterword}}</span><span class="swiper-slide-span2">{{u.beforeword}}</span></a></div>
                <a href="#" class="swiper-slide-gd">查看更多∨</a>
            </div>
        </div>


    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "homeSeckill",
        data(){
            return {
                homeSeckill:[
                    {
                        afterword:"充值后￥69",
                        beforeword:"￥198",
                        list:"./img/seckill1.jpg"

                    },
                    {
                        afterword:"充值后￥9",
                        beforeword:"￥118",
                        list:"./img/seckill2.jpg"

                    },
                    {
                        afterword:"充值后￥69",
                        beforeword:"￥298",
                        list:"./img/seckill3.jpg"

                    },
                    {
                        afterword:"充值后￥9",
                        beforeword:"￥118",
                        list:"./img/seckill4.jpg"

                    },
                    {
                        afterword:"充值后￥69",
                        beforeword:"￥198",
                        list:"./img/seckill5.jpg"

                    },
                    {
                        afterword:"充值后￥9",
                        beforeword:"￥118",
                        list:"./img/seckill6.jpg"

                    },
                    {
                        afterword:"充值后￥9",
                        beforeword:"￥118",
                        list:"./img/seckill7.jpg"

                    }, {
                        afterword:"充值后￥44",
                        beforeword:"￥98",
                        list:"./img/seckill8.jpg"

                    },
                    {
                        afterword:"充值后￥9",
                        beforeword:"￥118",
                        list:"./img/seckill9.jpg"

                    }
                ]
            }
        },
        mounted(){
            new Swiper ('.swiper-seckill', {
                slidesPerView: 3.6,
            })
        }
    }
</script>

<style scoped>
    .homeseckill-box{
        width: 3.75rem;
        height: 2.4rem;
        /*background-color:red;*/
    }
    .homeseckill-box-h3{
        width: 3.75rem;
        height: 0.4rem;
        background-color:rgb(250,250,250);
        padding-left: 0.14rem;
        padding-top: 0.08rem;
        box-sizing: border-box;
        position: relative;
    }
    .homeseckill-box-span1{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        margin-right: 0.1rem;
        vertical-align: middle;
        background-image: url("../assets/images/wallet-clock-hot.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0.02rem -0.21rem;
    }
    .homeseckill-box-span2{
        font-size: 0.14rem;
        font-weight: 400;
        vertical-align: middle;
    }
    .homeseckill-box-span3{
        font-size: 0.14rem;
        vertical-align: middle;
        color: gray;
        font-weight: 400;
        margin-left: 0.1rem;
        margin-right: 0.1rem;
    }
    .homeseckill-box-span4{
        font-size: 0.1rem;
        font-weight: 400;
        color: gray;
        position: absolute;
        top: 0.14rem;

    }
    .swiper-container {
        width: 3.75rem;
        height: 1.6rem;
        background-color:white;

    }
    .swiper-slide{
        width: 3.75rem;
        height: 1.6rem;
    }
    .swiper-slide img{
        width: 1rem;
        height: 1.3rem;
    }
    .swiper-slide-span1{
        font-size: 0.12rem;
        color: rgb(184,30,35);
    }
    .swiper-slide-span2{
        font-size: 0.08rem;
        margin-left: 0.1rem;
        color: gray;
        text-decoration: line-through;
    }
    .swiper-slide-gd{
        height: 1.3rem;
        display: inline-block;
        padding-left: 0.14rem;
        padding-right: 0.14rem;
        padding-top: 0.22rem;
        box-sizing: border-box;
        font-size: 0.14rem;
        color: rgb(206,187,143);
        border: 0.01rem solid rgb(206,187,143);
        border-radius: 0.06rem;
    }
</style>