$(function () {
    // WebSocket 写在前面
    var ws=new WebSocket("ws://www.17xc.net:6789");
    //再有别人登陆成功  他就接受到了  所以就强制退出这里面有一个逻辑  看接口
    ws.onmessage=function(res){
        var data=JSON.parse(res.data);
        if(data.contype==="7"){
            safeUser();//退出
        }

    };



    //判断是不是登录也就是本地存储有没有
    if(Boolean(localStorage["isLogin"])==true){

        //登录之后 无其他情况  就正常操作
        safeUser(function(){
            $("#show-nickname").html(localStorage["nickname"])
            //退出按钮
            $("#outlogin-btn").on("click",function(){
                outLogin();
            })
        }) ;

       // 或者用户不登录直接点中心 但是会有一个页面跳转
    }else{
            localStorage.clear();
            window.location.href="./login.html";
    }

});
//这个接口是登陆之后 ....
function safeUser(callback){
    $.post("http://vueshop.glbuys.com/api/home/user/safe?token=1ec949a15fb709370f",{
        uid:localStorage["uid"],auth_token:localStorage["token"]
    },function(res){
        var res=JSON.parse(res);
        if(res.code===200){
            //参数是函数 有就执行
            if(callback){//回调函数
                callback()
            }

        }else{//对比token  没有访问权限自然就退出了
            alert("你的账户强制退出");
            localStorage.clear();

            window.location.href="./login.html";
        }

    });

}
// 安全退出  点击退出之后 告诉服务器  你可以换个token并且回到登录页面
function outLogin(){
    $.post("http://vueshop.glbuys.com/api/home/user/safeout?token=1ec949a15fb709370f",{
        uid:localStorage["uid"]
    },function(res){
        var res=JSON.parse(res);
        if(res.code===200){
            localStorage.clear();
            window.location.href="./login.html"
        }

    });
}