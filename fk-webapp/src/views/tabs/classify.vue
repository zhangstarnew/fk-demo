<template>
   <div class="classify-bg">

         <vheader :data="data.vheader.name1" v-if="data.vheader" ></vheader>
         <classify-nav :data="data"></classify-nav>


   </div>
</template>

<script>
   import vheader from "../../components/vheader";
   import classifyNav from "../../components/classifyModel/classifyNav";
    import api from "../../apis/api";
    export default {
        name: "classify",
       components:{
           vheader,
           classifyNav
       },
       methods:{
          async _initclassifyData() {
             let data = await api.getclassifyData()
             this.data=data
          }
       },
       beforeMount () {
          this._initclassifyData()
       },
       data(){
          return{
             data:[]
          }
       }
    }
</script>

<style scoped>
.classify-bg{
   /*width: 3.75rem;*/
   /*height: 6.67rem;*/
   /*background-color: rgb(229,229,229);*/
   /*!*overflow: auto;*!*/
}

</style>