jQuery(document).ready(function(){

  $("#landing").fadeOut(2000,function(){
     $('#welcome').css( "display", "block");
  });

});

// Code for the hamburger menu from bootcamp 

let megaMenu = document.getElementById("overlay"); 
let ham_layer = document.getElementsByClassName("ham-layer");
let toggle = false; 

function toggleHamMenu(){
	if (toggle === false){
		document.getElementById("top_bun").style.top = "11px"; 
		document.getElementById("top_bun").style.transform = "rotate(45deg)"; 
		document.getElementById("meat").style.opacity = "0";
		document.getElementById("bottom_bun").style.top = "-11px";
		document.getElementById("bottom_bun").style.transform = "rotate(-45deg)";

		for(let i = 0; i < ham_layer.length; i++){ 
			ham_layer[i].style.backgroundColor = "white"; 
		}
		toggle = true; 
		megaMenu.style.height = "100vw";
	}else{
		document.getElementById("top_bun").style.top = "-0.05px"; 
		document.getElementById("top_bun").style.transform = "rotate(0deg)"; 
		document.getElementById("meat").style.opacity = "100";
		document.getElementById("bottom_bun").style.top = "0.05px";
		document.getElementById("bottom_bun").style.transform = "rotate(0deg)";
		
		for(let i = 0; i < ham_layer.length; i++){ 
			ham_layer[i].style.backgroundColor = "#333"; 
		}

	toggle = false; 
	megaMenu.style.height = "0vh"; 
	}

	}
