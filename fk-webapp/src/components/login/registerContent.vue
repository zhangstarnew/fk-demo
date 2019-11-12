<template>
    <div class="registerContent-box">
        <input type="text" placeholder="请输入图片验证码" class="registerContent-box-t1">
        <br>
        <input type="text" placeholder="请输入您的手机号" class="registerContent-box-t2"><a href="#" class="registerContent-box-a1">获取验证码</a>
        <br>
        <input type="text" placeholder="请输入手机验证码" class="registerContent-box-t3">
        <br>
        <input type="password" placeholder="密码:6-16位字母,数字，特殊符号" class="registerContent-box-pwd">
        <br>
        <span class="registerContent-box-span">注册账号即表示同意遵守</span>
        <router-link to="findTos" class="registerContent-box-r">《VANCL凡客服务条款》</router-link>
        <a href="#" class="registerContent-box-a2">点击注册</a>
    </div>
</template>

<script>
    export default {
        name: "registerContent"
    }
</script>

<style scoped>
    .registerContent-box{
        width: 3.75rem;
        height: 4rem;
        background-color: white;
        padding-left: 0.3rem;
        position: relative;
        box-sizing: border-box;
    }
    .registerContent-box-t1{
        width: 1.8rem;
        height: 0.3rem;
        margin-top: 0.3rem;
    }
    .registerContent-box-t2{
        width: 1.8rem;
        height: 0.3rem;
        margin-top: 0.14rem;
    }
    .registerContent-box-t3{
        width: 3rem;
        height: 0.3rem;
        margin-top: 0.26rem;
    }
    .registerContent-box-pwd{
        width: 3rem;
        height: 0.3rem;
        margin-top: 0.12rem;
        margin-bottom: 0.4rem;
    }
    .registerContent-box-a1{
        width: 1rem;
        height: 0.4rem;
        display: inline-block;
        background-color: white;
        position: absolute;
        top: 0.8rem;
        right: 0.5rem;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.4rem;
        color: red;
        border: 0.02rem solid gray;
    }
    .registerContent-box-span{
        font-size: 0.12rem;
        margin-left: 0.2rem;
        color: gray;
    }
    .registerContent-box-r{
        font-size: 0.12rem;
        color: black;
    }
    .registerContent-box-a2{
        width: 3rem;
        height: 0.4rem;
        display: inline-block;
        background-color: rgb(184,28,34);
        font-size: 0.18rem;
        color: white;
        text-align: center;
        line-height: 0.4rem;
        margin-top: 0.2rem;
    }
</style>