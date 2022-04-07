function burger() {
	var x = document.getElementById("myNav");
	if (x.className === "nav"){
		x.className += " resp";
	}else{
		x.className = "nav";
	}
}