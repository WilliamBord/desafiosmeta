function valida(){
	var a = parseInt(document.getElementById('a').value); var b = parseInt(document.getElementById('b').value); var r = Math.hypot(a,b)
	alert("VALOR DA HIPOTENUSA É: " + r.toFixed(2));
}
