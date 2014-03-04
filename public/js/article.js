/**
 * Created by kimi on 14-1-8.
 */
$(function(){
    //功能菜单置顶
    $(window).scroll(function(){
        if ($(this).scrollTop() > 130) {
            $('.sharetoolbar').addClass('barfixed');
        }
        else
        {
            $('.sharetoolbar').removeClass('barfixed');
        }
     });

    //评论区
    $('.userreplydiv').html(_.template($("#replyTpl").html(),  {'data':{'comment_id': 0, 'formid': 'commentorgin', 'classname': '' }}));

    //get comment list
    $.getJSON(ROOT_PATH+'/comment/all',
    {'article_id': $('#cur_article_id').val()},
    function(datas){
      $('#cmtloading').remove();
       $.each(datas,function(i,data){
           var loInsertHtml = _.template($("#commentTpl").html(), {'item':data});
           if(data.comment_id == 0)
           {
               $("#articlereplies").append(loInsertHtml);
           }
           else
           {
               $('#cmt_'+data.comment_id).append(loInsertHtml);
           }
       });
    });

});

function validateComment(formData, jqForm, options)
{
    if (!jqForm[0].myComment.value)
    {
        var n = noty({
            text        : "请输入评论内容！",
            type        : "information",
            dismissQueue: false,
            killer: true,
            layout      : 'topCenter',
            theme       : 'defaultTheme',
            timeout: 2000
        });
        return false;
    }
    else if(jqForm[0].myComment.value.length > 100)
    {
        var n = noty({
            text        : "评论内容不能超过100字！",
            type        : "information",
            dismissQueue: false,
            killer: true,
            layout      : 'topCenter',
            theme       : 'defaultTheme',
            timeout: 2000
        });
        return false;
    }

    return true;
}

function cmtup(cmt,cmtid)
{
    $.post(ROOT_PATH+'/comment/up',
        {'comment_id': cmtid},
        function(data){
            var curcount = $(cmt).find('#cmtup').html();
            $(cmt).find('#cmtup').html(parseInt(curcount)+1);
    });
}

function addReplyArea(cmtid)
{
    var loInsertHtml = _.template($("#replyTpl").html(), {'data':{'comment_id': cmtid, 'formid': "commentReplyForm", 'classname': 'replyform' }});
    $('.replyForm').remove();
    $('#cmt_'+cmtid).append(loInsertHtml);
}

function cmtreply(formid)
{
    $("#"+formid).ajaxSubmit({
        beforeSubmit: validateComment,
        dataType:'json',
        success:function(data)
        {
            if(data.state == 0)
            {
                var n = noty({
                            text        : "评论添加失败！",
                            type        : "information",
                            dismissQueue: false,
                            killer: true,
                            layout      : 'topCenter',
                            theme       : 'defaultTheme',
                            timeout: 2000
                        });
            }
            else
            {
                var n = noty({
                    text        : "评论 + 1",
                    type        : "information",
                    dismissQueue: false,
                    killer: true,
                    layout      : 'topCenter',
                    theme       : 'defaultTheme',
                    timeout: 2000
                });

               $(".replyform").remove();
               var loInsertHtml = _.template($("#commentTpl").html(), {'item':data});
               if(data.comment_id == 0)
               {
                   $("#articlereplies").append(loInsertHtml);
               }
               else
               {
                   $('#cmt_'+data.comment_id).append(loInsertHtml);
               }
            }
        }
    });
}

function articlePointUp(artid)
{
    var loObj = $('#up');
    //uped
    if(loObj.hasClass('up_c'))
    {
        var val = $("#article_points").html();
        $("#article_points").html(parseInt(val) - 1);
        $("#up").removeClass('up_c');
        $("#down").removeClass('down_c');
        $.getJSON(ROOT_PATH + "/vote/unlike",{"id":artid},function(data){
        });
    }
    //not
    else
    {
        var val = $("#article_points").html();
        if($("#down").hasClass('down_c'))
        {
            $("#article_points").html(parseInt(val) + 2);
        }
        else
        {
            $("#article_points").html(parseInt(val) + 1);
        }
        $("#up").addClass('up_c');
        $("#down").removeClass('down_c');
        $.getJSON(ROOT_PATH + "/vote/like",{"id":artid},function(data){
        });
    }
}

function articlePointDown(artid)
{
    var loObj = $('#down');
    //uped
    if(loObj.hasClass('down_c'))
    {
        var val = $("#article_points").html();
        $("#article_points").html(parseInt(val) + 1);
        $("#up").removeClass('up_c');
        $("#down").removeClass('down_c');
        $.getJSON(ROOT_PATH + "/vote/unlike",{"id":artid},function(data){
        });
    }
    //not
    else
    {
        var val = $("#article_points").html();
        if($("#up").hasClass('up_c'))
        {
            $("#article_points").html(parseInt(val) - 2);
        }
        else
        {
            $("#article_points").html(parseInt(val) - 1);
        }
        $("#up").removeClass('up_c');
        $("#down").addClass('down_c');
        $.getJSON(ROOT_PATH + "/vote/dislike",{"id":artid},function(data){
        });
    }
}