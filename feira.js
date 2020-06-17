function soma(ident, ref, valor){
	var parcial = document.getElementById(ref).value;
	qtd = parseInt(parcial) + parseInt(1);           // Incrementa 1 na variável total
	document.getElementById(ref).value = qtd;        // escreve o total do produto vendido
	document.getElementById("r" + ref).value = qtd * parseFloat(valor);  // multiplica a quantidade pelo valor

	// Para somar o valor total de cada produto de cada produto
	var total = 0;
	var nome = document.getElementsByName(ident);
	for (var i = 0; i < nome.length; i++){
		total += parseFloat(nome[i].value);
	}
	document.getElementById("total" + ident).value = total;	
}

function subtrai(ident, ref, valor){
	var parcial = document.getElementById(ref).value;
	qtd = parseInt(parcial) - parseInt(1);
	document.getElementById(ref).value = qtd;
	document.getElementById("r" + ref).value = qtd * parseFloat(valor);

	// Para somar o valor total de cada produto de cada produto
	var total = 0;
	var nome = document.getElementsByName(ident);
	for (var i = 0; i < nome.length; i++){
		total += parseFloat(nome[i].value);
	}
	document.getElementById("total" + ident).value = total;	
}



/*
function rSoma(refOrigem, refDestino, valor){
	var qtd = document.getElementById(refOrigem).value;
	valor = parseInt(valor);
	total = qtd * valor;
	document.getElementById(refDestino).value = total;
}
*/

/*
function valores(){
	var dict = new Map();
	dict.set("pCarne","2.5");
	dict.set("pQueijo", "2.0");
	dict.set("pFrango", "1.0");

	alert(dict);
}
*/