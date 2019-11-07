<template>
    <div class="myContent-box">
        <ul class="myContent-ul">
            <li><a href="#"><span class="myContent-ul-span1"></span><br><span class="myContent-ul-wz">充值返现</span><br><span class="myContent-ul-wz-t">充100返100</span></a></li>
            <li><a href="#"><span class="myContent-ul-span2"></span><br><span class="myContent-ul-wz">我的私人定制</span></a></li>
            <li><a href="#"><span class="myContent-ul-span3"></span><br><span class="myContent-ul-wz">物流查询</span></a></li>
            <li><a href="#"><span class="myContent-ul-span4"></span><br><span class="myContent-ul-wz">退换货记录</span></a></li>
            <li><a href="#"><span class="myContent-ul-span5"></span><br><span class="myContent-ul-wz">地址管理</span></a></li>
            <li><a href="#"><span class="myContent-ul-span6"></span><br><span class="myContent-ul-wz">我的礼品卡</span></a></li>
            <li><a href="#"><span class="myContent-ul-span7"></span><br><span class="myContent-ul-wz">我的优惠劵</span></a></li>
            <li><a href="#"><span class="myContent-ul-span8"></span><br><span class="myContent-ul-wz">我的积分</span></a></li>
            <li><a href="#"><span class="myContent-ul-span9"></span><br><span class="myContent-ul-wz">我的评论</span></a></li>
            <li><a href="#"><span class="myContent-ul-span10"></span><br><span class="myContent-ul-wz">我的提问</span></a></li>
            <li><a href="#"><span class="myContent-ul-span11"></span><br><span class="myContent-ul-wz">投诉建议</span></a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "myContent"
    }
</script>

<style scoped>
    .myContent-box{
        width: 3.75rem;
        height: 2.53rem;
        margin-top: 0.1rem;
    }
    .myContent-ul{
        width: 3.75rem;
        height: 2.53rem;
        margin-top: 0.1rem;
        display: flex;
        flex-wrap: wrap;
        background-color: white;
    }
    .myContent-ul>li{
        width: 25%;
        height: 0.83rem;
        text-align: center;
        padding-top: 0.16rem;
        box-sizing: border-box;
    }
    .myContent-ul-span1{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span2{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -34px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span3{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -396px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span4{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -428px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span5{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -132px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span6{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -66px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span7{
          width: 0.33rem;
          height: 0.33rem;
          display: inline-block;
          background-image: url("../../assets/images/uc-section-icon.png");
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: 0px -100px;
          margin-bottom: 0.01rem;
      }
    .myContent-ul-span8{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -231px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span9{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -165px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span10{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -198px;
        margin-bottom: 0.01rem;
    }
    .myContent-ul-span11{
        width: 0.33rem;
        height: 0.33rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-section-icon.png");
        background-repeat: no-repeat;
        background-size: 100%;
        background-position: 0px -264px;
        margin-bottom: 0.01rem;
    }

    .myContent-ul-wz{
        font-size: 0.12rem;
        color: #000;
    }
    .myContent-ul-wz-t{
        font-size: 0.08rem;
        color: red;
    }
</style>