<template>
   <div class="classify-bg">
      <classify-header></classify-header>
         <classify-nav ></classify-nav>

   </div>
</template>

<script>
   import classifyHeader from "../../components/classifyModel/classifyHeader";
   import classifyNav from "../../components/classifyModel/classifyNav";

    export default {
        name: "classify",
       components:{
          classifyHeader,
          classifyNav,

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