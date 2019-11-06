<template>
    <div class="swiper-container swiper-banner">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(u,index) in banner" :key="index"><a href="#"><img :src="u" ></a></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

    </div>
</template>

<script>
    import Swiper from "swiper"
    export default {
        name: "banner",
        data(){
            return {
                banner:[
                    "./img/banner(1).jpg",
                    "./img/banner(2).jpg",
                    "./img/banner(3).jpg",
                    "./img/banner(4).jpg",
                    "./img/banner(5).jpg",
                    "./img/banner(6).jpg",
                    "./img/banner(7).jpg",
                ]
            }
        },
        mounted(){
            new Swiper ('.swiper-banner', {
                loop: true,
                // 如果需要分页器
                pagination:{
                   el: '.swiper-pagination'
                },

                autoplay:true

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