export default {
    async getHomeData(){
        let res = await fetch('http://106.13.229.84:3000/fk')
        let data = await res.json()
        return data
    },
    async getclassifyData(){
        let res = await fetch('http://106.13.229.84:3000/fk/classify')
        let data = await res.json()
        return data
    },
    async getchannelData(){
        let res = await fetch('http://106.13.229.84:3000/fk/channel')
        let data = await res.json()
        return data
    },
    async getgoodsData(){
        let res = await fetch('http://106.13.229.84:3000/fk/goods')
        let data = await res.json()
        return data
    }

}