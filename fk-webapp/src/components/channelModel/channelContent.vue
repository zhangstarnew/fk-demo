<template>
    <div class="channel-box">
        <a href="#" class="channel-a" v-for="(u,index) in channelContent" :key="index"><img class="channel-a-img" :src="u.src" ></a>
    </div>
</template>

<script>
    export default {
        name: "channelContent",
        data(){
            return {
                channelContent:[
                    {
                        src:"./img/channel1.jpg"
                    },
                    {
                        src:"./img/channel2.jpg"
                    },
                    {
                        src:"./img/channel3.jpg"
                    },
                    {
                        src:"./img/channel4.jpg"
                    },
                    {
                        src:"./img/channel5.jpg"
                    },
                    {
                        src:"./img/channel6.jpg"
                    },
                    {
                        src:"./img/channel7.jpg"
                    },
                    {
                        src:"./img/channel8.jpg"
                    },
                    {
                        src:"./img/channel9.jpg"
                    },
                    {
                        src:"./img/channel10.jpg"
                    },
                    {
                        src:"./img/channel11.jpg"
                    },
                    {
                        src:"./img/channel12.jpg"
                    },

                ]
            }
        }
    }
</script>

<style scoped>
    .channel-box{
        padding-bottom: 0.5rem;
    }
    .channel-a{
        width: 3.75rem;
        height: 2.34rem;
    }
    .channel-a-img{
        width: 100%;
    }
</style>