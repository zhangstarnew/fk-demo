<template>
<div>
    <vheader :data="data.vheader.name6" v-if="data.vheader"></vheader>
    <login-content></login-content>
</div>
</template>

<script>
    import vheader from "../vheader";
    import loginContent from "./loginContent";
    import api from "../../apis/api";
    export default {
        name: "login",
        components:{
            loginContent,
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
            return{
                data:[]
            }
        }

    }
</script>

<style scoped>



</style>