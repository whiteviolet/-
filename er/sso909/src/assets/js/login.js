$(function () {
    var ws=new WebSocket("ws://www.17xc.net:6789");
    //长连接  用户体验  对方上线 不需要刷新就被迫下线
    var username=$("#username");//少获取  给变量
    var password=$("#password");
    $("#login-btn").on("click",function () {
        if(/^\s*$/.test(username.val())){
            alert("请输入正确用户名");
             username.focus();
            return;
        }
        if(/^\s*$/.test(password.val())){
            alert("请输入正确密码");
            username.focus();
            return;
        }
        $.post("https://vueshop.glbuys.com/api/home/user/pwdlogin?token=1ec949a15fb709370f",{cellphone:username.val(),password:password.val()},function(res){
           var res=JSON.parse(res);
           if(res.code===200){
               //成功登录 就把一些值给本地存储 之后好判断
               localStorage['uid']=res.data.uid;
               localStorage['nickname']=res.data.nickname;
               localStorage['token']=res.data.auth_token;
               localStorage['isLogin']=true;
               //WebSocket 发送
               ws.send("contype=7&key=all");
               //转页面
               window.location.href="./index.html"

           }else{
               alert(res.data);
           }

        })

    })

})