function soma(ref){
	var parcial = document.getElementById(ref).value;
	total = parseInt(parcial) + parseInt(1);
	document.getElementById(ref).value = total;
}

function subtrai(ref){
	var parcial = document.getElementById(ref).value;
	total = parseInt(parcial) - parseInt(1);
	document.getElementById(ref).value = total;
}

function valores(){
	var dict = new Map();
	dict.set("pCarne","2.5");
	dict.set("pQueijo", "2.0");
	dict.set("pFrango", "1.0");

	alert(dict);
}