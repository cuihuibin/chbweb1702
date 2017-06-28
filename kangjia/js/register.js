/**
 * Created by bjwsl-001 on 2017/6/25.
 */
//$("#bt-register").click(function(){
//    var email = $("#email").val();
//    var upwd = $("#upwd").val();
//    var rupwd = $("#rupwd").val();
//    var upwdreg = /^[0-9a-zA-Z]{3,10}$/;
//    if(!upwdreg.test(upwd)){
//        alert("密码格式不正确");
//        return false;
//    }
//    if(upwd != rupwd){
//        alert("确认密码与密码不同");
//        return false;
//    }
//    return true;
//});
//
//$(".button-register").click(function(){
//    if($(":text").val()==""){
//        alert("请输入用户名");
//    }
//});
$(function(){
    $("#bt-register").click(function(){
        //2.1:获取用户名，密码
        var n = $("[name='name']").val();
        var m = $("[name='email']").val();
        var p = $("[name='upwd']").val();
        //2.2:发送ajax $.ajax();
        $.ajax({
            type:'POST',
            url:'data/register.php',
            data:{name:n,email:m,upwd:p},
            success:function(data){
                if(data.code<0){
                    $('p.alert').html(data.msg);
                }
                else{
                    location.href='login.html';
                }
            }
        });
    });
});//$() end;