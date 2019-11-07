var http=require("http");
var queryString=require("querystring");
var server=http.createServer(function(req,res){
    req.on("data",function(_data){
    });
    req.on("end",function(){
        var obj=queryString.parse(req.url.split("?")[1]);
        // console.log(obj)
        res.writeHeader(200,{
            "Access-Control-Allow-Origin":"*",
            "content-type":"text/html;charset=utf-8"
        });
        res.write(obj.user+":"+obj.age);
        res.end();
    })
});
server.listen(4005,"10.9.25.226",function(){
    console.log("开启服务");
})





















