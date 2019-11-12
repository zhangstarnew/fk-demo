<template>
    <div>
        <vheader :data="data.vheader.name7" v-if="data.vheader"></vheader>
        <register-content></register-content>
    </div>
</template>

<script>
    import vheader from "../vheader";
    import registerContent from "./registerContent";
    import api from "../../apis/api";
    export default {
        name: "register",
        components:{
            registerContent,
            vheader
        },
        methods:{
            async _initGoodsData() {
                let data = await api.getgoodsData()
                //console.log(data);
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
    h1{
        font-size: 0.12rem;
    }
</style>