var value1rm = 0;
var value=0;

function calall() {
	value1rm = document.getElementById("input1rm").value;
	display1rm.innerHTML  = value1rm;
	display6501rm1.innerHTML  = Math.round(value1rm*0.65);
	display6501rm11.innerHTML = Math.round(value1rm*0.65);
	
	display6001rm2.innerHTML = Math.round(value1rm*0.60);
	display6751rm2.innerHTML = Math.round(value1rm*0.675);
	display7251rm2.innerHTML = Math.round(value1rm*0.725);
	display7251rm22.innerHTML = Math.round(value1rm*0.725);
	
	display5001rm3.innerHTML = Math.round(value1rm*0.5);
	display6001rm3.innerHTML = Math.round(value1rm*0.6);
	display7001rm3.innerHTML = Math.round(value1rm*0.7);
	display7501rm3.innerHTML = Math.round(value1rm*0.75);
	display8001rm3.innerHTML = Math.round(value1rm*0.80);
	
	display4001rmd.innerHTML = Math.round(value1rm*0.4);
	display5001rmd.innerHTML = Math.round(value1rm*0.5);
	display6001rmd.innerHTML = Math.round(value1rm*0.6);

}

