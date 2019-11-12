<template>
<div>
    <vheader :data="data.vheader.name2" v-if="data.vheader"></vheader>

    <channel-content :data="data"></channel-content>
</div>
</template>

<script>
    import vheader from "../../components/vheader";
    import channelContent from "../../components/channelModel/channelContent";
    import api from "../../apis/api";
    export default {
        name: "channel",
        components:{

            channelContent,
            vheader
        },
        methods:{
            async _initchannelData() {
                let data = await api.getchannelData()
                this.data=data
            }
        },
        beforeMount () {
            this._initchannelData()
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