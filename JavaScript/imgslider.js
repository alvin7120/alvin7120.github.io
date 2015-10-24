function slider(){
	$(".slider #1").show("fade",500);
	$(".slider #1").delay(500).hide("slide",{direction:'left'},1000);
	
	var si=$(".slider img").size();
	var count=2;
	
	setInterval(function(){
		$(".slider #"+count).show("slide",{direction:'right'},1000);
		$(".slider #"+count).delay(500).hide("slide",{direction:'left'},1000);
		
		if(count==si){
			count = 1;
		}else{
			count = count + 1;
		}
	},2500);
}