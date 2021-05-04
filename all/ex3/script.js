function valida(){
	var r = parseInt(document.getElementById('r').value); var t = r;
   
	if (t > 0) {
		alert("É um número positivo");

	} else if(t === 0){

		alert("não é positivo, muito menos negativo");

	} else {

		alert("é um número negativo");
	}
}
	

