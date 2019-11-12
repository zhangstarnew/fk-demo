<template>
    <div>
        <div class="cartsBottom-login">
            <a href="#" class="cartsBottom-login-a1"><span class="cartsBottom-login-span1" >{{phoneNumber}}</span></a>
            <span class="cartsBottom-login-span2">|</span>
            <a href="#" class="cartsBottom-login-a2" @click.prevent="clear">退出</a>
        </div>
        <div class="cartsBottom-footer">
            <ul>
                <li><a href="#"><img src="../../assets/images/help.jpg" alt=""></a></li>
                <li><a href="#"><img src="../../assets/images/d2.jpg" alt=""></a></li>
                <li><a href="#"><img src="../../assets/images/weixin.jpg" alt=""></a></li>
                <li><a href="#"><img src="../../assets/images/pcsite.jpg" alt=""></a></li>
            </ul>
            <h3>京ICP证100557号</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "cartsBottom",
        data(){
            return {
                phoneNumber:localStorage.getItem("token")
            }
        },
        methods:{
            clear(){
                localStorage.clear()
                this.$router.push("/main/login")
            }
        }

    }
</script>

<style scoped>
    .cartsBottom-login{
        width: 3.75rem;
        height: 1.12rem;
        background-color:white;
        font-size: 0.14rem;
        text-align: center;
        line-height: 1.12rem;
    }
    .cartsBottom-login-a1{
        color: gray;
    }
    .cartsBottom-login-a2{
        color: gray;
    }
    .cartsBottom-login-span2{
        color: gray;
        margin: 0rem 0.1rem;
    }
    .cartsBottom-footer{
        width: 3.75rem;
        height: 1.12rem;
        background-color: white;
        text-align: center;
    }
    .cartsBottom-footer ul{
        width: 2.52rem;
        height: 0.87rem;
        background-color:white;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        padding-top: 0.14rem;
        box-sizing: border-box;
        border-top: 0.01rem solid gray;
        border-bottom: 0.01rem solid gray;
    }
    .cartsBottom-footer>ul>li>a>img{
        width: 0.39rem;
        height: 0.58rem;
    }
    .cartsBottom-footer h3{
        font-size: 0.1rem;
        font-weight: 300;
        color: black;
        margin-top: 0.02rem;
    }
</style>