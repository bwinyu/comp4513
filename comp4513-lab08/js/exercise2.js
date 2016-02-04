window.addEventListener ("load", function () {
	var thumbnails = document.getElementById ("thumbnails");
	thumbnails.addEventListener ("click", imageClick);

	document.getElementById ("featured").addEventListener ("mouseenter", fadeCaption);
	document.getElementById ("featured").addEventListener ("mouseout", fadeCaption);
});

function imageClick (e) {
	document.getElementById ("featured").childNodes[1].setAttribute ("src",
		"images/travel/medium/" + e.target.src.substring (e.target.src.lastIndexOf("/")));
	document.getElementById ("featured").childNodes[1].setAttribute ("title", e.target.title);
	document.getElementById ("featured").childNodes[3].innerText = e.target.title;
}

function fadeCaption (e) {
	if (e.type == "mouseenter") {
		document.getElementById ("featured").childNodes[3].style.opacity = "0.7";
	} else if (e.type == "mouseout") {
		document.getElementById ("featured").childNodes[3].style.opacity = "0";
	}
	document.getElementById ("featured").childNodes[3].style.transition = "opacity 1s";
}