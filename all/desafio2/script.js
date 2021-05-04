function primo(num) {
	if (num != 1) {
		for (var i = 2; i < num; i++)
			if (num % i == 0) return false;
		return num !== 1;
	}
}
function verificaPrimo() {
	var num = parseInt(document.getElementById("num").value;
	var resl = "";
	// verifica se é número
	if (!isNaN(num)) {
		// verifica se é primo
		if (primo(num)) {
			alert("É PRIMO");
		} else {
			alert("NÃO É PRIMO")
		}
	}
	else {
		alert("viajando de novo né cupixa!")
	}
}