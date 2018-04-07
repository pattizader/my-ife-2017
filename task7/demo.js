$(function(){
	//导航栏效果
	var $lis=$(".nav li:gt(0)");
	// console.log($lis);
	$lis.each(function(){
		$(this).hover(function(){
			$(this).attr("class","active");
		},function(){
			$(this).attr("class","unactive");
		})
	})
	//下拉列表效果
	var $selectbox=$(".input>div");
	$('.country,.province,.city').hover(function(){
		// console.log($(this));
		$(this).children("div").show();
	},function(){
		$(this).children("div").hide();
	});
	var as=$selectbox.children();
	// console.log(as);
	as.each(function(){
		$(this).hover(function(){
			$(this).attr("class","selected");
			$(this).children().addClass("click");
		},function(){
			$(this).attr("class","unselect");
			$(this).children().removeClass("click")
		})
		$(this).bind("click",function(event){
			event.preventDefault();
			var $txt=$(this).parent().prev(".txt");
			$txt.text("");
			// console.log($(this));
			// var a=$(this)[0];
			$txt.text($(this).text());
		})
	})

})

