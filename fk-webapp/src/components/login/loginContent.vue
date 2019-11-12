<template>
    <div class="login-box">
        <div class="login-box1">
            <span @click="flag1" :class="flag==true?'login-box1-span1':''">普通登录</span>
            <span @click="flag2" :class="flag==false?'login-box1-span2':''">快速登录</span>
        </div>
        <div v-if="flag" class="login-pt-box">
            <input type="text" placeholder="点击输入手机号/Email" class="login-pt-box-t1" v-model="phone">
            <input type="password" placeholder="请输入密码" class="login-pt-box-pwd">
            <br>
            <a href="#" class="login-pt-box-a" @click.prevent="login">登  录</a>
            <br>
            <router-link to="register" class="login-pt-box-r1">免费注册  ></router-link>
            <router-link to="findpwd" class="login-pt-box-r2">手机账号取回密码  ></router-link>
            <div class="login-qt-box">
                <p class="login-qt-box-p">使用其他账号登录</p>
                <a href="#"><span class="login-qt-box-z"></span></a>
                <a href="#"><span class="login-qt-box-w"></span></a>
                <a href="#"><span class="login-qt-box-m"></span></a>
                <a href="#"><span class="login-qt-box-q"></span></a>
            </div>
        </div>
        <div v-else class="login-ks-box">
            <input type="text" placeholder="请输入您的手机号" class="login-ks-box-t1" >
            <input type="password" placeholder="请输入手机登录密码" class="login-ks-box-pwd">
            <br>
            <a href="#" class="login-ks-box-a" >登  录</a>
            <br>
            <router-link href="register" class="login-ks-box-r1">免费注册  ></router-link>
            <router-link to="findpwd" class="login-ks-box-r2">手机账号取回密码  ></router-link>
            <div class="login-qt-box">
                <p class="login-qt-box-p">使用其他账号登录</p>
                <a href="#"><span class="login-qt-box-z"></span></a>
                <a href="#"><span class="login-qt-box-w"></span></a>
                <a href="#"><span class="login-qt-box-m"></span></a>
                <a href="#"><span class="login-qt-box-q"></span></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "loginContent",
        data(){
            return {
                phone:"",
                flag:true

            }
        },
        methods:{
            flag1(){
                this.flag=true
            },
            flag2(){
                this.flag=false
            },
            login(){
                if(this.phone){
                    let reg = /^1[35789]\d{9}$/
                    if(reg.test(this.phone)){
                        localStorage.setItem("token",this.phone)
                        this.$router.push('/main/my')
                }else{
                        alert("请输入正确手机号")
                    }

                }

            }
        }
    }
</script>

<style scoped>
    .login-box{
        width: 3.75rem;
        font-size: 0.12rem;
    }
    .login-box1{
        font-size: 0.14rem;
        display: flex;
        justify-content: space-around;
    }
    .login-box1 span{
        width: 40%;
        height: 0.4rem;
        display: inline-block;
        background-color: white;
        text-align: center;
        line-height: 0.4rem;
        color: black;
    }
    .login-box1-span1{
        border-bottom: 0.02rem solid red;
    }
    .login-box1-span2{
        border-bottom: 0.02rem solid red;
    }
    .login-pt-box{
        text-align: center;
        position: relative;
    }
    .login-pt-box-t1{
        width: 77%;
        height: 0.26rem;
        margin-top: 0.5rem;
    }
    .login-pt-box-pwd{
        width: 77%;
        height: 0.26rem;
        margin-top: 0.48rem;
    }
    .login-pt-box-a{
        width: 78.6%;
        height: 0.36rem;
        display: inline-block;
        background-color: rgb(184,27,34);
        line-height: 0.36rem;
        color: white;
        font-size: 0.18rem;
        margin-top: 0.4rem;
        margin-bottom: 0.1rem;
    }
    .login-pt-box-r1{
        color: black;
        font-size: 0.1rem;
        position: absolute;
        left: 0.4rem;
    }
    .login-pt-box-r2{
        color: black;
        font-size: 0.1rem;
        position: absolute;
        right: 0.4rem;
    }
    .login-qt-box{
        width: 2.9rem;
        height: 0.5rem;
        background-color: white;
        margin-top: 0.5rem;
        margin-left: 0.4rem;
        position: relative;
    }
    .login-qt-box-p{
        font-size: 0.1rem;
        position: absolute;
        left: 0rem;
    }
    .login-qt-box-z{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-color: white;
        background-image: url("../../assets/images/loginlogs.png");
        background-size: 1.4rem 0.2rem;
        background-repeat: no-repeat;
        background-position:0.01rem 0rem;
        position: absolute;
        left: 0rem;
        top: 0.2rem;
    }
    .login-qt-box-w{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-color: white;
        background-image: url("../../assets/images/loginlogs.png");
        background-size: 1.4rem 0.2rem;
        background-repeat: no-repeat;
        background-position:-0.38rem 0rem;
        position: absolute;
        left: 0.4rem;
        top: 0.2rem;
    }
    .login-qt-box-m{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-color: white;
        background-image: url("../../assets/images/loginlogs.png");
        background-size: 1.4rem 0.2rem;
        background-repeat: no-repeat;
        background-position:-0.82rem 0rem;
        position: absolute;
        left: 0.8rem;
        top: 0.2rem;
    }
    .login-qt-box-q{
        width: 0.2rem;
        height: 0.2rem;
        display: inline-block;
        background-color: white;
        background-image: url("../../assets/images/loginlogs.png");
        background-size: 1.4rem 0.2rem;
        background-repeat: no-repeat;
        background-position:-1.22rem 0rem;
        position: absolute;
        left: 1.2rem;
        top: 0.2rem;
    }






    .login-ks-box{
        text-align: center;
        position: relative;
    }
    .login-ks-box-t1{
        width: 60%;
        height: 0.26rem;
        margin-top: 0.2rem;
    }
    .login-ks-box-pwd{
        width: 60%;
        height: 0.26rem;
        margin-top: 0.3rem;
    }
    .login-ks-box-a{
        width: 78.6%;
        height: 0.36rem;
        display: inline-block;
        background-color: rgb(184,27,34);
        line-height: 0.36rem;
        color: white;
        font-size: 0.18rem;
        margin-top: 0.4rem;
        margin-bottom: 0.1rem;
    }
    .login-ks-box-r1{
        color: black;
        font-size: 0.1rem;
        position: absolute;
        left: 0.4rem;
    }
    .login-ks-box-r2{
        color: black;
        font-size: 0.1rem;
        position: absolute;
        right: 0.4rem;
    }
    .login-ks-box{
        width: 2.9rem;
        height: 0.5rem;
        background-color: white;
        margin-top: 0.5rem;
        margin-left: 0.4rem;
        position: relative;
    }
</style>