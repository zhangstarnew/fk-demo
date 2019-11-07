<template>
    <div>

        <router-view></router-view>
        <vfooter></vfooter>

    </div>
</template>

<script>

    import vfooter from "../components/footer"
    export default {
        name: "Vmain",
        components:{
           vfooter
        }
    }
</script>

<style scoped>

</style>