<template>
    <div class="V-footer">
        <div class="v-footer-box">
            <a :href="u.url" v-for="(u,index) in vfooter" :key="index" class="v-footer-box-a"><img :src="markPoint==index ? u.afterimg : u.beforeimg" @click="update(index)" class="v-footer-box-a-img"><br><span :class="markPoint==index ? 'v-footer-box-a-span2' : 'v-footer-box-a-span1'">{{u.word}}</span></a>

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
                        beforeimg:"./img/f1.png",
                        afterimg:"./img/f2.png",
                        url:"#/"
                    },
                    {
                        word:"分类",
                        beforeimg:"./img/fl1.png",
                        afterimg:"./img/fl2.png",
                        url:"#/main/classify"
                    },
                    {
                        word:"频道",
                        beforeimg:"./img/b1.png",
                        afterimg:"./img/b2.png",
                        url:"#/main/channel"
                    },
                    {
                        word:"购物车",
                        beforeimg:"./img/g1.png",
                        afterimg:"./img/g2.png",
                        url:"#/main/carts"
                    },
                    {
                        word:"我的",
                        beforeimg:"./img/my1.png",
                        afterimg:"./img/my2.png",
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
        z-index:10;
        border-top: 0.01rem solid gray;


    }
    .v-footer-box{
        width: 3.75rem;
        height: 0.4781rem;
        background-color:white;
        display: flex;
        padding-top: 0.02rem;
        box-sizing: border-box;
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