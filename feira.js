function conta(dep, alvo){
	var soma = 0;
	var destino = document.getElementById(alvo).value;
	soma += parseInt(destino) + parseInt(dep.value);
	document.getElementById(alvo).value = soma;
}

function soma(dependencia, preco){
	var valor = 0;
	var dep = document.getElementById(dependencia).value;
	valor += parseFloat(dep) * preco;
	document.getElementById('r' + dependencia).value = valor; 
}

function somaEspecifico(dependencia, preco){
	var valor = 0;
	var dep = document.getElementsByName(dependencia);
	for (i = 0; i < dep.length; i++){
		valor += parseFloat(dep[i].value) * parseFloat(preco);
	}
	document.getElementById("r" + dependencia).value = valor;
}

function totalParcial(dependencia){
	var total = 0;
	var dep = document.getElementsByName(dependencia);
	for (var i = 0; i < dep.length; i++){
		total += parseFloat(dep[i].value);
	}
	document.getElementById("total" + dependencia).value = total;
	totalzao();
}

function totalzao(){
	var soma = 0;
	var dep = document.getElementsByName('totalParcial');
	for (var i = 0; i < dep.length; i++){
		soma += parseFloat(dep[i].value);
	}
	document.getElementById("total").value = soma;
}