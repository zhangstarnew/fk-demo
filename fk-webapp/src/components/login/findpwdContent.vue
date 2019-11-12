<template>
    <div class="findpwdContent-box">
        <input type="text" placeholder="请输入验证码" class="findpwdContent-box-t1">
        <br>
        <input type="text" placeholder="请输入您的手机号" class="findpwdContent-box-t2"><a href="#" class="findpwdContent-box-a1">获取验证码</a>
        <br>
        <input type="text" placeholder="请输入短信验证码" class="findpwdContent-box-t3">
        <br>
        <input type="password" placeholder="新密码:6-16位字母,数字，特殊符号" class="findpwdContent-box-pwd1">
        <br>
        <input type="password" placeholder="再次输入新密码" class="findpwdContent-box-pwd2">
        <br>
        <a href="#" class="findpwdContent-box-a2">提交</a>
    </div>
</template>

<script>
    export default {
        name: "findpwdContent"
    }
</script>

<style scoped>
    .findpwdContent-box{
        width: 3.75rem;
        height: 4rem;
        background-color: white;
        position: relative;
        padding-left: 0.2rem;
        box-sizing: border-box;
    }
    .findpwdContent-box-t1{
        width: 2.2rem;
        height: 0.3rem;
        margin-top: 0.2rem;
        border: none;
        outline: none;
        border-bottom: 0.01rem solid gray;
    }
    .findpwdContent-box-t2{
        width: 2.2rem;
        height: 0.3rem;
        margin-top: 0.2rem;
        border: none;
        outline: none;
        border-bottom: 0.01rem solid gray;
    }
    .findpwdContent-box-t3{
        width: 3rem;
        height: 0.3rem;
        margin-top: 0.2rem;
        border: none;
        outline: none;
        border-bottom: 0.01rem solid gray;
    }
    .findpwdContent-box-pwd1{
        width: 3rem;
        height: 0.3rem;
        margin-top: 0.2rem;
        border: none;
        outline: none;
        border-bottom: 0.01rem solid gray;
    }
    .findpwdContent-box-pwd2{
        width: 3rem;
        height: 0.3rem;
        margin-top: 0.2rem;
        border: none;
        outline: none;
        border-bottom: 0.01rem solid gray;
    }
    .findpwdContent-box-a2{
        width: 3.4rem;
        height: 0.5rem;
        display: inline-block;
        background-color:rgb(184,28,34);
        font-size: 0.18rem;
        color: white;
        text-align: center;
        line-height: 0.5rem;
        margin-top: 0.2rem;
        border-radius: 0.06rem;
    }
    .findpwdContent-box-a1{
        width: 1rem;
        height: 0.4rem;
        display: inline-block;
        background-color: white;
        position: absolute;
        top: 0.74rem;
        right: 0.2rem;
        font-size: 0.14rem;
        text-align: center;
        line-height: 0.4rem;
        color: red;
        border: 0.02rem solid gray;
    }
</style>