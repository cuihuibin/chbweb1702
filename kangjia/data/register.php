<?php
header("content-type:application/json;charset=utf-8");
 @$name = $_REQUEST['name'] or die('{"code":-2,"msg":"用户名是必须的！"}');
 @$email = $_REQUEST['email'] or die('{"code":-3,"msg":"邮箱是必须的！"}');
 @$upwd = $_REQUEST['upwd'] or die('{"code":-4,"msg":"密码是必须的！"}');
 //1:创建连接
 //2:设置编码
 require("init.php");
 //3:创建sql 发送sql
 $sql = "INSERT INTO t_user VALUES(null,'$name','$email','$upwd',now(),0)";
 $result = mysqli_query($conn,$sql);
if($result){
    echo '{"code":1}';
  }else{
    echo '{"code":-1,"msg":"注册失败，请重新注册！"}';
    }
?>