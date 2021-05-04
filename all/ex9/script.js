function valida() {
	var a = (document.getElementById("p")); var b = (document.getElementById("a"));

	if (a.value == 's' && b.value == 'n') {
		alert("OS MACACOS NÃO ESTÃO BRIGANDO");
	} else if (b.value == 's' && a.value == 'n') {
		alert("OS MACACOS NÃO ESTÃO BRIGANDO");
	} else if (b.value == 'n' && a.value == 'n') {
		alert("OS MACACOS ESTÃO BRIGANDO")
	} else if (b.value == 's' && a.value == 's') {
		alert("OS MACACOS ESTÃO BRIGANDO")
	} else {
		alert("baa ta ratiando")
	}
}


