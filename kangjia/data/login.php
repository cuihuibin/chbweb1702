<?php
header("content-type:application/json;charset=utf-8");
@$name=$_REQUEST['name']or die('{"code":-2,"msg":"用户名是必须的！"}');
@$upwd=$_REQUEST['upwd']or die('{"code":-3,"msg":"密码是必须的！"}');

require('init.php');

$sql = "SELECT * FROM t_user WHERE name='$name' AND upwd = '$upwd'";
$result = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($result);
  //5:判断如果用户登录成功自动跳转 
  //user_select.php
  if($row===null){
 	  echo '{"code":-1,"msg":"用户名或密码有误！"}';
  }else{
      //code 1  uid 1  uname qd
  	$uid = $row['uid'];
  	$name = $row['name'];
      //创建关联数组-->json字符串
  	$output = [
  	 "code"=>1,
  	 "uid"=>$uid,
  	 "name"=>$name
  	];
      echo json_encode($output);
    }
  ?>