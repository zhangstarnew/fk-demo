<template>
    <div>
        <my-header></my-header>
        <my-top></my-top>
    </div>
</template>

<script>
    import myHeader from "../../components/myModel/myHeader";
    import myTop from "../../components/myModel/myTop";
    export default {
        name: "my",
        components:{
            myHeader,
            myTop
        }
    }
</script>

<style scoped>

</style>