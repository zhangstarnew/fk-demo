<template>
    <div>
    <div v-if="msg">
        <vheader :data="data.vheader.name3" v-if="data.vheader"></vheader>
        <carts-content></carts-content>
        <carts-bottom></carts-bottom>
    </div>
    <div v-else>
        <login></login>
    </div>
    </div>
</template>

<script>
    import vheader from "../../components/vheader";
    import cartsContent from "../../components/cartsModel/cartsContent";
    import cartsBottom from "../../components/cartsModel/cartsBottom";
    import login from "../../components/login/login";
    import api from "../../apis/api";
    export default {
        name: "carts",
        components:{
            cartsContent,
            cartsBottom,
            login,
            vheader
        },
        methods:{
            async _initGoodsData() {
                let data = await api.getgoodsData()
                this.data=data
            }
        },
        beforeMount () {
            this._initGoodsData()
        },
        data(){
            return {
                msg:localStorage.getItem("token"),
                data:[]
            }
        },
    }
</script>

<style scoped>

</style>