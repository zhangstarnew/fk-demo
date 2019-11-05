<template>
    <div class="V-footer">
        <div class="v-footer-box">
            <a :href="u.url" v-for="(u,index) in vfooter" :key="index" class="v-footer-box-a"><img :src="markPoint===index ? u.afterimg : u.beforeimg" @click="update(index)" class="v-footer-box-a-img"><br><span :class="markPoint==index ? 'v-footer-box-a-span2' : 'v-footer-box-a-span1'">{{u.word}}</span></a>

            <span class="v-footer-box-a-sum">0</span>
        </div>



    </div>
</template>

<script>
    export default {
        name: "vfooter",
        data(){
            return {
                vfooter:[
                    {
                       word:"凡客",
                        beforeimg:require("../assets/images/f1.png"),
                        afterimg:require("../assets/images/f2.png"),
                        url:"#/"
                    },
                    {
                        word:"分类",
                        beforeimg:require("../assets/images/fl1.png"),
                        afterimg:require("../assets/images/fl2.png"),
                        url:"#/main/classify"
                    },
                    {
                        word:"频道",
                        beforeimg:require("../assets/images/b1.png"),
                        afterimg:require("../assets/images/b2.png"),
                        url:"#/main/channel"
                    },
                    {
                        word:"购物车",
                        beforeimg:require("../assets/images/g1.png"),
                        afterimg:require("../assets/images/g2.png"),
                        url:"#/main/carts"
                    },
                    {
                        word:"我的",
                        beforeimg:require("../assets/images/my1.png"),
                        afterimg:require("../assets/images/my2.png"),
                        url:"#/main/my"
                    }
                ],
                markPoint:0
            }
        },
        methods:{
            update(index){
                this.markPoint=index;

            }
        }
    }


</script>

<style scoped>
    .V-footer{
        position: fixed;
        bottom: 0;

    }
    .v-footer-box{
        width: 3.75rem;
        height: 0.4781rem;
        background-color:pink;
        display: flex;
    }
    .v-footer-box-a{
        width: 20%;
        height: 0.4781rem;
        text-align: center;
    }
    .v-footer-box-a-img{
        width: 0.26rem;
        height: 0.26rem;
        margin-bottom: 0.02rem;
    }
    .v-footer-box-a-span1{
        font-size: 0.12rem;
        color: gray;
    }
    .v-footer-box-a-span2{
        font-size: 0.12rem;
        color: red;
    }
    .v-footer-box-a-sum{
        width: 0.1rem;
        height: 0.12rem;
        font-size: 0.1rem;
        color: white;
        line-height: 0.14rem ;
        text-align: center;
        display: inline-block;
        background-color:red;
        position: absolute;
        right: 0.92rem;
        border-radius: 50%;
    }
</style>