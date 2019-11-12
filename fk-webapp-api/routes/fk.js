const express = require("express");
const router = express.Router();
//引入module下面js文件
const homeModel = require("../module/model01");
const classifyModel = require("../module/model02");
const channelModel = require("../module/model03");
const goodsModel = require("../module/goodscontent");

//允许跨域设置

router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Methods","PUT,GET,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers","X-Requested-With");
    res.header("Access-Control-Allow-Headers","Content-Type");
    if(req.method=="OPTIONS")  res.send(200); /*让option请求快速返回*/
    else next();
});

//配置路由
router.get("/",(req,res)=>{
    res.json(homeModel.getdata())
    //{orders:orderarr}  绑定到order.ejs模板上
});
router.get("/classify",(req,res)=>{
    res.json(classifyModel.getdata())
});
router.get("/channel",(req,res)=>{
    res.json(channelModel.getdata())
});
router.get("/goods",(req,res)=>{
    res.json(goodsModel.getdata())
});

router.get("/carts",(req,res)=>{
    res.json(goodsModel.getdata())
});
router.get("/my",(req,res)=>{
    res.json(goodsModel.getdata())
});

module.exports = router;
