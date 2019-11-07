module.exports={
    publicPath:"/",//配置根目录
    outputDir:"dist",
    assetsDir:"assets",
    lintOnSave:false, //false不开启，有效值：true || false
    devServer:{
        open:true, //是否启动打开浏览器
        host:"0.0.0.0",//主机，0.0.0.0支持局域网地址，可以用真机测试
        port:8080, //端口
        https:false,//是否启动https
        //配置跨域代理
        proxy:{
            "/api":{
                target:"http://vueshop.glbuys.com/api",
                changeOrigin:true,
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }

}