/*最终购买输出*/
$(function(){
    var $product = $(".subject .subject_wai .subject_w_right");
	$(".subject .subject_w_right .subject_w_r_bottom input").click(function(){
        var pro_name = $product.find(".subject_w_r_top h3").text();
		var pro_size = $product.find("#sele_size").val();
		var pro_color =  $(".subject_w_r_center p").text();
		var pro_num = $product.find("#num_sort").val();
	    var pro_price = $product.find(".subject_w_r_center .pro_size ul li span").html()
		var dialog = " 感谢您的购买。\n您购买的\n"+
		        "产品是："+pro_name+"；\n"+
				"尺寸是："+pro_size+"；\n"+
				"颜色是："+pro_color+"；\n"+
				"数量是："+pro_num+"；\n"+
				"总价是："+pro_price +"元。";
		if( confirm(dialog) ){
			alert("您已经下单!");
		}
		return false;//避免页面跳转
	})
})