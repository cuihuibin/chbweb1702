/**
 * Created by bjwsl-001 on 2017/6/24.
 */
$(function(){
    $("#bt-login").click(function(){
        //2.1:获取用户名，密码
        var n = $("[name='name']").val();
        var p = $("[name='upwd']").val();
        sessionStorage['loginUname'] = $('[name="name"]').val();
        //2.2:发送ajax $.ajax();
        $.ajax({
            type:'POST',
            url:'data/login.php',
            data:{name:n,upwd:p},
            success:function(data){
                if(data.code<0){
                    $('p.alert').html(data.msg);
                }
                else{
                    //隐藏模态框
                    //$(".modal").hide();
                    location.href='index.html';
                }
            }
        });
    });
});//$() end;