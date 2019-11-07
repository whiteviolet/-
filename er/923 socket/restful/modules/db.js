//引入mongoose
var db=require("mongoose");
//连接数据库
//useNewUrlParser:会在url里识别验证用户所需的db,未升级前不需要指定，升级一定要指定。
db.connect("mongodb://localhost:27017/dbdemo",{useNewUrlParser:true,useUnifiedTopology: true});

db.connection.on("error",function(err){
    console.log("数据库连接失败："+err);
});

db.connection.on("open",function(){
   console.log("数据库连接成功");
});

db.connection.on("disconnected",function(){
    console.log("断开数据库");
});
module.exports=db;
