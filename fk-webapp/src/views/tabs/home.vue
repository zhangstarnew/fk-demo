<template>
   <div>
      <header-one></header-one>
      <banner :data="data"></banner>
      <home-nav></home-nav>
      <home-product></home-product>
      <home-seckill></home-seckill>

   </div>

</template>

<script>
    import headerOne from "../../components/homeModel/headerOne";
    import banner from "../../components/homeModel/banner";
    import homeNav from "../../components/homeModel/homeNav";
    import homeProduct from "../../components/homeModel/homeProduct";
   import homeSeckill from "../../components/homeModel/homeSeckill";
   import api from "../../apis/api";
    export default {
        name: "home",
        components:{
           headerOne,
           banner,
           homeNav,
           homeProduct,
           homeSeckill


        },
       methods:{
          async _initHomeData() {
             let data = await api.getHomeData()
             //console.log(data);
             this.data=data
          },
       },
       beforeMount () {
          this._initHomeData()
       },
       data(){
          return{
             data:[]
          }
       }
    }
</script>

<style scoped>

</style>