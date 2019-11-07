var http=require("http");
var queryString=require("querystring");
var server=http.createServer(function(req,res){
    req.on("data",function(_data){

    });
    req.on("end",function(){
        console.log(req.url);
        var obj=queryString.parse(req.url.split("?")[1]);
        res.writeHeader(200,{
            "ACCESS-Control-Allow-Origin":"*",
            "content-type":"text/html;charset=utf-8"
        });
        res.write(obj.user);
        res.end();
    })

});
server.listen(4007,"10.9.25.226",function (){
    console.log("开启服务")
})

