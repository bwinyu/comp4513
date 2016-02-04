window.addEventListener ("load", function () {
	var panels = document.querySelectorAll (".fa");
	for (var i = 0; i < panels.length; i++) {
		panels[i].addEventListener ("click", fadePanel);
	}
});

function fadePanel (e) {
	e.target.parentNode.style.opacity = "0";
	e.target.parentNode.style.transition = "opacity 1s";
}