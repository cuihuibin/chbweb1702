/**
 * Created by bjwsl-001 on 2017/6/26.
 */
    $(function () {
        var nav=$("#fix_title"); //�õ���������
        var win=$(window); //�õ����ڶ���
        var sc=$(document);//�õ�document�ĵ�����
        win.scroll(function () {
            if(sc.scrollTop()<=120){
                nav.removeClass("fix-news-title");
            }
            else{
                nav.addClass('fix-news-title');
            }
        })
    })