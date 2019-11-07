//引入express
var express=require("express");


//实例化express
var app=new express();
var server=require("http").createServer(app);
//创建socket
var io=require("socket.io")(server);

//连接
io.on("connection",function (socket) {
    socket.on("disconnect",function (data) {
        console.log("客户端用户断开："+data)
        });
    socket.on("all",function (data) {
        io.emit("message",data)
    });
})

server.listen("3355","localhost",function() {
    console.log("ws://localhost:3355")
})



