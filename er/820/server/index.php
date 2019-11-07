<?php
header("content-type:text/html;charset=utf-8"); //响应头
// echo "你好"; //测试php是否可以正常运行
//变量
$url="localhost";
$port="3306";
$user="root";
$password="root";
$database="game";
init();
function init(){
    $sql=openDatabase();
    if(!$sql){
        echo "数据库打开错误";
        return;
    }
    insertData($sql);
}
function openDatabase(){
    // global 调用全局的变量
    global $url,$port,$user,$password,$database;
    //mysqli_connect打开数据库的方法
    $sql=mysqli_connect($url,$user,$password,$database,$port);
    //mysqli_connect_error打开数据库发生错误
    if(mysqli_connect_error()){
        return false;
        
    }
        return $sql;
   
}
//insertData 插入数据
function insertData($sql){

    // echo "aaa";
    //mysqli_query两个参数 数据库里插入什么0.0
    // $res=mysqli_query($sql,"INSERT INTO 'user'('user','password','name','sex','age','tel','email') VALUES('$_POST[user]','$_POST[password]','$_POST[name]','$_POST[sex]',$_POST[age],'$_POST[tel]','$_POST[email]')");
    //  前面的都是·点
    $res=mysqli_query($sql,"INSERT INTO `user`(`user`, `password`, `name`, `sex`, `age`, `tel`, `email`)VALUES('$_POST[user]','$_POST[password]','$_POST[name]','$_POST[sex]',$_POST[age],'$_POST[tel]','$_POST[email]')");
    // print_r($res);
    if($res){
        echo "添加上了的，宝贝";
        return;
    }
    echo "<script>
    alert ('您请重新输入');
    history.back();
    </script>";
}