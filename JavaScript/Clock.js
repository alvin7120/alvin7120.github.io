function myClock(){
	var myTime = new Date();
	var h = myTime.getHours()
	var m = myTime.getMinutes()
	var s = myTime.getSeconds()
	var y = myTime.getYear()
	var mt = myTime.getMonth()
	var d = myTime.getDate()
	var apm = '';
	
	if(h == 0){
		h = 12;
		apm = 'AM';
	}else if(h > 12){
		h = h - 12;
		apm = 'PM';
	}else{
		apm = 'AM'
	}
	
	if(h < 10){
		h = '0' + h;
	}
	if(m < 10){
		m = '0' + m;
	}
	if(s < 10){
		s = '0' + s;
	}
	if(d < 10){
		d = '0' + d;
	}
	if(mt < 10){
		mt = '0' + mt;
	}
	
	if(y >100){
	y = y + 1900;
	}
	
	var timeDisplay = document.getElementById('clockDisplay');
	var dateDisplay = document.getElementById('dateDisplay');
	timeDisplay.textContent = h + ":" + m + ":" + s + " " + apm ; 
	dateDisplay.textContent = '\n' + d + "/" + mt + "/" + y;
	setTimeout('myClock()',1000);
}