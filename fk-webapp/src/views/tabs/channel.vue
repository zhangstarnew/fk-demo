<template>
<div>
    <channel-header></channel-header>
    <channel-content></channel-content>
</div>
</template>

<script>
    import channelHeader from "../../components/channelModel/channelHeader";
    import channelContent from "../../components/channelModel/channelContent";
    export default {
        name: "channel",
        components:{
            channelHeader,
            channelContent

        }
    }
</script>

<style scoped>

</style>