var http=require("http");

var server=http.createServer(function(req,res){
var data="";
    req.on("data",function(_data){
        data+=_data;
    });
    req.on("end",function(){
        var obj=JSON.parse(data);
        // console.log(obj)
        res.writeHeader(200,{
            "Access-Control-Allow-Origin":"*",
            "content-type":"text/html;charset=utf-8"
        });
        res.write(obj.user+":"+obj.age);
        res.end();
    })
});
server.listen(4006,"10.9.25.226",function(){
    console.log("开启服务");
})





















