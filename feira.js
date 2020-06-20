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

	// Somar no totalzão
	var totalFinal = 0;
	var parciais = document.getElementsByName("totalParcial");
	for (var j = 0; j < parciais.length; j++){
		totalFinal += parseFloat(parciais[j].value);
	}
	document.getElementById("total").value = totalFinal;
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

	// Subtrair no totalzão
	var totalFinal = 0;
	var parciais = document.getElementsByName("totalParcial");
	for (var j = 0; j < parciais.length; j++){
		totalFinal += parseFloat(parciais[j].value);
	}
	document.getElementById("total").value = totalFinal;
}