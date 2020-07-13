function conta(dep, alvo){
	var soma = 0;
	var destino = document.getElementById(alvo).value;
	soma += parseInt(destino) + parseInt(dep.value);
	document.getElementById(alvo).value = Math.max(soma,0);
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

function confirmClear(){
	resp = confirm('Tem certeza que deseja limpar os campos?');
	var elems = document.getElementsByClassName('impMedio');
	if (resp){
		document.getElementsByClassName('impTotalzao')[0].value = '0';
		for(var i = 0; i < elems.length; i++) {
		    elems[i].value = '0';
		}
	}
}

function escolheCor(){
	var corBack = document.getElementById("back").value;
	var corForm = document.getElementById("form").value;
	var corLetras = document.getElementById("letras").value;

	document.body.style.background = corBack;
	document.getElementById("vendas").style.background = corForm;
	document.getElementById("vendas2").style.background = corForm;
	document.getElementById("vendas").style.color = corLetras;
	document.getElementById("vendas2").style.color = corLetras;
}

function escolheFonte(){
	var fonte = document.getElementById("fonteForm").value;
	document.getElementById("vendas").style.fontFamily = fonte;
	document.getElementById("vendas2").style.fontFamily = fonte;
}

function temaEscuro(){
	document.body.style.background = "#333333";
	document.getElementById("vendas").style.background = '#7a7a71';
	document.getElementById("vendas2").style.background = '#7a7a71';
	document.getElementById("vendas").style.color = "#AA0000";
	document.getElementById("vendas2").style.color = "#AA0000";
}

function esconder(){
	esconde = document.getElementById("check").checked;
	if (esconde){
		document.getElementById("main").style.visibility = "visible";
		document.getElementById("master").style.border = "1px solid black";
	}
	else {
		document.getElementById("main").style.visibility = 'hidden';
		document.getElementById("master").style.border = "none";
	}
}

/*
function esconder(){
	check = document.getElementById("check");
	if (check == checked){
		document.getElementById("main").style.display = "none";
		//document.getElementById("main").style.
	}
}
*/