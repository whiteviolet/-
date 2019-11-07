var http=require("http");
var queryString=require("querystring");
var server=http.createServer(function(req,res){
    var data="";
    req.on("data",function(_data){
        data+=_data;

    });
    req.on("end",function(){
        var obj;
        if(req.method=="GET"){
            obj=queryString.parse(req.url.split("?")[1]);
        }else if(req.method=="POST"){
            obj=JSON.parse(data)
        }
        res.writeHeader(200,{
            "Access-Control-Allow-Origin":"*",
            "content-type":"text/html;charset=utf-8"
        });
        res.write(obj.user+":"+obj.age);
        res.end();
    })
});
server.listen(4009,"10.9.25.226",function(){
    console.log("服务已开启");
});



