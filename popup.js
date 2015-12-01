var a = 0;
function count() {
	console.log("help!");
	a++;
	document.getElementById("catpictures").innerHTML='<a href="http://thecatapi.com"><img src="http://thecatapi.com/api/images/get?format=src&size=small&type=gif&dummy='+a+'"></a>';
}
document.getElementById('gobutton').onclick = count;
