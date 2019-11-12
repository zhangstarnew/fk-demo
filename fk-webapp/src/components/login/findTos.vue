<template>
   <div>
       <vheader :data="data.vheader.name9" v-if="data.vheader"></vheader>
       <find-tos-content></find-tos-content>
   </div>
</template>

<script>
    import vheader from "../vheader";
    import findTosContent from "./findTosContent";
    import api from "../../apis/api";
    export default {
        name: "findTos",
        components:{
            findTosContent,
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