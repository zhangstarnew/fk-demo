<template>
    <div class="my-bg">
        <vheader :data="data.vheader.name4" v-if="data.vheader"></vheader>
        <my-top></my-top>
        <my-matter></my-matter>
        <my-content></my-content>
    </div>
</template>

<script>
    import vheader from "../../components/vheader";
    import myTop from "../../components/myModel/myTop";
    import myMatter from "../../components/myModel/myMatter";
    import myContent from "../../components/myModel/myContent";
    import api from "../../apis/api";
    export default {
        name: "my",
        components:{
            myTop,
            myMatter,
            myContent,
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
.my-bg{
    background-color:rgb(240,239,245);
    /*overflow: auto;*/
}
</style>