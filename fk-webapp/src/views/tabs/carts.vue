<template>
    <div>
        <carts-header></carts-header>
        <carts-content></carts-content>
        <carts-bottom></carts-bottom>
    </div>

</template>

<script>
    import cartsHeader from "../../components/cartsModel/cartsHeader";
    import cartsContent from "../../components/cartsModel/cartsContent";
    import cartsBottom from "../../components/cartsModel/cartsBottom";
    export default {
        name: "carts",
        components:{
            cartsHeader,
            cartsContent,
            cartsBottom

        }
    }
</script>

<style scoped>

</style>