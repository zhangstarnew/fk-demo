<template>
    <div class="my-bg">
        <my-header></my-header>
        <my-top></my-top>
        <my-matter></my-matter>
        <my-content></my-content>
    </div>
</template>

<script>
    import myHeader from "../../components/myModel/myHeader";
    import myTop from "../../components/myModel/myTop";
    import myMatter from "../../components/myModel/myMatter";
    import myContent from "../../components/myModel/myContent";
    export default {
        name: "my",
        components:{
            myHeader,
            myTop,
            myMatter,
            myContent
        }
    }
</script>

<style scoped>
.my-bg{
    background-color:rgb(240,239,245);
    /*overflow: auto;*/
}
</style>