<template>
    <div class="swiper-container swiper-banner" >
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(u,index) in data.banner" :key="index"><a href="#"><img :src="u" ></a></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "banner",
        props:["data"],
        mounted(){
            new Swiper ('.swiper-banner', {
                loop: true,
                autoplay:true,
                // 如果需要分页器
                pagination:{
                   el: '.swiper-pagination'
                }
            })
        }
    }


</script>

<style scoped>
    .swiper-container {
        width: 3.75rem;
        height: 2.4rem;


    }
    .swiper-slide img{
        width: 100%;
    }

</style>