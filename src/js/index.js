/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-12-11 09:58:41
 * @version $Id$
 */
$(function() {
    //获取浏览器的参数
    function getQueryValue(key, url) {
        var vals = new RegExp("[\&|\?]" + key + "=([^&]*)&{0,1}", "ig").exec(url);
        return vals ? (vals[1].replace(/#.*/gi, "")) : "";
    };
    //设置页面导航的焦点位置

    var posClass = getQueryValue("p", location.href);
    if(posClass == ""){
        posClass = "recruit";
    }
    $("." + posClass).addClass('active').siblings().removeClass('active');

    //tab切换
    $(".tab li").on("click",function() {
        var indexNum = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $(".tabItem:eq(" + indexNum + ")").show().siblings(".tabItem").hide();
    });


    //设置页头固定
    var s = false;
    $(window).scroll(function(){
        var wT = $(document).scrollTop();
        if(wT>20&&!s){
            $("#header").animate({
                "height" : "80px"
            },300);
            $("#header .header-nav a").animate({
                "paddingTop": "25px"
            },300);
            $("#header .logo").animate({
                "padding":"16px auto"
            },300);
            $("body").animate({
                "paddingTop": "80px"
            },300);
            s = true;
        }
        if(wT<20 && s){
            $("#header").removeClass('min').animate({
                "height" : "100px"
            },300);
            $("#header .header-nav a").animate({
                "paddingTop": "35px"
            },300);
            $("#header .logo").animate({
                "padding":"26px auto"
            },300);
            $("body").animate({
                "paddingTop": "100px"
            },300);
            s = false;
        }
    });

    //设置应聘弹出框的显示和位置
    var mTop = ($(".pop-box").innerHeight())/2;
    $(".pop-box").css("margin-top",-mTop);
    
    $(".applyBtn").click(function(){
        $(".mask").show();
        $(".pop-box").show();
    });
    $(".close").click(function(){
        $(this).parents(".pop-box").hide();
        $(".mask").hide();
    });
    // 宣讲
    $('.infor-icon div').mouseover(function() {
        if (!$(this).hasClass('xz-img')) {
            var index = $(this).index();
            $('.infor-icon div').each(function() {
                $(this).children('img:first-child').addClass('hide');
                $(this).children('img:last-child').removeClass('hide');
            })
            $(".infor-box ul li").each(function() {
                $(this).addClass('hide');
            })
            $(".infor-box ul li").eq(index).removeClass('hide');
            $(this).children('img:first-child').removeClass('hide');
            $(this).children('img:last-child').addClass('hide');
        }
    });
    // 问题解答
    $('.main-qa ul li').mouseover(function() {
        // $(this).children('p').css({'background': '#f7f7f7'});
        $(this).find('.txt-q').stop().animate({"padding-left": '10px'}, 300);
    });
    $('.main-qa ul li').mouseout(function() {
        // $(this).children('p').css('background', '#fff');
        $(this).find('.txt-q').stop().animate({"padding": '0'}, 300);
    });
    $('.main-qa ul li').click(function() {
        if ($(this).hasClass('qa-active')) {
            $(this).removeClass('qa-active');
        } else {
            $(".main-qa ul li").each(function() {
                $(this).removeClass('qa-active');
                $(this).find('.txt-a').slideUp(300);
            })
            $(this).addClass('qa-active'); 
        }
        $(this).find('.txt-a').slideToggle(500);      
    });

    // 初始化轮播图
    $('.swiper-slide .cover').click(function(event) {
        window.open('http://feibo.hotjob.cn/wt/Feibo/web/index/campus');
        // event.stopPropagation();
        // if ($(this).parents('div').hasClass('swiper-slide-active')) {
        //     var imgName = $(this).siblings('img').attr('alt');
        //     var index = $(this).siblings('img').attr('data-index');
        //     $('.slider-infor-box').children('span').show();
        //     $('.slider-infor-box').children('img').eq((Number(index - 1))).show();
        // }
    });

    $('.slider-infor-box').children('span').click(function() {
        $(this).css('display', 'none');
        $('.slider-infor-box').children('img').each(function() {
            $(this).hide();
        })
    });
    $('.wx-resume').mouseover(function() {
        $(this).find('.pop-code').show();
    }).mouseout(function() {
        $(this).find('.pop-code').hide();
    });
});
