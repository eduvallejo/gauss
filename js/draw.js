function draw () {
	console.log("draw" + canvas.height);
	ctx.rect(canvas.width/3, canvas.height/3, Math.sqrt(Area1), Math.sqrt(Area1));
	ctx.stroke();
}

function fillRect (i,j) {
	ctx.fillRect(i*zoom,j*zoom,zoom,zoom);//principioX, principioY, longitud, altura)
	console.log("fillrect.js");
}

function deleteRect (i,j) {
	// ctx.fillRect(i*zoom,j*zoom,zoom,zoom);//principioX, principioY, longitud, altura)
	ctx.clearRect(i*zoom,j*zoom,zoom,zoom);
}