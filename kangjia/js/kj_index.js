//图片滚动效果
window.onload = function(){
    var aImg = document.querySelectorAll("#slider>img");
    var aNum = document.querySelectorAll("#slider li");
    var timer = play = null;
    var i = index = 0;
    function show(a){
        index = a;
        var alpha = 0;
        for(i=0;i<aNum.length;i++){
            aNum[i].className = "";
        }
        aNum[index].className = "active";
        clearInterval(timer);
        for(i=0;i<aImg.length;i++){
            aImg[i].style.opacity = 0;
            aImg[i].style.filter = "alpha(opacity=0)";
        }
        timer = setInterval(function(){
            alpha += 2;
            alpha > 100 && (alpha = 100);
            aImg[index].style.opacity = alpha/100;
            aImg[index].style.filter = "alpha(opacity="+alpha+")";
            alpha==100&&clearInterval(timer);
        },20);


    }
    autoPlay();
    function autoPlay(){
        play = setInterval(function(){
            index++;
            index >= aImg.length && (index=0);
            show(index)
        },3000);
    }

}

function show_top_tip(message,callback){
    $("#dy_top_tip").text(message);
    $("#dy_top_tip").fadeIn(200);
    setTimeout(function(){$("#dy_top_tip").fadeOut(200);if(callback) callback(message);},3000);
}

$(document).ready(function(){
    $(".product").mouseenter(function(){
        $("#product-items").fadeIn(1000);
    });
    $(".product").mouseleave(function(){
        $("#product-items").fadeOut(0);
    });
});

$(document).ready(function(){
    $(".shop").mouseenter(function(){
        $("#shop-items").fadeIn(1000);
    });
    $(".shop").mouseleave(function(){
        $("#shop-items").fadeOut(0);
    });
});

//$('#welcome').html(sessionStorage['loginUname']);



