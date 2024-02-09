let switchMode = document.getElementById("switchMode");

switchMode.onclick = function(){
	let themes = document.getElementById("theme");

	if(themes.getAttribute("href") == "stylee.css"){
		themes.href = "darktheme.css";
	}
	else{
		themes.href = "stylee.css"
	}
}

function show(state){
	document.getElementById('window').style.display = state;
	document.getElementById('gray').style.display = state;
}
let submit = document.getElementById("submit")
submit.onclick = function() {
	
	alert("Successfully loged in")
}