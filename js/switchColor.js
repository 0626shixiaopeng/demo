/*衣服颜色切换*/
$(function(){
	$(".subject .subject_wai .subject_w_right .subject_w_r_center ul li img").click(function(){
		  var imgSrc = $(this).attr("src");
		  var i = imgSrc.lastIndexOf(".");
		  var unit = imgSrc.substring(i);
		  imgSrc = imgSrc.substring(0,i);
		  var imgSrc_small = imgSrc + "_one_small"+ unit;
		  var imgSrc_big = imgSrc + "_one_big"+ unit;
		  $("#bigImg").attr({"src": imgSrc_small ,"jqimg": imgSrc_big });
		  $("#thickImg").attr("href", imgSrc_big);
		  var alt = $(this).attr("alt");
		  $(".subject_w_r_center p").text(alt);
		  var url = imgSrc+".html";
		  $(".subject .subject_wai .subject_w_left ul.imgList")
				.empty()
				.load(url);
	});
});