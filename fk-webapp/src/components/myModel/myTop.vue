<template>
    <div class="myTop-box">
        <a href="#" class="myTop-box-a"></a>
    </div>
</template>

<script>
    export default {
        name: "myTop"
    }
</script>

<style scoped>
    .myTop-box{
        width: 3.75rem;
        height: 2rem;
        background-image: url("../../assets/images/uc-topbgd.png");
        background-size: 100%;
        position: relative;
    }
    .myTop-box-a{
        width: 0.25rem;
        height: 0.25rem;
        display: inline-block;
        background-image: url("../../assets/images/uc-order-icon.png");
        background-size: 0.2rem;
        background-repeat: no-repeat;
        background-position: 0.02rem 0.02rem;
        position: absolute;
        right: 0.1rem;
        top: 0.1rem;
    }
</style>