
/*数量和价格联动*/
$(function(){
    var $span = $(".subject .subject_wai .subject_w_right .subject_w_r_center .pro_size ul li span");
	var price = $span.text();	
	$("#num_sort").change(function(){
	    var num = $(this).val();
		var amount = num * price;
		$span.text( amount );
	}).change();
})
