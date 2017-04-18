var value1rm = 0;
var value=0;

function calall() {
	value1rm = document.getElementById("input1rm").value;
	display1rm.innerHTML  = value1rm;
	display6001rm.innerHTML  = Math.round(value1rm*0.6);
	display6001rm2.innerHTML = Math.round(value1rm*0.6);
	
	display5501rm.innerHTML = Math.round(value1rm*0.55);
	display6251rm.innerHTML = Math.round(value1rm*0.625);
	display6751rm.innerHTML = Math.round(value1rm*0.675);
	display6751rm2.innerHTML = Math.round(value1rm*0.675);
	
	display5001rm.innerHTML = Math.round(value1rm*0.5);
	display6001rm3.innerHTML = Math.round(value1rm*0.6);
	display7001rm.innerHTML = Math.round(value1rm*0.7);
	display7501rm2.innerHTML = Math.round(value1rm*0.75);
	
	display4001rm.innerHTML = Math.round(value1rm*0.4);
	display5001rm2.innerHTML = Math.round(value1rm*0.5);
	display6001rm4.innerHTML = Math.round(value1rm*0.6);

}

