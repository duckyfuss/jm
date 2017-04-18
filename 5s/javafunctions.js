var value1rm = 0;
var value=0;

function calall() {
	value1rm = document.getElementById("input1rm").value;
	display1rm.innerHTML  = value1rm;
	display7001rm1.innerHTML  = Math.round(value1rm*0.70);
	display7001rm11.innerHTML = Math.round(value1rm*0.70);
	
	display6501rm2.innerHTML = Math.round(value1rm*0.65);
	display7251rm2.innerHTML = Math.round(value1rm*0.725);
	display7751rm2.innerHTML = Math.round(value1rm*0.775);
	display7751rm22.innerHTML = Math.round(value1rm*0.775);
	
	display5001rm3.innerHTML = Math.round(value1rm*0.5);
	display6001rm3.innerHTML = Math.round(value1rm*0.6);
	display7001rm3.innerHTML = Math.round(value1rm*0.7);
	display7501rm3.innerHTML = Math.round(value1rm*0.75);
	display8001rm3.innerHTML = Math.round(value1rm*0.80);
	display8501rm3.innerHTML = Math.round(value1rm*0.85);
	
	display4001rmd.innerHTML = Math.round(value1rm*0.4);
	display5001rmd.innerHTML = Math.round(value1rm*0.5);
	display6001rmd.innerHTML = Math.round(value1rm*0.6);

}

