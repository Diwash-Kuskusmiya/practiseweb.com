let toggle = document.getElementById("hamburger");
let menu = document.getElementById("menu")

function menuToggle(){
	if (menu.style.display==="inline-block") {
		menu.style.display="none";
	}

	else if(menu.style.display==="none"){
		menu.style.display="inline-block";
	}
}