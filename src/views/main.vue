<template>
    <div>
        <fk-footer></fk-footer>
        <router-view></router-view>

    </div>
</template>

<script>
    import  footer from "./footer"
    export default {
        name: "Vmain",
        components:{
            fkFooter:footer
        }
    }
</script>

<style scoped>

</style>