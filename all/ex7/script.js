function valida(){
	var a = parseInt(document.getElementById('a').value);
	var b = parseInt(document.getElementById('b').value);
	var c = parseInt(document.getElementById('c').value);
	var d = parseInt(document.getElementById('d').value);
	var e = parseInt(document.getElementById('e').value);
	var f = parseInt(document.getElementById('f').value);
	var g = parseInt(document.getElementById('g').value);
	var h = parseInt(document.getElementById('h').value);
	var i = parseInt(document.getElementById('i').value);
	var j = parseInt(document.getElementById('j').value);
	var max = Math.max(a, b, c, d, e , f, g, h,  i, j);
	var min = Math.min(a, b, c, d, e , f, g, h,  i, j);
	alert("Maior número digitado é: "+ max + " Menor número digitado é: "+ min)
}


