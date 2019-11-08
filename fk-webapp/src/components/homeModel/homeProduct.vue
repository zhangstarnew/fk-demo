<template>
    <div class="homeproduct-box">
        <h3 class="homeproduct-box-h3"><span class="homeproduct-box-span1"></span><span class="homeproduct-box-span2">新品上新</span></h3>

        <div class="swiper-container swiper-product">
            <div class="swiper-wrapper ">
                <div class="swiper-slide" v-for="(u,index) in homeProduct" :key="index"><a href="#"><img :src="u" alt=""></a></div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "homeProduct",
        data(){
            return{
                homeProduct: [
                    "./img/product1.jpg",
                    "./img/product2.jpg",
                    "./img/product3.jpg",
                    "./img/product4.jpg",
                    "./img/product5.jpg",
                    "./img/product6.jpg",
                    "./img/product7.jpg",
                    "./img/product8.jpg",
                    "./img/product9.jpg",
                    "./img/product10.jpg",
                    "./img/product11.jpg"
                ]
            }
        },
        mounted(){
            new Swiper ('.swiper-product', {
                slidesPerView: 2.3,
                spaceBetween: 6
            })
        }
    }
</script>

<style scoped>

    .homeproduct-box{
        width: 3.75rem;
        height: 1.4rem;

    }
    .homeproduct-box-h3{
        width: 3.75rem;
        height: 0.4rem;
        background-color:rgb(250,250,250);
        padding-left: 0.14rem;
        padding-top: 0.08rem;
        box-sizing: border-box;
    }
    .homeproduct-box-span1{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        margin-right: 0.1rem;
        vertical-align: middle;
        background-image: url("../../assets/images/newproduct.jpg");
        background-repeat: no-repeat;
        background-size: 0.16rem 0.16rem;
        background-position: 0.02rem 0.02rem;
    }
    .homeproduct-box-span2{
        font-size: 0.14rem;
        font-weight: 400;
        vertical-align: middle;
    }

    .swiper-container {
        width: 3.75rem;
        height: 1rem;
        background-color:white;

    }
    .swiper-slide{
        width: 3.75rem;
        height: 1rem;
    }
    .swiper-slide img{
        width: 100%;
    }


</style>