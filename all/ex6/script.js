function valida(){
	var resultado = parseInt(document.getElementById('resultado').value);
	var resultadodois = parseInt(document.getElementById('resultadodois').value);
	var resultadotres = parseInt(document.getElementById('resultadotres').value);
	var tt = (resultado + resultadodois + resultadotres)/3;

	if (tt < 7) {

		alert("REPROVADO!");
	} else {

		alert("APROVADO");
	}
		
	}

	

