<?php
    header("content-type:text/html;charset=utf-8");
    // echo "你好";
    $a=10;
    echo $a;
    echo "<br>";
    $arr=[1,2,3,4,5] ;
    print_r( $arr);
    array_push($arr,6);
    echo "<br>";
    print_r( $arr);
    echo "<br>";
    $arr1=array("a"=>1,"b"=>"liu");
    print_r( $arr1);
    echo "<br>";
    function fn(){
        
        // global $a;
        $a=6;
        echo $a+$GLOBALS["a"];
        
    }
    fn();
    echo "<br>";
    var_dump($a);
    echo "<br>";
    var_dump($arr);
    echo "<br>";
    var_dump($arr1);
    echo "<br>";
    echo $arr[0];
    echo "<br>";
    echo $arr1["b"];
    echo "<br>";
    for($i=0;$i<count($arr1);$i++){
        echo $i;
    }
    echo "<br>";
    foreach ($arr1 as $key =>$value) {
        // echo $key,$value;
        echo $key.":".$value;
        echo "{$key}=>{$value}";
        echo "<br>";

    }
    echo "<br>";
    $sjs= mt_rand(50,100);
    echo $sjs;

