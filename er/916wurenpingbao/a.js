// var http=require("http");
// http.createServer(function(req,res){
//     res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
//     res.write("<div style='color:#FF0000;font-size:20px;'>大家好!</div>")
//     res.end()
// }).listen(8001)

//引入express
var express=require("express");


//实例化
var app=new  express();


//引入   模板引擎
//引入   post 请求接收参数

var ejs=require("ejs");
var bodyParser=require("body-parser");
//设置body模式为x-www-form-urlencoded模式
//当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。为了安全性最好为extended=false
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//设置view层的目录 就是名字不想是view  可以是别的
app.set("views",__dirname+"/pages");

//配置ejs模板引擎  就是原本应该是html  那就西北  东南 是html
app.engine("ejs",ejs.__express);
app.set("view engine","ejs");

//应用级中间件  :
    app.use(function (req,res,next) {//可以匹配任何路由
        next();//继续往下执行
    });

app.get("/",function (req,res) {
    res.send("首页")

});
app.get("/news",function (req,res) {
    res.send("新闻");
});







var host="localhost";
var port=8000;
console.log("http://"+host+":"+port);
app.listen(port,host);





