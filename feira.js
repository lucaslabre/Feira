function soma(nome, id, valor){
	var zero = document.getElementById(id).value;
	qtd = parseInt(zero) + parseInt(1);           // Incrementa 1 na variável total
	document.getElementById(id).value = qtd;        // escreve o total do produto vendido
	document.getElementById("r" + id).value = qtd * parseFloat(valor);  // multiplica a quantidade pelo valor
	
	// Para somar o valor total de cada produto 
	var total = 0;
	var nom = document.getElementsByName(nome);
	for (var i = 0; i < nom.length; i++){
		total += parseFloat(nom[i].value);
	}
	document.getElementById("total" + nome).value = total;	

	// Somar no totalzão
	var totalFinal = 0;
	var parciais = document.getElementsByName("totalParcial");
	for (var j = 0; j < parciais.length; j++){
		totalFinal += parseFloat(parciais[j].value);
	}
	document.getElementById("total").value = totalFinal;
}

function subtrai(nome, id, valor){
	var zero = document.getElementById(id).value;
	qtd = parseInt(zero) - parseInt(1);
	document.getElementById(id).value = qtd;
	document.getElementById("r" + id).value = qtd * parseFloat(valor);

	// Para somar o valor total de cada produto de cada produto
	var total = 0;
	var nom = document.getElementsByName(nome);
	for (var i = 0; i < nom.length; i++){
		total += parseFloat(nom[i].value);
	}
	document.getElementById("total" + nome).value = total;	

	// Subtrair no totalzão
	var totalFinal = 0;
	var parciais = document.getElementsByName("totalParcial");
	for (var j = 0; j < parciais.length; j++){
		totalFinal += parseFloat(parciais[j].value);
	}
	document.getElementById("total").value = totalFinal;
}

// Função que soma os refrigerantes

function somaEspecifico(nome, valor){
	var pega = document.getElementsByName(nome);
	var alvo = document.getElementById("r" + nome);
	var soma = 0;
	for (var i = 0; i < pega.length; i++){
		soma += parseFloat(pega[i].value) * parseFloat(valor);
	}
	alvo.value = soma;
}