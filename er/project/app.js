


//引入express
var express=require("express");
//ejs 模板引擎
var ejs=require("ejs");
//引入post接收参数方式  也是第三方中间件
var bodyParser=require("body-parser");
var userModel=require("./models/user.js");
var multiparty=require("multiparty");
var session=require("express-session");
var md=require("md5-node");
var jwt=require("jsonwebtoken")



//实例化
var app=new express();


//3、配置session
//配置中间件  固定格式
app.use(session({
    secret: '1q2w3e4r',//secret是必需的选项，这是用于签名会话ID cookie的密钥，自己随便写。
    resave: false,//resave是指每次请求都重新设置session cookie，如果为false：假设你的cookie是10分钟过期，每次请求都会再设置10分钟
    saveUninitialized: true,//saveUninitialized是指无论有没有session cookie，每次请求都设置个session cookie
    cookie: {
        maxAge:1000*60*30//单位为毫秒，30分钟过期
    },
    rolling:true//强制在每一个response中都发送session标识符的cookie。
}));


//设置中间件
//支持request 中 body的 urlencoded字符，extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
app.use(bodyParser.urlencoded({ extended: false }))
//返回一个只解析json的中间件
app.use(bodyParser.json())
//最后用req.body 获取数据






//路由


//设置view层目录
app.set("views",__dirname+"/pages");
//配置ejs模板扩展名
app.engine("ejs",ejs.__express);
//配置ejs模板引擎
app.set("view engine","ejs");
//应用级中间件
app.use(function (req,res,next) {
    req.app.locals['username']=req.session.username;
    // console.log(req.session.username)

    var search=req._parsedUrl.search?req._parsedUrl.search:"";//req.url 不严谨 所以用这个 后面跟着search
    if(req.url=="/ucenter"+search || req.url=="/show"+search){
        userModel.find({_id:req.session.uid,token:req.session.token},function(err,data){
            if(!err && data && data.length>0){
                jwt.verify(req.session.token,"123",function (err,sign) {
                    // console.log(err,sign)
                    if(!err && Boolean(req.session.isLogin)){
                        next();
                    }else{
                        res.redirect("/login")
                    }


                })
            }else{
                res.redirect("/login")
            }
        })
        //验证

        // if(Boolean(req.session.isLogin)){
        //     next();
        // }else{
        //     res.redirect("/login")
        // }
    }else{
        next();
    }


});

//配置静态资源
app.use("/",express.static("static"));
//配置文件上传的静态资源
app.use("/uploadfiles",express.static("uploadfiles"))

//首页
app.get("/",function (req,res) {
    // res.send("首页");

    res.render("index/index")

});
//新闻

app.get("/news",function(req,res){
    var data=[
        {id:1,title:"陈建州维护范玮琪"},
        {id:2,title:"沈月恋情疑似曝光"},
        {id:3,title:"进京快递安检升级"},
        {id:4,title:"新闻新闻2"}
    ];

    res.render("news/news",{news:data})
});

//新闻详情
app.get("/news/details",function (req,res) {

    var id=req.query.id;
    // console.log(id)
    var title=req.query.title;
    res.render("news/details",{newsId:id,title:title})

})



//登录
app.get("/login",function(req,res){
    res.render("login/index")
})
//接收到会员登录的数据
app.post("/dologin",function(req,res){
    // console.log(req);
    var user=req.body.user;
    var password=req.body.password;
    // console.log(user)
    userModel.find({username:user,password:md(password)},function (err,data) {
        // console.log(err,data)
        if(!err && data && data.length>0  && user==data[0].username && data[0].password==md(password)){
            var payload={
                "iss":"demo",
                "username":user,
                "randStr":new Date().getTime().toString()
            }
        var token=jwt.sign(payload,"123",{"expiresIn":30} )
            // console.log(token)
            req.session.token=token;
            req.session.uid=data[0]._id;
            req.session.username=data[0].username;
            req.session.isLogin=true;
            userModel.updateOne ({_id:data[0]._id},{token:token},function () {})
            res.redirect("/")
        }else{
            res.send("登录失败")

        }
        
    })
    // res.send("用户名"+user+";"+"密码"+password)
})

//会员注册
app.get("/reg",function (req,res) {
    res.render("reg/reg")

})
//接收会员注册数据
app.post("/reg/save",function (req,res) {
    //实例化multiparty
    var form=new multiparty.Form();
    form.uploadDir="uploadfiles";
    form.parse(req,function (err,fields,files){
        console.log(files)

    var username=fields.username[0];
    var password=fields.password[0];
    var name=fields.name[0];
    var age=fields.age[0];
    var image=files.image[0].path;
    if(!username){
        res.send("请输入用户名");
    }else if(!password){
        res.send("请输入密码");
    }else if(!name){
        res.send("请输入名字");
    }else if(!age){
        res.send("请输入年龄");
    };
    var um=new userModel({
        username:username,
        password:md(password),
        name:name,
        age:age,
        image:image
    });
    um.save(function (err,data) {
        // console.log(err,data)
        if(!err){
            // console.log(11)
            // res.render("login/index")
            res.redirect("/login");
        }else{
            res.send("注册失败");
        }


    })

})
})

//查看会员信息
app.get("/show",function (req,res) {
    console.log(req)
    var  wd=req.query.wd?req.query.wd:"";
    console.log(wd)
    var regx="/"+wd+"/";
    findData={};
    if(wd){
        findData={$or:[{username:eval(regx)},{name:eval(regx)}]}
    }

    userModel.find(findData,{},function (err,data) {
        if(!err){
            var total=data.length;//数据总长度
                var pageSize=3;//显示几条数据
                var pageNum=Math.ceil(total/pageSize);//页数
                var page=req.query.page?req.query.page:1; //当先页数
                // req.session.num=page
                userModel.find(findData,function (err,data2) {
                    if(!err){
                        res.render("show/index",{user:data2,pageNum:pageNum,page:page,wd:wd})
                    }else{
                        res.send("数据连接失败0")
                    }
                }).skip((page-1)*pageSize).limit(pageSize)
            }else{
                res.send("数据连接失败")
            }

        // }).skip((page-1)*pageSize).limit(pageSize)
        // console.log(data)

    })


})

//删除会员
app.get("/show/del",function (req,res) {
    uid=req.query.uid;
    userModel.deleteOne({_id:uid},function (err,data) {
        if(!err){
            res.redirect("/show?page="+req.session.num)
        }else{
            res.send("删除失败")
        }

    })


})

//修改数据页面
app.get("/show/edit",function (req,res) {
   var uid=req.query.uid;

    if(uid){
        userModel.find({_id:uid},function (err,data) {

                res.render("show/edit",{data:data})

        })
    }else {
    res.send("读取失败")
}


})
//修改数据之后
app.post("/show/edit/save",function (req,res) {
    // var uid=req.body.uid;
    // console.log(uid)
    var form=new multiparty.Form();
    form.uploadDir="uploadfiles";
    form.parse(req,function (err,fields,files) {
        // console.log(files)
        var uid=fields.uid[0];


    if(uid){
    var username=fields.username[0];
    var password=fields.password[0];
    var name=fields.name[0];
    var age=fields.age[0];
    var image=files.image[0].path

    if(!username){
        res.send("请输入用户名");
    }else if(!password){
        res.send("请输入密码");
    }else if(!name){
        res.send("请输入名字");
    }else if(!age){
        res.send("请输入年龄");
    };
    userModel.updateOne({_id:uid},{username:username,password:md(password),name:name,age:age,image:image},function (err,data) {
        if(!err){
            res.redirect("/show")
        }else{
            res.send("修改失败")
        }

    })
}else{
        res.send("修改失败1")
    }

})
})



//会员中心
app.get("/ucenter",function (req,res){
    res.render("ucenter/index")

});
//安全退出
app.get("/outlogin",function (req,res) {
    req.session.uid="";
    req.session.username="";
    req.session.isLogin="";
    req.session.token="";
    res.redirect("/")

})

//错误处理中间件
app.use(function (req,res,next) {
    res.status(404).render("404")

})


var host="localhost";
var port=8000;
console.log("http://"+host+":"+port);
app.listen(port,host);
