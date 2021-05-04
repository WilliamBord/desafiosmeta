function valida(){
	var a = parseInt(document.getElementById('a').value); var b = parseInt(document.getElementById('b').value); var c = parseInt(document.getElementById('c').value);
    var delta = b * b - 4 * a * c;
	
	if (!a || !b || !c) {
			alert("Insira os valores de a, b e c");
		  } else if (a == 0) {
			alert("O valor de <strong>a</strong>, deve ser diferente de 0");
		  } else if (delta < 0) {
			alert("Sem raízes reais");
		  } else {
			 x1 = (-b + Math.sqrt(delta)) / (2 * a);
			 x2 = (-b - Math.sqrt(delta)) / (2 * a);
			alert("| Valor de x1: " + x1 + "| Valor de x2: " + x2 +"|")
	}
}
