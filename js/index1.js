/**
 * Created by Administrator on 2017/10/12.
 */
$(function(){
    var $li =$(".skin li");
    $li.click(function(){
        switchSkin( this.id );
    });
    var cookie_skin = $.cookie("MyCssSkin");
    if (cookie_skin) {
        switchSkin(cookie_skin);
    }

});

function switchSkin(skinName){
    $("#"+skinName).addClass("selected")                //当前<li>元素选中
        .siblings().removeClass("selected");  //去掉其他同辈<li>元素的选中
    $("#cssfile").attr("href","css/skin/"+ skinName +".css"); //设置不同皮肤
    $.cookie( "MyCssSkin" ,  skinName , { path: '/', expires: 10 });
}

//02导航效果（兼容IE6）
$(function(){
 $("#navigation ul li:has(ul)").hover(function(){
 $(this).children("ul").stop(true,true).slideDown(400);
 },function(){
 $(this).children("ul").stop(true,true).slideUp("fast");
 });
 })



//01 新闻滚动
$(function(){
    var $this = $(".scrollNews");
    var scrollTimer;
    $this.hover(function(){
        clearInterval(scrollTimer);
    },function(){
        scrollTimer = setInterval(function(){
            scrollNews( $this );
        }, 3000 );
    }).trigger("mouseleave");
});

function scrollNews(obj){
    var $self = obj.find("ul:first");
    var lineHeight = $self.find("li:first").height(); //获取行高
    $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
        $self.css({marginTop:0}).find("li:first").appendTo($self); //appendTo能直接移动元素
    })
}

//02 模块展开和折叠
$(function(){
    var i=1;
    $(".B_left ul li h4 img").click(function(){
        $this=$(this);
        var $self = $(this).parent().next();
        if(i==1){
            $self.slideToggle(600,function(){
                $this.attr("src","images/up.png");
            });
            i++;
        }else{
            $self.slideToggle(600,function(){
                $this.attr("src","images/down.png");
            });
            i=1;
        }
    })
})

//New_arrival
$(function(){
    var pre = 1;
    var a;
    $tempWrap = $(".New_arrival .New_arrival_E .tempWrap ul");
    a=function () {
        if(!$tempWrap.is(":animated")){
            if(pre > 3){
                $tempWrap.animate({left:"-=264"},"slow",function(){
                    $tempWrap.animate({left:"-264"},0)
                })
                pre = 1
            }else{
                $tempWrap.animate({left:"-=264"},"slow")
                pre++
            }
        }
    };
    $tempWrap.hover(function () {
        clearInterval(sij)
    },function(){
        sij = setInterval(a,2000);
    }).trigger("mouseleave");
})
