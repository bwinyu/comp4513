window.addEventListener ("load", function () {
	div = document.createElement ("div");
	div.style.background = "white";
	div.style.padding = "10px 10px 10px 10px";
	div.style.border = "10px solid black";
	div.style.display = "none";
	div.style.position = "fixed";
	document.getElementById ("artistBox").appendChild (div);

	img = document.createElement ("img");
	div.appendChild (img);

	var thumbnails = document.querySelectorAll (".thumbnail");

	for (var i = 0; i < thumbnails.length; i++) {
		thumbnails[i].addEventListener ("mouseenter", spanImage);
		thumbnails[i].addEventListener ("mouseout", spanImage);
	}
});

function spanImage (e) {
	if (e.type == "mouseenter") {
		img.setAttribute ("src", "images/art/small/" + e.target.src.substring (e.target.src.lastIndexOf ("/")));
		div.style.left = e.clientX + "px";
		div.style.top = e.clientY + "px";
		div.style.display = "inline";
	} else if (e.type == "mouseout") {
		div.style.display = "none";
	}
}