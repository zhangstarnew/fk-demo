<template>
    <div>
        <vheader :data="data.vheader.name5" v-if="data.vheader"></vheader>
        <goodstop></goodstop>
        <goods-content :data="data"></goods-content>
        <vfooter></vfooter>
    </div>
</template>

<script>
    import goodstop from "./goodstop";
    import goodsContent from "./goodsContent";
    import vfooter from "../footer";
    import vheader from "../vheader";
    import api from "../../apis/api";
    export default {
        name: "goods",
        components:{
            goodstop,
            goodsContent,
            vfooter,
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

</style>