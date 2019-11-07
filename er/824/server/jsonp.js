var http=require("http");
var queryString=require("querystring");
var server=http.createServer(function(req,res){

    req.on("data",function(_data){


    });
    req.on("end",function(){
        var obj;
        if(req.method=="GET"){
            obj=queryString.parse(req.url.split("?")[1]);
        }else if(req.method=="POST"){
            obj=JSON.parse(data)
        }
        res.writeHeader(200,{
            // "Access-Control-Allow-Origin":"*",
            "content-type":"text/html;charset=utf-8"
        });
        res.write(obj.cd+"("+obj.a+","+obj.b+")");
        res.end();
    })
});
server.listen(4008,"10.9.25.226",function(){
    console.log("服务已开启");
});



