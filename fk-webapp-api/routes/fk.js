const express = require("express");
const router = express.Router();
//引入module下面js文件
const shopsModel = require("../module/model01");
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
    res.json(shopsModel.getdata())
    //{orders:orderarr}  绑定到order.ejs模板上
})


module.exports = router;
