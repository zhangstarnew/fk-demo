<template>
    <div class="v-header">
        <a href="#" @click.prevent="back"><span class="v-header-span1"></span></a>
        <span class="v-header-span2">{{data}}</span>
    </div>
</template>

<script>
    export default {
        name: "vheader",
        props:["data"],
        methods:{
            back(){
                this.$router.go(-1)
            }
        }

    }
</script>

<style scoped>
    .v-header{
        width: 3.75rem;
        height: 0.45rem;
        background-color:rgb(184,28,34);
        position: relative;
    }
    .v-header-span1{
        position: absolute;
        top: 0.22rem;
        left: 0.26rem;
        transform: translateY(-50%) rotate(45deg);
        -webkit-transform: translateY(-50%) rotate(45deg);
        width: 0.16rem;
        height: 0.16rem;
        border-bottom: 0.02rem solid white;
        border-left: 0.02rem solid white;
        cursor: pointer;
    }
    .v-header-span2{
        font-size: 0.18rem;
        color: white;
        position: absolute;
        left: 43%;
        top: 0.08rem;
    }
</style>