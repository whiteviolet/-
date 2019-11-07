<?php
    header("content-type:text/html;charset=utf-8");
    // echo "你好";
    
    $url="localhost";
    $user="root";
    $password="root";
    $database="game";
    $port="3306";
    init();
    function init(){
        $sql=openDataBase();
        if(!$sql){
            echo "数据库打开失败";
            return;
        }
        loginHandler($sql);



    }
    // 打开数据库
    function openDataBase(){
        global $url,$user,$password,$database,$port;
        $sql=mysqli_connect($url,$user,$password,$database,$port);
        // print_r ($sql);
        if(mysqli_connect_error()){
            return false;
        }
        return $sql;

    }
    function loginHandler($sql){
        $res=mysqli_query($sql,"select * from `user` where `user`='$_POST[user]'");
        // print_r($res);
        if($res->num_rows==0){
            echo "<script>
                alert('你的用户名不对，zz');
                history.back();

            </script>";
            return;
        }
        $arr=mysqli_fetch_assoc($res);
        //  print_r($arr);
        if($arr['password']!=$_POST['password']){
            echo "<script>
            alert('密码不对，zz')
            </script>";
            return;
        }
        createTable($sql);
        
    }
    function createTable($sql){
        $res=mysqli_query($sql,"select * from `user` where `sex`='男'");
        echo "<table>";
        for($i=0;$i<$res->num_rows;$i++){
            $obj=mysqli_fetch_assoc($res);
            if($i==0){
            echo "<tr>";
            foreach($obj as $key=>$value){
                echo "<th>{$key}</th>";

            }
            echo "</tr>";
            }
            echo "<tr>";
            foreach($obj as $name=>$value){
                echo "<td>{$value}</td>";
                
            }
            echo "<tr>";

        }

        echo "</table>";


    }
