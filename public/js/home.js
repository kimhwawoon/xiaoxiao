$(function (){
    //滚动加载
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >= $('.containerbottom').offset().top + $('.containerbottom').height() )
            {
                if(XIAO.loadingArticle == 0 && XIAO.getMoreUrl != "")
                {
                    //1表示正在加载，0表示加载完毕
                    XIAO.loadingArticle = 1;
                    if(XIAO.stop)
                    {
                        return false;
                    }
                    $("#home_articles").append('<div style="text-align: center;" id="loadingArt"><img src="img/loading.gif" /></div>');
                    $.getJSON(XIAO.getMoreUrl,{'offset':XIAO.loadedCount},function(dts){
                        $('#loadingArt').remove();
                        if(dts.count != 0)
                        {
                            XIAO.loadedCount = parseInt(XIAO.loadedCount) + dts.count;
                            $("#home_articles").append(dts.rows);
                        }
                        else
                        {
                            $("#home_articles").append('<a type="button" class="btn btn-primary  btn-lg btn-block disabled">讲个故事："从前有个太监","下面呢?","没有了"</a>');
                            XIAO.stop = true;
                        }
                        XIAO.loadingArticle = 0;
                    });
                }
            }
    });
});