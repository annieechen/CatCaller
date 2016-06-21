function randomCat() {
	document.getElementById("catpictures").innerHTML =
		`<img src="http://thecatapi.com/api/images/get?format=src&size=small&type=gif&dummy=${Math.random()*10}">`;
}
document.getElementById('gobutton').onclick = randomCat;
