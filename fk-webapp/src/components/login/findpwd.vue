<template>
    <div>
        <vheader :data="data.vheader.name8" v-if="data.vheader"></vheader>
        <findpwd-content></findpwd-content>
    </div>
</template>

<script>
    import vheader from "../vheader";
    import findpwdContent from "./findpwdContent";
    import api from "../../apis/api";
    export default {
        name: "findpwd",
        components:{
            findpwdContent,
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
    h1{
        font-size: 0.12rem;
    }
</style>