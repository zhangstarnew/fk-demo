<template>
   <div>
      <header-one></header-one>
      <banner></banner>
      <home-nav></home-nav>
      <home-product></home-product>
<!--      <home-seckill></home-seckill>-->

   </div>

</template>

<script>
    import headerOne from "../../components/headerOne";
    import banner from "../../components/banner";
    import homeNav from "../../components/homeNav";
    import homeProduct from "../../components/homeProduct";
   // import homeSeckill from "../../components/homeSeckill";
    export default {
        name: "home",
        components:{
           headerOne,
           banner,
           homeNav,
           homeProduct,
         //  homeSeckill


        }
    }
</script>

<style scoped>

</style>