<template>
    <div class="classify-nav-box">
        <ul class="classify-nav-box-ul">
            <li v-for="(u,index) in words" :key="index" @click="update(index)" :class="index==variable?'classify-nav-box-ul-li-two':'classify-nav-box-ul-li-one'">{{u.name}}</li>
        </ul>
        <div class="classify-right" v-for="(u,index) in words" :key="index" v-show="index==variable">
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
        data(){
            return {
                words:[
                    {
                       name: "推荐",
                        goods:[
                            {
                                name:"免烫衬衫",
                                list:"./img/a1.jpg"
                            },
                            {
                                name:"牛津纺衬衫",
                                list:"./img/a2.jpg"
                            },
                            {
                                name:"灯芯绒衬衫",
                                list:"./img/a3.jpg"
                            },
                            {
                                name:"休闲衬衫",
                                list:"./img/a4.jpg"
                            },
                            {
                                name:"法兰绒衬衫",
                                list:"./img/a5.jpg"
                            },
                            {
                                name:"卫衣",
                                list:"./img/a6.jpg"
                            },
                            {
                                name:"针织衫",
                                list:"./img/a7.jpg"
                            },
                            {
                                name:"水柔棉",
                                list:"./img/a8.jpg"
                            },
                            {
                                name:"素色T恤",
                                list:"./img/a9.jpg"
                            },
                            {
                                name:"帆布鞋",
                                list:"./img/a10.jpg"
                            },
                            {
                                name:"休闲鞋",
                                list:"./img/a11.jpg"
                            },
                            {
                                name:"夹克",
                                list:"./img/a12.jpg"
                            },
                            {
                                name:"外套",
                                list:"./img/a13.jpg"
                            },
                            {
                                name:"T恤",
                                list:"./img/a14.jpg"
                            },
                            {
                                name:"童装",
                                list:"./img/a15.jpg"
                            },
                            {
                                name:"大衣",
                                list:"./img/a16.jpg"
                            },
                            {
                                name:"棉服",
                                list:"./img/a17.jpg"
                            },
                            {
                                name:"羽绒服",
                                list:"./img/a18.jpg"
                            },
                            {
                                name:"休闲裤",
                                list:"./img/a19.jpg"
                            },
                            {
                                name:"牛仔裤",
                                list:"./img/a20.jpg"
                            },
                            {
                                name:"复古跑",
                                list:"./img/a21.jpg"
                            },
                            {
                                name:"拖鞋",
                                list:"./img/a22.jpg"
                            },
                            {
                                name:"手机壳",
                                list:"./img/a23.jpg"
                            }

                        ]

                    },
                    {
                        name: "男装",
                        goods:[
                            {
                                name:"免烫衬衫",
                                list:"./img/b1.jpg"
                            },
                            {
                                name:"牛津纺衬衫",
                                list:"./img/b2.jpg"
                            },
                            {
                                name:"法兰绒衬衫",
                                list:"./img/b3.jpg"
                            },
                            {
                                name:"水洗棉衬衫",
                                list:"./img/b4.jpg"
                            },
                            {
                                name:"灯芯绒衬衫",
                                list:"./img/b5.jpg"
                            },
                            {
                                name:"休闲衬衫",
                                list:"./img/b6.jpg"
                            },
                            {
                                name:"卫衣",
                                list:"./img/b7.jpg"
                            },
                            {
                                name:"针织衫",
                                list:"./img/b8.jpg"
                            },
                            {
                                name:"水柔棉",
                                list:"./img/b9.jpg"
                            },
                            {
                                name:"牛仔衬衫",
                                list:"./img/b10.jpg"
                            },
                            {
                                name:"商务衬衫",
                                list:"./img/b11.jpg"
                            },
                            {
                                name:"麻衬衫",
                                list:"./img/b12.jpg"
                            },
                            {
                                name:"外套",
                                list:"./img/b13.jpg"
                            },
                            {
                                name:"大衣",
                                list:"./img/b14.jpg"
                            },
                            {
                                name:"西服",
                                list:"./img/b15.jpg"
                            },
                            {
                                name:"羽绒服",
                                list:"./img/b16.jpg"
                            },
                            {
                                name:"T恤",
                                list:"./img/b17.jpg"
                            },
                            {
                                name:"短袖衬衫",
                                list:"./img/b18.jpg"
                            },
                            {
                                name:"POLO衫",
                                list:"./img/b19.jpg"
                            },
                            {
                                name:"皮肤衣",
                                list:"./img/b20.jpg"
                            },
                            {
                                name:"休闲裤",
                                list:"./img/b21.jpg"
                            },
                            {
                                name:"牛仔裤",
                                list:"./img/b22.jpg"
                            },
                            {
                                name:"针织裤",
                                list:"./img/b23.jpg"
                            }
                        ]

                    },
                    {
                        name: "女装",
                        goods:[
                            {
                                name:"卫衣",
                                list:"./img/c1.jpg"
                            },
                            {
                                name:"水柔棉",
                                list:"./img/c2.jpg"
                            },
                            {
                                name:"休闲衬衫",
                                list:"./img/c3.jpg"
                            },
                            {
                                name:"针织衫",
                                list:"./img/c4.jpg"
                            },
                            {
                                name:"外套",
                                list:"./img/c5.jpg"
                            },
                            {
                                name:"皮肤衣",
                                list:"./img/c6.jpg"
                            },
                            {
                                name:"T恤",
                                list:"./img/c7.jpg"
                            },
                            {
                                name:"麻衬衫裙",
                                list:"./img/c8.jpg"
                            },
                            {
                                name:"运动速干",
                                list:"./img/c9.jpg"
                            },
                            {
                                name:"牛仔裤",
                                list:"./img/c10.jpg"
                            },
                            {
                                name:"针织裤",
                                list:"./img/c11.jpg"
                            },
                            {
                                name:"沙滩裙",
                                list:"./img/c12.jpg"
                            }
                        ]

                    },
                    {
                        name: "男鞋",
                        goods:[
                            {
                                name:"帆布鞋",
                                list:"./img/d1.jpg"
                            },
                            {
                                name:"休闲鞋",
                                list:"./img/d2.jpg"
                            },
                            {
                                name:"复古跑",
                                list:"./img/d3.jpg"
                            },
                            {
                                name:"运动鞋",
                                list:"./img/d4.jpg"
                            },
                            {
                                name:"商务休闲鞋",
                                list:"./img/d5.jpg"
                            },
                            {
                                name:"皮鞋",
                                list:"./img/d6.jpg"
                            }
                        ]

                    },
                    {
                        name: "女鞋",
                        goods:[
                            {
                                name:"帆布鞋",
                                list:"./img/e1.jpg"
                            },
                            {
                                name:"复古跑",
                                list:"./img/e2.jpg"
                            },
                            {
                                name:"休闲鞋",
                                list:"./img/e3.jpg"
                            }
                        ]

                    },
                    {
                        name: "袜品",
                        goods:[
                            {
                                name:"运动袜",
                                list:"./img/f1.jpg"
                            },
                            {
                                name:"打底袜",
                                list:"./img/f2.jpg"
                            },
                            {
                                name:"棉袜",
                                list:"./img/f3.jpg"
                            }

                        ]

                    },
                    {
                        name: "家居",
                        goods:[
                            {
                                name:"手机壳",
                                list:"./img/h1.jpg"
                            },
                            {
                                name:"床品",
                                list:"./img/h2.jpg"
                            },
                            {
                                name:"床单",
                                list:"./img/h3.jpg"
                            },
                            {
                                name:"被子",
                                list:"./img/h4.jpg"
                            },
                            {
                                name:"家居毯",
                                list:"./img/h5.jpg"
                            },
                            {
                                name:"枕头",
                                list:"./img/h6.jpg"
                            },
                            {
                                name:"围巾",
                                list:"./img/h7.jpg"
                            },
                            {
                                name:"背心",
                                list:"./img/h8.jpg"
                            },
                            {
                                name:"睡衣",
                                list:"./img/h9.jpg"
                            },
                            {
                                name:"箱包",
                                list:"./img/h10.jpg"
                            },
                            {
                                name:"钱包",
                                list:"./img/h11.jpg"
                            },
                            {
                                name:"拖鞋",
                                list:"./img/h12.jpg"
                            },
                            {
                                name:"皮带",
                                list:"./img/h13.jpg"
                            }

                        ]

                    },
                    {
                        name: "童装",
                        goods:[
                            {
                                name:"卫衣",
                                list:"./img/i1.jpg"
                            },
                            {
                                name:"男童",
                                list:"./img/i2.jpg"
                            },
                            {
                                name:"女童",
                                list:"./img/i3.jpg"
                            },
                            {
                                name:"皮肤衣",
                                list:"./img/i4.jpg"
                            }
                        ]

                    },
                    {
                        name: "内衣",
                        goods:[
                            {
                                name:"秋衣",
                                list:"./img/j1.jpg"
                            },
                            {
                                name:"打底裤",
                                list:"./img/j2.jpg"
                            },
                            {
                                name:"内衣",
                                list:"./img/j3.jpg"
                            }

                        ]

                    },



                ],
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