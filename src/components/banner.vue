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
                    require("../assets/images/banner(1).jpg"),
                    require("../assets/images/banner(2).jpg"),
                    require("../assets/images/banner(3).jpg"),
                    require("../assets/images/banner(4).jpg"),
                    require("../assets/images/banner(5).jpg"),
                    require("../assets/images/banner(6).jpg"),
                    require("../assets/images/banner(7).jpg")
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