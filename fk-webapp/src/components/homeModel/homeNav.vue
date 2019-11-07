<template>
    <div class="homenav-box">
        <img src="../../assets/images/homeNav6.jpg" alt="" class="homenav-box-img1">
        <div class="homenav-box1">
            <a href="#" v-for="(u,index) in homenav" :key="index" class="homenav-box1-a"><img :src="u.list" class="homenav-box1-img"><br><span class="homenav-box1-span">{{u.word}}</span></a>

        </div>
    </div>
</template>

<script>
    export default {
        name: "homeNav",
        data(){
            return{
                homenav:[
                    {
                        word:"新品",
                        list:"./img/homeNav1.jpg"
                    },
                    {
                        word:"特惠",
                        list:"./img/homeNav2.jpg"
                    },
                    {
                        word:"衬衫",
                        list:"./img/homeNav3.jpg"
                    },
                    {
                        word:"外套",
                        list:"./img/homeNav4.jpg"
                    },
                    {
                        word:"获奖名单",
                        list:"./img/homeNav5.jpg"
                    },
                ]
            }
        },
    }
</script>

<style scoped>
    .homenav-box{
        width: 3.75rem;
        height: 1.24rem;
        text-align: center;
        background-color: white;
    }
    .homenav-box-img1{
        width: 3.4rem;
        height: 0.3125rem;
        margin-top: 0.12rem;

    }
    .homenav-box1{
        width: 3.75rem;
        height: 0.8rem;
        display: flex;
        padding-top: 0.14rem;
        box-sizing: border-box;
    }
    .homenav-box1-a{
        width: 20%;
        text-align: center;

    }
    .homenav-box1-img{
        width: 31.5px;
        height: 31.5px;
        margin-bottom: 0.06rem;
    }
    .homenav-box1-span{
        font-size: 0.12rem;

    }
</style>