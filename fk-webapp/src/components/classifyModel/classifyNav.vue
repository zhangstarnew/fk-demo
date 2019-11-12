<template>
    <div class="classify-nav-box">
        <ul class="classify-nav-box-ul">
            <li v-for="(u,index) in data.words" :key="index" @click="update(index)" :class="index==variable?'classify-nav-box-ul-li-two':'classify-nav-box-ul-li-one'">{{u.name}}</li>
        </ul>
        <div class="classify-right" v-for="(u,index) in data.words" :key="index" v-show="index==variable">
            <a href="#" v-for="(n,j) in u.goods" :key="j" class="classify-right-a">
                <img :src="n.list" class="classify-right-a-img">
                <p class="classify-right-a-p">{{n.name}}</p>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "classifyNav",
        props:["data"],
        data(){
            return {
                variable:0
            }
        },
        methods:{
            update(index){
                this.variable=index;
            }
        }
    }
</script>

<style scoped>
    .classify-nav-box{
        display: flex;

    }
    .classify-nav-box-ul{
        background-color: rgb(229,229,229);
        overflow: auto;
    }

    .classify-nav-box-ul-li-one{
        width:0.94rem;
        height: 0.3475rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.3475rem;
        border-bottom: 0.01rem solid white;
        background-color:rgb(229,229,229);
    }
    .classify-nav-box-ul-li-two{
        width:0.94rem;
        height: 0.3475rem;
        font-size: 0.12rem;
        text-align: center;
        line-height: 0.3475rem;
        border-bottom: 0.01rem solid white;
        background-color:white;
        color: red;
    }
    .classify-right{
        width: 2.81rem;
        margin-bottom: 0.5rem;
        background-color: white;
        display: flex;
        flex-wrap:wrap;
        align-content: flex-start;

    }
    .classify-right-a{
        width: 0.936rem;
        height: 0.9rem;
        box-sizing: border-box;
        text-align: center;
        padding-top:0.04rem;

    }
    .classify-right-a-img{
        height: 0.7rem;

    }
    .classify-right-a-p{
        font-size: 0.12rem;
        color: gray;
    }
</style>