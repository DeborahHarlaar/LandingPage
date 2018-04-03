function navBar(){
	var click = document.getElementById("topNavigation");
	if (click.className === "navigation"){
		click.className += " responsive";
	}else{
		click.className= "navigation";
	}
}

