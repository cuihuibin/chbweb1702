/**
 * Created by bjwsl-001 on 2017/6/26.
 */
    $(function () {
        var nav=$("#fix_title"); //得到导航对象
        var win=$(window); //得到窗口对象
        var sc=$(document);//得到document文档对象。
        win.scroll(function () {
            if(sc.scrollTop()<=120){
                nav.removeClass("fix-news-title");
            }
            else{
                nav.addClass('fix-news-title');
            }
        })
    })