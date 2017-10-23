/**
 * Created by Administrator on 2017/10/19.
 */
$(function () {

    $(".product .product_wai .product_w_right ul li a").each(function(index,btn){
        btn=$(btn);
        btn.click(function(ev){
            $(this).addClass('dianj').parent().siblings().find('a').removeClass('dianj')
            $(".product .product_wai .product_w_right p").eq(index).addClass("xians")
                .siblings().removeClass("xians");
            return false;
            alert(1);
        })
    })
})